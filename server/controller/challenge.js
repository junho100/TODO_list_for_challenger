import * as challengeRepositoy from "../database/challenges.js";

function checkAndGetUser(req, res) {
  const username = req.username;
  if (!username) {
    return res.send(404).send("User not found");
  }
  return username;
}

export async function getAllChallenge(req, res, next) {
  const username = checkAndGetUser(req, res);
  const challenges = await challengeRepositoy.getByUsername(username);
  if (challenges.length === 0) {
    return res.status(404).send(`there is not data for ${username}`);
  }
  return res.status(200).send(challenges);
}

export async function getChallengeByMonth(req, res, next) {
  const username = checkAndGetUser(req, res);
  const targetMonth = req.params.targetMonth;
  if (!targetMonth) {
    return res.status(404).send("Not Found");
  }
  const challenges = await challengeRepositoy.getByTargetMonth(
    username,
    targetMonth
  );
  if (challenges.length === 0) {
    return res
      .status(404)
      .send(`there is not data for ${username} in ${targetMonth}`);
  }
  return res.status(200).send(challenges);
}

export async function getChallengeByWeek(req, res, next) {
  const username = checkAndGetUser(req, res);
  const { targetMonth, targetWeek } = req.params;
  if (!(targetMonth && targetWeek)) {
    return res.status(404).send("Not Found");
  }
  const challenge = await challengeRepositoy.getByTargetWeek(
    username,
    targetMonth,
    targetWeek
  );
  if (!challenge) {
    return res.status(404).send("Not Found");
  }
  return res.status(200).json(challenge);
}

export async function createChallenge(req, res, next) {
  const username = checkAndGetUser(req, res);
  const { targetMonth, targetWeek } = req.params;

  const challenge = await challengeRepositoy.getByTargetWeek(
    username,
    targetMonth,
    targetWeek
  );
  if (challenge) {
    return res.status(409).send("challenge already exists");
  }

  const content = req.body.content;
  await challengeRepositoy.create(username, content, targetMonth, targetWeek);
  return res.sendStatus(201);
}

export async function updateChallenge(req, res, next) {
  const username = checkAndGetUser(req, res);
  const { targetMonth, targetWeek } = req.params;
  const challenge = await challengeRepositoy.getByTargetWeek(
    username,
    targetMonth,
    targetWeek
  );
  if (!challenge) {
    return res.sendStatus(404);
  }
  const content = req.body.content;
  if (!content) {
    await challengeRepositoy.toggleDone(username, targetMonth, targetWeek);
    return res.sendStatus(200);
  }
  await challengeRepositoy.update(username, targetMonth, targetWeek, content);
  return res.sendStatus(200);
}

export async function removeChallenge(req, res, next) {
  const username = checkAndGetUser(req, res);
  const { targetMonth, targetWeek } = req.params;
  const content = req.body.content;
  await challengeRepositoy.remove(username, targetMonth, targetWeek);
  return res.sendStatus(204);
}
