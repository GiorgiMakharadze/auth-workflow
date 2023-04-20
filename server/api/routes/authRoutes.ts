import { Router } from "express";
import {
  register,
  login,
  logout,
  verifyEmail,
} from "../controllers/authController";

const router = Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").get(logout);
router.route("/verify-email").post(verifyEmail);

export default router;
