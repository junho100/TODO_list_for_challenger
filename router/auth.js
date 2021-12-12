import { Router } from "express";
import * as authController from "../controller/auth.js";

const router = Router("/auth");

router.post("/login", authController.login);
router.post("/logout", authController.logout);
router.get("/me", authController.me);

export default router;
