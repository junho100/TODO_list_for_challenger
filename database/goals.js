// {
//   id : string,
//   username : string,
//   content : string, // 해당 월 목표 내용
//   updateAt : datetime,
//   targetMonth : string,
//   isDone : boolean // 완료 여부
// }

let goals = [
  {
    id: "0",
    username: "bob",
    content: "express 개인 프로젝트 하기!",
    updatedAt: new Date().toString(),
    targetMonth: "202111",
    isDone: false,
  },
  {
    id: "1",
    username: "bob",
    content: "koa 개인 프로젝트 하기!",
    updatedAt: new Date().toString(),
    targetMonth: "202112",
    isDone: false,
  },
];
let idx = 1;

export async function getByUsername(username) {
  return goals.filter((goal) => goal.username === username);
}

export async function getBytargetMonth(username, targetMonth) {
  return goals.find(
    (goal) => goal.targetMonth === targetMonth && goal.username === username
  );
}

export async function create(content, targetMonth, username) {
  const goal = {
    id: String(idx),
    username,
    content,
    updatedAt: new Date().toString(),
    targetMonth,
    isDone: false,
  };
  idx++;
  goals = [goal, ...goals];
  return goal;
}

export async function updateContent(content, targetMonth, username) {
  const goal = await getBytargetMonth(username, targetMonth);
  goal.content = content;
  return goal;
}

export async function remove(username, targetMonth) {
  goals = goals.filter(
    (goal) => goal.username !== username || goal.targetMonth !== targetMonth
  );
}

export async function toggleDone(username, targetMonth) {
  const goal = await getBytargetMonth(username, targetMonth);
  if (goal.isDone === true) {
    goal.isDone = false;
  } else {
    goal.isDone = true;
  }
  return goal;
}
