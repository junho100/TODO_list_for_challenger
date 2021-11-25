import { Router } from "express";
import * as challengeController from "../controller/challenge.js";

const router = Router("/challs");

router.get("/", challengeController.getChallenge);

router.get("/:week", challengeController.getChallengeByWeek);

router.post("/", challengeController.createChallenge);

router.put("/:week", challengeController.updateChallenge);

router.delete("/:week", challengeController.removeChalleng);

export default router;
