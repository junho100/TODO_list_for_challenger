import * as userRepository from "../database/users.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import config from "../config.js";

export async function signup(req, res, next) {
  const { username, password, name } = req.body;
  const user = await userRepository.getByUsername(username);
  if (user) {
    return res.status(400).send("user already exists");
  }
  const saltRounds = parseInt(config.auth.saltRounds);
  const hashed = await bcrypt.hash(password, saltRounds);
  await userRepository.create(username, hashed, name);
  return jwt.sign(
    {
      username,
    },
    config.auth.secKey,
    {
      expiresIn: config.auth.expDay,
    },
    (err, token) => {
      if (!err) {
        return res.status(201).json({
          token,
          username,
        });
      }
      console.log(err);
      return res.status(401).send("jwt sign error");
    }
  );
}

export async function login(req, res, next) {
  const { username, password } = req.body;
  const user = await userRepository.getByUsername(username);
  if (!user) {
    return res.status(400).send("login error");
  }
  const result = await bcrypt.compare(password, user.password);
  if (!result) {
    return res.status(401).send("login error");
  }
  return jwt.sign(
    {
      username,
    },
    config.auth.secKey,
    {
      expiresIn: config.auth.expDay,
    },
    (err, token) => {
      if (!err) {
        return res.status(201).json({
          token,
          username,
        });
      }
      console.log(err);
      return res.status(401).send("jwt sign error");
    }
  );
}

export async function me(req, res, next) {
  const username = req.username;

  const user = await userRepository.getByUsername(username);

  if (!user) {
    return res.sendStatus(404);
  }
  return res.status(200).send(username);
}
