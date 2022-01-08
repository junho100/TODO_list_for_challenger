import pool from "./database.js";
import SQ from "sequelize";
import { sequelize } from "./database.js";

const User = sequelize.define("user", {
  username: {
    type: SQ.DataTypes.STRING,
    allowNull: false,
    primaryKey: true,
  },
  password: {
    type: SQ.DataTypes.STRING,
    allowNull: false,
  },
  name: {
    type: SQ.DataTypes.STRING,
    allowNull: false,
  },
});

export async function create(username, password, name) {
  return User.create({
    username,
    password,
    name,
  });
}

export async function getByUsername(username) {
  return User.findOne({
    where: {
      username,
    },
  });
}
