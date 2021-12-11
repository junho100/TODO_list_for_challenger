import pool from "../db/database.js";

export async function getByUsername(username) {
  const result = await pool.execute(`SELECT * FROM goals WHERE username=?`, [
    username,
  ]);
  return result[0];
}

export async function getBytargetMonth(username, targetMonth) {
  const result = await pool.execute(
    `SELECT * FROM goals WHERE username=? AND targetMonth=?`,
    [username, targetMonth]
  );

  return result[0];
}

export async function create(content, targetMonth, username) {
  await pool.execute(
    `INSERT INTO goals (username, content, targetMonth, isDone) VALUES ( ?, ?, ?, ?)`,
    [username, content, targetMonth, false]
  );
}

export async function updateContent(content, targetMonth, username) {
  await pool.execute(
    `UPDATE goals
    SET content = ? 
    WHERE targetMonth=? AND username=?`,
    [content, targetMonth, username]
  );
}

export async function remove(username, targetMonth) {
  await pool.execute(`DELETE FROM goals WHERE username=? AND targetMonth=?`, [
    username,
    targetMonth,
  ]);
}

//frontend 단에서 fetch로 구현을 할까?
export async function toggleDone(username, targetMonth) {
  await pool.execute(
    `UPDATE goals
    SET isDone = CASE 
    WHEN isDone=0 AND username=? AND targetMonth=? THEN 1 
    WHEN isDone=1 AND username=? AND targetMonth=? THEN 0 
    END`,
    [username, targetMonth, username, targetMonth]
  );
}
