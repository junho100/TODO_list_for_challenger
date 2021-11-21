import { Router } from "express";
import * as goalRepository from "../database/goals.js";

function checkAndGetUser(req, username) {
  const username = req.query.username;
  if (!username) {
    return res.send(404).send("User not found");
  }
  return username;
}

const router = Router("/goals");

router.get("/", (req, res, next) => {
  const username = checkAndGetUser(username);
  const goals = await goalRepository.getGoalsByUsername(username);
  return res.status(200).send(goals);
});

router.get("/", (req, res, next) => {
  const username = checkAndGetUser(username);
});
