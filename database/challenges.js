import pool from "./database.js";
import { sequelize } from "./database.js";
import SQ from "sequelize";

const Challenge = sequelize.define("challenge", {
  id: {
    type: SQ.DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  username: {
    type: SQ.DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: SQ.DataTypes.TEXT,
    allowNull: false,
  },
  targetMonth: {
    type: SQ.DataTypes.STRING,
    allowNull: false,
  },
  targetWeek: {
    type: SQ.DataTypes.STRING,
    allowNull: false,
  },
  isDone: {
    type: SQ.DataTypes.BOOLEAN,
    allowNull: false,
  },
});

export async function getByUsername(username) {
  return await Challenge.findAll({
    where: { username },
  });
}

export async function getByTargetMonth(username, targetMonth) {
  return await Challenge.findAll({
    where: {
      username,
      targetMonth,
    },
  });
}

export async function getByTargetWeek(username, targetMonth, targetWeek) {
  return await Challenge.findOne({
    where: {
      username,
      targetMonth,
      targetWeek,
    },
  });
}

export async function create(username, content, targetMonth, targetWeek) {
  return await Challenge.create({
    username,
    content,
    targetMonth,
    targetWeek,
    isDone: false,
  });
}

export async function update(username, targetMonth, targetWeek, content) {
  return await Challenge.update(
    {
      content,
    },
    {
      where: {
        targetMonth,
        targetWeek,
        username,
      },
    }
  );
}

export async function remove(username, targetMonth, targetWeek) {
  return await Challenge.destroy({
    where: {
      username,
      targetMonth,
      targetWeek,
    },
  });
}

export async function toggleDone(username, targetMonth, targetWeek) {
  const data = await Challenge.findOne({
    where: {
      username,
      targetMonth,
      targetWeek,
    },
  });

  if (data.isDone === true) {
    return await Challenge.update(
      { isDone: false },
      {
        where: {
          username,
          targetMonth,
        },
      }
    );
  } else {
    return await Challenge.update(
      { isDone: true },
      {
        where: {
          username,
          targetMonth,
        },
      }
    );
  }
}
