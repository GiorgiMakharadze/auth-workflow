import { Router } from "express";
import { authenticateUser } from "../middleware/authentication";
import {
  register,
  login,
  logout,
  verifyEmail,
} from "../controllers/authController";

const router = Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").delete(authenticateUser, logout);
router.route("/verify-email").post(verifyEmail);

export default router;
