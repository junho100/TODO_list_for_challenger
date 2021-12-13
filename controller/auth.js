import * as userRepository from "../database/users.js";
import bcrypt, { hash } from "bcrypt";
import config from "../config.js";

export async function signup(req, res, next) {
  const { username, password, name } = req.body;
  const saltRounds = parseInt(config.auth.saltRounds);
  const hashed = await bcrypt.hash(password, saltRounds);
  const result = await userRepository.create(username, hashed, name);
  console.log(result);
  if (result) {
    return res.status(201).send("created");
  }
  return res.send("signup error");
}

export async function login(req, res, next) {
  const { username, password } = req.body;
  const user = await userRepository.getByUsername(username);
  const result = await bcrypt.compare(password, user.password);
  if (result) {
    return res.status(201).send("login success");
  }
  return res.send("login error");
}

export function logout(req, res, next) {
  return;
}

export function me(req, res, next) {
  return;
}
