import { Router } from "express";
import * as goalController from "../controller/goal.js";

const router = Router("/goals");

router.get("/", goalController.getAllGoal);

router.get("/:targetMonth", goalController.getGoal);

router.post("/:targetMonth", goalController.createGoal);

router.put("/:targetMonth", goalController.updateGoal);

router.delete("/:targetMonth", goalController.deleteGoal);

export default router;
