import { param, body, validationResult } from "express-validator";

export const authValidator = [
  body("username")
    .trim()
    .notEmpty()
    .withMessage("necessary")
    .isLength({ min: 1, max: 10 })
    .withMessage("1 <= username length <= 10"),
  body("password").trim().notEmpty().withMessage("necessary"),
  body("name").trim().notEmpty().withMessage("necessary"),
  (req, res, next) => {
    const err = validationResult(req);
    if (!err.isEmpty()) {
      return res.status(400).json({ message: err.array()[0].msg });
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
