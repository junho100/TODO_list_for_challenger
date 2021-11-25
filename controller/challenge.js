import * as challengeRepositoy from "../database/challenges.js";

function checkAndGetUser(req) {
  const username = req.query.username;
  if (!username) {
    return res.send(404).send("User not found");
  }
  return username;
}

export async function getChallenge(req, res, next) {
  const username = checkAndGetUser(req);
  const targetMonth = req.body.targetMonth;
  let challenges = undefined;
  if (targetMonth) {
    challenges = await challengeRepositoy.getByTargetMonth(
      username,
      targetMonth
    );
  } else {
    challenges = await challengeRepositoy.getByUsername(username);
  }
  if (challenges.length === 0) {
    return res.status(404).send("Not Found");
  }
  return res.status(200).send(challenges);
}

export async function getChallengeByWeek(req, res, next) {
  const username = checkAndGetUser(req);
  const targetMonth = req.body.targetMonth;
  const targetWeek = req.params.week;
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
  const username = checkAndGetUser(req);
  const { content, targetMonth, targetWeek } = req.body;
  const challenge = await challengeRepositoy.create(
    username,
    content,
    targetMonth,
    targetWeek
  );
  return res.status(201).json(challenge);
}

export async function updateChallenge(req, res, next) {
  const username = checkAndGetUser(req);
  const { targetMonth, content } = req.body;
  const targetWeek = req.params.week;
  if (!content) {
    const challenge = await challengeRepositoy.updateDone(
      username,
      targetMonth,
      targetWeek
    );
    return res.status(200).json(challenge);
  }
  const challenge = await challengeRepositoy.update(
    username,
    targetMonth,
    targetWeek,
    content
  );
  if (challenge) {
    return res.status(200).json(challenge);
  }
  return res.status(404).send("Not Found");
}

export async function removeChalleng(req, res, next) {
  const username = checkAndGetUser(req);
  const targetMonth = req.body.targetMonth;
  const targetWeek = req.params.week;
  await challengeRepositoy.remove(username, targetMonth, targetWeek);
  return res.sendStatus(204);
}
