import express from "express";
import "express-async-errors";
import cors from "cors";
import morgan from "morgan";
import config from "./config.js";
import goalRouter from "./router/goals/goals.js";
import challengeRouter from "./router/challenges/challenges.js";
import authRouter from "./router/auth/auth.js";
import { sequelize } from "./database/database.js";

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));

app.use("/goals", goalRouter);
app.use("/challs", challengeRouter);
app.use("/auth", authRouter);

app.use((req, res, next) => {
  res.status(404).send("NOT FOUND");
});

app.use((error, req, res, next) => {
  console.log(error);
  res.status(500).send("Something went wrong!");
});

sequelize.sync().then(() => {
  app.listen(config.server.port);
});
