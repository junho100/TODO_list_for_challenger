/*{
    id : string,
    username : string,
    content : string, // 해당 주 목표 내용
    updateAt : datetime,
    targetMonth : string,
    targetWeek : string,
    isDone : boolean // 완료 여부
}*/

let challenges = [
  {
    id: "0",
    username: "bob",
    content: "express 공식문서 1회독",
    updatedAt: new Date().toString(),
    targetMonth: "202111",
    targetWeek: 1,
    isDone: false,
  },
];

export async function getByUsername(username) {
  return challenges.filter((challenge) => challenge.username === username);
}
