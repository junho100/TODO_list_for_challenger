import * as goalRepository from "../database/goals.js";

function checkAndGetUser(req, res) {
  const username = req.username;
  if (!username) {
    return res.send(404).send("User not found");
  }
  return username;
}

export async function getAllGoal(req, res, next) {
  const username = checkAndGetUser(req, res);
  const goals = await goalRepository.getByUsername(username);
  if (goals) {
    return res.status(200).send(goals);
  }
  return res.sendStatus(404);
}

export async function getGoal(req, res, next) {
  const username = checkAndGetUser(req, res);
  const targetMonth = req.params.targetMonth;
  const goal = await goalRepository.getBytargetMonth(username, targetMonth);
  if (goal) {
    return res.status(200).json(goal);
  }
  return res.sendStatus(404);
}

export async function createGoal(req, res, next) {
  const username = checkAndGetUser(req, res);
  const targetMonth = req.params.targetMonth;
  const content = req.body.content;

  const goal = await goalRepository.getBytargetMonth(username, targetMonth);
  if (goal) {
    return res.status(400).send("goal already exists");
  }

  await goalRepository.create(content, targetMonth, username);
  return res.sendStatus(201);
}

export async function updateGoal(req, res, next) {
  const username = checkAndGetUser(req, res);
  const targetMonth = req.params.targetMonth;

  const goal = await goalRepository.getBytargetMonth(username, targetMonth);
  if (!goal) {
    return res.sendStatus(404);
  }

  const content = req.body.content;
  if (content) {
    await goalRepository.updateContent(content, targetMonth, username);
    return res.sendStatus(200);
  }

  await goalRepository.toggleDone(username, targetMonth);
  return res.sendStatus(200);
}

export async function deleteGoal(req, res, next) {
  const username = checkAndGetUser(req, res);
  const targetMonth = req.params.targetMonth;
  const goal = await goalRepository.getBytargetMonth(username, targetMonth);
  if (!goal) {
    return res.sendStatus(404);
  }
  await goalRepository.remove(username, targetMonth);
  return res.sendStatus(204);
}
