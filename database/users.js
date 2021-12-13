import pool from "./database.js";

export async function create(username, password, name) {
  return pool
    .execute(`INSERT INTO users (username, password, name) VALUES (?, ?, ?)`, [
      username,
      password,
      name,
    ])
    .then(() => {
      return true;
    })
    .catch((e) => {
      console.log(e);
      return false;
    });
}

export async function getByUsername(username) {
  return pool
    .execute(`SELECT * FROM users WHERE username=?`, [username])
    .then((user) => {
      return user[0][0];
    });
}
