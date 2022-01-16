import styles from "../style/ToDoHeader.module.css";
import { useState, useEffect } from "react";

const ToDoHeader = ({ goals }) => {
  const [presentIdx, setPresentIdx] = useState(0);
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
      <select
        onChange={(e) => {
          setPresentIdx(e.target.options.selectedIndex);
        }}
      >
        {goals.map((goal) => {
          return <option key={goal.id}>{goal.targetMonth}</option>;
        })}
      </select>
    </div>
  );
};

export default ToDoHeader;
