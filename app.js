import express from "express";
import "express-async-errors";
import cors from "cors";
import morgan from "morgan";
import mysql from "mysql";
import config from "./config.js";
import goalRouter from "./router/goals.js";
import challengeRouter from "./router/challenges.js";

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));

app.use("/goals", goalRouter);
app.use("/challs", challengeRouter);

app.use((req, res, next) => {
  res.status(404).send("NOT FOUND");
});

app.use((error, req, res, next) => {
  console.log(error);
  res.status(500).send("Something went wrong!");
});

const pool = mysql.createPool({
  host: config.db.host,
  user: config.db.user,
  password: config.db.password,
  database: config.db.database,
});

app.listen(config.server.port);
