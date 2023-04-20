import { Router } from "express";
import { authenticateUser } from "../middleware/authentication";
import {
  register,
  login,
  logout,
  verifyEmail,
  resetPassword,
  forgotPassword,
} from "../controllers/authController";

const router = Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").delete(authenticateUser, logout);
router.route("/verify-email").post(verifyEmail);
router.route("/reset-password").post(resetPassword);
router.route("/forgot-password").post(forgotPassword);

export default router;
