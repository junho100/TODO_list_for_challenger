import * as userRepository from "../database/users.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import config from "../config.js";

export async function signup(req, res, next) {
  const { username, password, name } = req.body;
  const saltRounds = parseInt(config.auth.saltRounds);
  const secKey = config.auth.secKey;
  const hashed = await bcrypt.hash(password, saltRounds);
  const result = await userRepository.create(username, hashed, name);
  if (!result) {
    return res.send("signup error");
  }
  return jwt.sign(
    {
      username,
    },
    secKey,
    {
      expiresIn: 1000 * 10,
    },
    (err, token) => {
      if (!err) {
        return res.status(201).json({
          token,
          username,
        });
      }
      console.log(err);
      return res.send("jwt sign error");
    }
  );
}

export async function login(req, res, next) {
  const { username, password } = req.body;
  const secKey = config.auth.secKey;
  const user = await userRepository.getByUsername(username);
  const result = await bcrypt.compare(password, user.password);
  if (!result) {
    res.send("login error");
  }
  return jwt.sign(
    {
      username,
    },
    secKey,
    {
      expiresIn: 1000 * 10,
    },
    (err, token) => {
      if (!err) {
        return res.status(201).json({
          token,
          username,
        });
      }
      console.log(err);
      return res.send("jwt sign error");
    }
  );
}

export function logout(req, res, next) {
  return;
}

export function me(req, res, next) {
  return;
}
