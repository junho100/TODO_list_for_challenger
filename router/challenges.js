import { Router } from "express";
import * as challengeController from "../controller/challenge.js";

const router = Router("/challs");

router.get("/", challengeController.getAllChallenge);

router.get("/:targetMonth", challengeController.getChallengeByMonth);

router.get("/:targetMonth/:targetWeek", challengeController.getChallengeByWeek);

router.post("/:targetMonth/:targetWeek", challengeController.createChallenge);

router.put("/:targetMonth/:targetWeek", challengeController.updateChallenge);

router.delete("/:targetMonth/:targetWeek", challengeController.removeChalleng);

export default router;
