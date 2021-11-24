import { Router } from "express";
import * as challengeRepositoy from "../database/challenges.js";

function checkAndGetUser(req) {
  const username = req.query.username;
  if (!username) {
    return res.send(404).send("User not found");
  }
  return username;
}

const router = Router("/challs");

router.get("/", async (req, res, next) => {
  const username = checkAndGetUser(req);
  const challenges = await challengeRepositoy.getByUsername(username);
  if (!challenges) {
    return res.status(404).send("Not Found");
  }
  return res.status(200).send(challenges);
});

export default router;
