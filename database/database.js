import mysql from "mysql2";
import config from "../config.js";
import SQ from "sequelize";

export const sequelize = new SQ.Sequelize(
  config.db.database,
  config.db.user,
  config.db.password,
  {
    dialect: "mysql",
    logging: false,
  }
);

const pool = mysql.createPool({
  host: config.db.host,
  user: config.db.user,
  password: config.db.password,
  database: config.db.database,
});

export default pool.promise();
