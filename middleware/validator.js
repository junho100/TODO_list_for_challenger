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

export const goalValidator = [
  body("content").trim().notEmpty().withMessage("necessary"),
  param("targetMonth")
    .trim()
    .notEmpty()
    .withMessage("necessary")
    .isLength({ max: 6, min: 6 })
    .withMessage("length should be 6"),
  (req, res, next) => {
    const err = validationResult(req);
    if (!err.isEmpty()) {
      return res.status(400).json({ message: err.array()[0].msg });
    }
    next();
  },
];

export const challengeValidator = [
  body("content").trim().notEmpty().withMessage("necessary"),
  param("targetMonth")
    .trim()
    .notEmpty()
    .withMessage("necessary")
    .isLength({ max: 6, min: 6 })
    .withMessage("length should be 6"),
  param("targetWeek")
    .trim()
    .notEmpty()
    .withMessage("necessary")
    .isLength({ min: 1, max: 1 })
    .withMessage("length should be 1")
    .isInt({ max: 5, min: 1 })
    .withMessage("1 <= target week <= 5"),
  (req, res, next) => {
    const err = validationResult(req);
    if (!err.isEmpty()) {
      return res.status(400).json({ message: err.array()[0].msg });
    }
    next();
  },
];
