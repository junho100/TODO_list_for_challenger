import { Router } from "express";
import * as goalController from "../controller/goal.js";

const router = Router("/goals");

router.get("/", goalController.getGoal);

router.post("/", goalController.createGoal);

router.put("/", goalController.updateGoal);

router.delete("/", goalController.deleteGoal);

export default router;
