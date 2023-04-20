import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import crypto from "crypto";
import User from "../models/User";
import {
  attachCookiesToResponse,
  createTokenUser,
  sendVerificationEmail,
} from "../../utils";
import { UnauthenticatedError, BadRequestError } from "../errors";
import { sendEmail } from "../../utils/sendEmail";

export const register = async (req: Request, res: Response) => {
  const { email, name, password } = req.body;

  const emailAlreadyExists = await User.findOne({ email });
  if (emailAlreadyExists) {
    throw new BadRequestError("Email already exists");
  }

  //first registered user is an admin!
  const isFirstAccount = (await User.countDocuments({})) === 0;
  const role = isFirstAccount ? "admin" : "user";

  const verificationToken = crypto.randomBytes(40).toString("hex");

  const user: any = await User.create({
    name,
    email,
    password,
    role,
    verificationToken,
  });
  const origin = "http://localhost:3000";

  await sendVerificationEmail({
    name: user.name,
    email: user.email,
    verificationToken: user.verificationToken,
    origin,
  });

  //send verification token back only while testing in postman
  res.status(StatusCodes.CREATED).json({
    msg: "Please check your email to verify account",
  });
};

export const verifyEmail = async (req: Request, res: Response) => {
  const { verificationToken, email } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    throw new UnauthenticatedError("Verification failed");
  }

  if (user.verificationToken !== verificationToken) {
    throw new UnauthenticatedError("Verification failed");
  }

  user.isVerified = true;
  user.verified = new Date(Date.now());
  user.verificationToken = "";

  await user.save();

  res.status(StatusCodes.OK).json({ msg: "Email Verified" });
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new BadRequestError("Please provide email and passwrod");
  }
  const user = await User.findOne({ email });
  if (!user) {
    throw new UnauthenticatedError("Invalid Credentials");
  }

  const isPasswordCorrect = await user.comparePassword(password);
  if (!isPasswordCorrect) {
    throw new UnauthenticatedError("Invalid Credentials");
  }

  if (!user.isVerified) {
    throw new UnauthenticatedError("Please verify your email");
  }

  const tokenUser = createTokenUser(user);
  attachCookiesToResponse({ res, user: tokenUser });

  res.status(StatusCodes.OK).json({ user: tokenUser });
};

export const logout = async (req: Request, res: Response) => {
  res.cookie("token", "logout", {
    httpOnly: true,
    expires: new Date(Date.now()),
  });

  res.status(StatusCodes.OK).json({ msg: "user logged out" });
};
