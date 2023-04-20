import { Response, NextFunction } from "express";
import { isTokenValid, attachCookiesToResponse } from "../../utils";
import { RequestWithUser } from "../../types/authMiddlewareTypes";
import { UnauthenticatedError, UnauthorizedError } from "../errors";
import Token from "../models/Token";

export const authenticateUser = async (
  req: RequestWithUser,
  res: Response,
  next: NextFunction
) => {
  const { refreshToken, accessToken } = req.signedCookies;

  try {
    if (accessToken) {
      const payload = isTokenValid(accessToken);
      req.user = payload.user;
      return next();
    }
    const payload = isTokenValid(refreshToken);

    const existingToken = await Token.findOne({
      user: payload.user.userId,
      refreshToken: payload.refreshToken,
    });

    if (!existingToken || !existingToken?.isValid) {
      throw new UnauthenticatedError("Authentication Invalid");
    }

    attachCookiesToResponse({
      res,
      user: payload.user,
      refreshToken: existingToken.refreshToken,
    });

    req.user = payload.user;
    next();
  } catch (error) {
    throw new UnauthenticatedError("Authentication Invalid");
  }
};

export const authorizePremmisions = (...roles: string[]) => {
  return (req: RequestWithUser, res: Response, next: NextFunction) => {
    if (!req.user?.role || !roles.includes(req.user?.role)) {
      throw new UnauthorizedError("Unauthorized to access this route");
    }
    next();
  };
};
