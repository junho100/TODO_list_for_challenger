import axios from "axios";
import { useState, useEffect } from "react";
import Goal from "./Goal.js";
import Challenges from "./Challenges.js";
import ToDoHeader from "./ToDoHeader.js";
import styles from "../style/ToDo.module.css";

const ToDo = ({ user }) => {
  const [goals, setGoals] = useState([]);
  const [presentIdx, setPresentIdx] = useState(undefined);
  const [goalMode, setGoalMode] = useState(1);
  // 0:create, 1:read, 2:update
  const getGoals = async () => {
    const token = localStorage.getItem("token");
    axios
      .get("http://localhost:8080/goals", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((data) => {
        setGoals(() => data.data);
      });
  };

  useEffect(() => {
    if (user) {
      getGoals();
    }
  }, [goalMode, presentIdx]);
  if (presentIdx === undefined && goalMode === 1) {
    return (
      <div className={`${styles.todo} ${styles.start}`}>
        <ToDoHeader
          goals={goals}
          presentIdx={presentIdx}
          setPresentIdx={setPresentIdx}
          setGoalMode={setGoalMode}
          goalMode={goalMode}
        ></ToDoHeader>
        <h1>Make your Goal and do it!</h1>
      </div>
    );
  }
  return (
    <div className={styles.todo}>
      <ToDoHeader
        goals={goals}
        presentIdx={presentIdx}
        setPresentIdx={setPresentIdx}
        setGoalMode={setGoalMode}
        goalMode={goalMode}
      ></ToDoHeader>
      <main>
        <Goal
          goals={goals}
          presentIdx={presentIdx}
          goalMode={goalMode}
          setGoalMode={setGoalMode}
          setPresentIdx={setPresentIdx}
        ></Goal>
        <Challenges
          goals={goals}
          presentIdx={presentIdx}
          goalMode={goalMode}
        ></Challenges>
      </main>
    </div>
  );
};

export default ToDo;
