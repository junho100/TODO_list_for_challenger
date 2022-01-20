import axios from "axios";
import { useState, useEffect } from "react";
import Goal from "./Goal.js";
import Challenges from "./Challenges.js";
import ToDoHeader from "./ToDoHeader.js";
import styles from "../style/ToDo.module.css";

const ToDo = ({ user }) => {
  const [goals, setGoals] = useState([]);
  const [presentIdx, setPresentIdx] = useState(0);
  const [createGoalMode, setCreateGoalMode] = useState(false);

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
  }, [createGoalMode]);
  return (
    <div className={styles.todo}>
      <ToDoHeader
        goals={goals}
        presentIdx={presentIdx}
        setPresentIdx={setPresentIdx}
        setCreateGoalMode={setCreateGoalMode}
      ></ToDoHeader>
      <main>
        <Goal
          goals={goals}
          presentIdx={presentIdx}
          createGoalMode={createGoalMode}
          setCreateGoalMode={setCreateGoalMode}
        ></Goal>
        <Challenges
          goals={goals}
          presentIdx={presentIdx}
          createGoalMode={createGoalMode}
        ></Challenges>
      </main>
    </div>
  );
};

export default ToDo;
