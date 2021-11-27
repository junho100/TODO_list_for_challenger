/*{
    id : string,
    username : string,
    content : string, // 해당 주 목표 내용
    updateAt : datetime,
    targetMonth : string,
    targetWeek : string,
    isDone : boolean // 완료 여부
}*/
let idx = 4;

let challenges = [
  {
    id: "0",
    username: "bob",
    content: "express 공식문서 1회독",
    updatedAt: new Date().toString(),
    targetMonth: "202111",
    targetWeek: "1",
    isDone: false,
  },
  {
    id: "1",
    username: "bob",
    content: "express 공식문서 2회독",
    updatedAt: new Date().toString(),
    targetMonth: "202111",
    targetWeek: "2",
    isDone: false,
  },
  {
    id: "2",
    username: "bob",
    content: "express 공식문서 3회독",
    updatedAt: new Date().toString(),
    targetMonth: "202112",
    targetWeek: "1",
    isDone: false,
  },
  {
    id: "3",
    username: "bob",
    content: "express 공식문서 4회독",
    updatedAt: new Date().toString(),
    targetMonth: "202112",
    targetWeek: "2",
    isDone: false,
  },
];

export async function getByUsername(username) {
  return challenges.filter((challenge) => challenge.username === username);
}

export async function getByTargetMonth(username, targetMonth) {
  return challenges.filter(
    (challenge) =>
      challenge.username === username && challenge.targetMonth === targetMonth
  );
}

export async function getByTargetWeek(username, targetMonth, targetWeek) {
  return challenges.find(
    (challenge) =>
      challenge.username === username &&
      challenge.targetMonth === targetMonth &&
      challenge.targetWeek === targetWeek
  );
}

export async function create(username, content, targetMonth, targetWeek) {
  const challenge = {
    id: String(idx),
    username,
    content,
    updatedAt: new Date().toString(),
    targetMonth,
    targetWeek,
    isDone: false,
  };
  idx++;
  challenges.push(challenge);
  return challenge;
}

export async function update(username, targetMonth, targetWeek, content) {
  const challenge = await getByTargetWeek(username, targetMonth, targetWeek);
  if (challenge) {
    challenge.content = content;
    return challenge;
  }
  return undefined;
}

export async function remove(username, targetMonth, targetWeek) {
  const target = await getByTargetWeek(username, targetMonth, targetWeek);
  const newChallenge = challenges.filter((challenge) => challenge !== target);
  challenges = newChallenge;
}

export async function updateDone(username, targetMonth, targetWeek) {
  const challenge = await getByTargetWeek(username, targetMonth, targetWeek);
  if (challenge) {
    if (challenge.isDone) {
      challenge.isDone = false;
    } else {
      challenge.isDone = true;
    }
    return challenge;
  }
  return undefined;
}
