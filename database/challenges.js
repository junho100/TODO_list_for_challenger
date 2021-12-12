import pool from "./database.js";

export async function getByUsername(username) {
  const result = await pool.execute(
    `SELECT * FROM challenges WHERE username=?`,
    [username]
  );
  return result[0];
  // return challenges.filter((challenge) => challenge.username === username);
}

export async function getByTargetMonth(username, targetMonth) {
  const result = await pool.execute(
    `SELECT * FROM challenges WHERE username=? AND targetMonth=?`,
    [username, targetMonth]
  );
  return result[0];
}

export async function getByTargetWeek(username, targetMonth, targetWeek) {
  const result = await pool.execute(
    `SELECT * FROM challenges WHERE username=? AND targetMonth=? AND targetWeek=?`,
    [username, targetMonth, targetWeek]
  );
  return result[0];
}

export async function create(username, content, targetMonth, targetWeek) {
  await pool.execute(
    `INSERT INTO challenges (username, content, targetMonth, targetWeek, isDone) VALUES (?, ?, ?, ?, ?)`,
    [username, content, targetMonth, targetWeek, false]
  );
}

export async function update(username, targetMonth, targetWeek, content) {
  await pool.execute(
    `UPDATE challenges
    SET content = ? 
    WHERE targetMonth=? AND username=? AND targetWeek=?`,
    [content, targetMonth, username, targetWeek]
  );
}

export async function remove(username, targetMonth, targetWeek) {
  await pool.execute(
    `DELETE FROM challenges WHERE username=? AND targetMonth=? AND targetWeek=?`,
    [username, targetMonth, targetWeek]
  );
}

export async function toggleDone(username, targetMonth, targetWeek) {
  await pool.execute(
    `UPDATE challenges
    SET isDone = CASE 
    WHEN isDone=0 AND username=? AND targetMonth=? AND targetWeek=? THEN 1 
    WHEN isDone=1 AND username=? AND targetMonth=? AND targetWeek=? THEN 0 
    END`,
    [username, targetMonth, targetWeek, username, targetMonth, targetWeek]
  );
}
