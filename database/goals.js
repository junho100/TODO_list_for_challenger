import pool from "./database.js";
import { sequelize } from "./database.js";
import SQ from "sequelize";

const Goal = sequelize.define("goal", {
  id: {
    type: SQ.DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
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
  isDone: {
    type: SQ.DataTypes.BOOLEAN,
    allowNull: false,
  },
});

export async function getByUsername(username) {
  return await Goal.findAll({
    where: {
      username,
    },
  });
}

export async function getBytargetMonth(username, targetMonth) {
  return await Goal.findOne({
    where: {
      username,
      targetMonth,
    },
  });
}

export async function create(content, targetMonth, username) {
  return await Goal.create({
    username,
    content,
    targetMonth,
    isDone: false,
  });
}

export async function updateContent(content, targetMonth, username) {
  return await Goal.update(
    {
      content,
    },
    {
      where: {
        targetMonth,
        username,
      },
    }
  );
}

export async function remove(username, targetMonth) {
  return await Goal.destroy({
    where: {
      username,
      targetMonth,
    },
  });
}

export async function toggleDone(username, targetMonth) {
  const data = await Goal.findOne({
    where: {
      username,
      targetMonth,
    },
  });

  if (data.isDone === true) {
    return await Goal.update(
      { isDone: false },
      {
        where: {
          username,
          targetMonth,
        },
      }
    );
  } else {
    return await Goal.update(
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
