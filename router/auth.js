import { Router } from "express";
import * as authController from "../controller/auth.js";
import { isAuth } from "../middleware/auth.js";

const router = Router("/auth");

router.post("/signup", authController.signup);
router.post("/login", authController.login, isAuth);
router.get("/me", isAuth, authController.me);

export default router;
