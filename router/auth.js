import { Router } from "express";
import * as authController from "../controller/auth.js";
import { isAuth } from "../middleware/auth.js";
import { authValidator } from "../middleware/validator.js";

const router = Router("/auth");

router.post("/signup", authValidator, authController.signup);
router.post("/login", authController.login);
router.get("/me", isAuth, authController.me);

export default router;
