import styles from "../style/ToDoHeader.module.css";
import { useState, useEffect } from "react";

const ToDoHeader = ({ goals, presentIdx, setPresentIdx }) => {
  if (goals.length === 0) {
    return (
      <div className={styles.notodo}>
        <h1>No Goals! Create Goal.</h1>
        <button>create</button>
      </div>
    );
  }

  return (
    <div className={styles.todo}>
      <h2>{goals[presentIdx].targetMonth}</h2>
      <input
        onChange={(e) => {
          const date = e.target.valueAsDate;
          const target =
            String(date.getFullYear()) +
            String(date.getMonth() + 1).padStart(2, "0");
          console.log(target);
        }}
        type="month"
      ></input>
      <select
        onChange={(e) => {
          setPresentIdx(e.target.options.selectedIndex);
        }}
      >
        {goals.map((goal) => {
          return <option key={goal.id}>{goal.targetMonth}</option>;
        })}
      </select>
      <button>+</button>
    </div>
  );
};

export default ToDoHeader;
