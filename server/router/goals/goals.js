import { Router } from "express";
import * as goalController from "../../controller/goal.js";
import { isAuth } from "../../middleware/auth.js";
import { contentValidator } from "../../middleware/validator.js";

const router = Router("/goals");

router.get("/", isAuth, goalController.getAllGoal);

router.get("/:targetMonth", isAuth, goalController.getGoal);

router.post(
  "/:targetMonth",
  isAuth,
  contentValidator,
  goalController.createGoal
);

router.put("/:targetMonth", isAuth, goalController.updateGoal);

router.delete("/:targetMonth", isAuth, goalController.deleteGoal);

export default router;
