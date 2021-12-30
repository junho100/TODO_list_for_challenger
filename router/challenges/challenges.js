import { Router } from "express";
import * as challengeController from "../../controller/challenge.js";
import { isAuth } from "../../middleware/auth.js";
import { challengeValidator } from "../../middleware/validator.js";

const router = Router("/challs");

router.get("/", isAuth, challengeController.getAllChallenge);

router.get("/:targetMonth", isAuth, challengeController.getChallengeByMonth);

router.get(
  "/:targetMonth/:targetWeek",
  isAuth,
  challengeController.getChallengeByWeek
);

router.post(
  "/:targetMonth/:targetWeek",
  isAuth,
  challengeValidator,
  challengeController.createChallenge
);

router.put(
  "/:targetMonth/:targetWeek",
  isAuth,
  challengeController.updateChallenge
);

router.delete(
  "/:targetMonth/:targetWeek",
  isAuth,
  challengeController.removeChallenge
);

export default router;
