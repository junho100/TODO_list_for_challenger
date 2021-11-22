import * as goalRepository from "../database/goals.js";

function checkAndGetUser(req) {
  const username = req.query.username;
  if (!username) {
    return res.send(404).send("User not found");
  }
  return username;
}

export async function getGoal(req, res, next) {
  const username = checkAndGetUser(req);
  const targetMonth = req.body.targetMonth;
  if (targetMonth) {
    const goal = await goalRepository.getBytargetMonth(username, targetMonth);
    return res.status(200).json(goal);
  }
  const goals = await goalRepository.getByUsername(username);
  return res.status(200).send(goals);
}

export async function createGoal(req, res, next) {
  const username = checkAndGetUser(req);
  const { content, targetMonth } = req.body;
  const goal = await goalRepository.create(content, targetMonth, username);
  return res.status(201).json(goal);
}

export async function updateGoal(req, res, next) {
  const username = checkAndGetUser(req);
  const { content, targetMonth } = req.body;
  if (content) {
    const goal = await goalRepository.updateContent(
      content,
      targetMonth,
      username
    );
    return res.status(200).json(goal);
  }
  const goal = await goalRepository.toggleDone(username, targetMonth);
  return res.status(200).send(goal);
}

export async function deleteGoal(req, res, next) {
  const username = checkAndGetUser(req);
  const targetMonth = req.body.targetMonth;
  await goalRepository.remove(username, targetMonth);
  return res.sendStatus(204);
}
