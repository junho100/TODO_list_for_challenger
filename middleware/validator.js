import { param, body, validationResult } from "express-validator";

const usernameValidator = [
  body("username")
    .trim()
    .notEmpty()
    .withMessage("username is necessary")
    .isLength({ min: 3, max: 15 })
    .withMessage("too short or too long username"),
];

const passwordValidator = [
  body("password").trim().notEmpty().withMessage("password is necessary"),
];

export const signupValidator = [
  ...usernameValidator,
  ...passwordValidator,
  body("name")
    .trim()
    .notEmpty()
    .withMessage("name is necessary")
    .isLength({ min: 3, max: 15 })
    .withMessage("too short or too long name"),
  (req, res, next) => {
    const err = validationResult(req);
    if (!err.isEmpty()) {
      const errmsgs = err.array().map((e) => {
        return e.msg;
      });
      return res.status(400).send(errmsgs);
    }
    next();
  },
];

export const loginValidator = [
  ...usernameValidator,
  ...passwordValidator,
  (req, res, next) => {
    const err = validationResult(req);
    if (!err.isEmpty()) {
      const errmsgs = err.array().map((e) => {
        return e.msg;
      });
      return res.status(400).send(errmsgs);
    }
    next();
  },
];

export const contentValidator = [
  body("content").trim().notEmpty().withMessage("content is necessary"),
  (req, res, next) => {
    const err = validationResult(req);
    if (!err.isEmpty()) {
      const errmsgs = err.array().map((e) => {
        return e.msg;
      });
      return res.status(400).send(errmsgs);
    }
    next();
  },
];
