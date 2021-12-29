import { Router } from "express";
import * as authController from "../../controller/auth.js";
import { isAuth } from "../../middleware/auth.js";
import { signupValidator, loginValidator } from "../../middleware/validator.js";

const router = Router("/auth");

router.post("/signup", signupValidator, authController.signup);
router.post("/login", loginValidator, authController.login);
router.get("/me", isAuth, authController.me);

export default router;
