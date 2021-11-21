let goals = [
  {
    id: 0,
    username: "bob",
    content: "express 개인 프로젝트 하기!",
    updatedAt: new Date().toString(),
    targetMonth: "202111",
    isDone: false,
  },
];
let idx = 1;

export async function getGoalsByUsername(username) {
  return goals.filter((goal) => goal.username === username);
}
