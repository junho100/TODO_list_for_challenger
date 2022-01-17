import axios from "axios";
import { useState, useEffect } from "react";
import Goal from "./Goal.js";
import Challenge from "./Challenge.js";
import ToDoHeader from "./ToDoHeader.js";
import styles from "../style/ToDo.module.css";

const ToDo = ({ user }) => {
  const [goals, setGoals] = useState([]);
  const [presentIdx, setPresentIdx] = useState(0);

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
  }, []);
  return (
    <div className={styles.todo}>
      <ToDoHeader
        goals={goals}
        presentIdx={presentIdx}
        setPresentIdx={setPresentIdx}
      ></ToDoHeader>
      <main>
        <Goal goals={goals} presentIdx={presentIdx}></Goal>
        <Challenge goals={goals} presentIdx={presentIdx}></Challenge>
      </main>
    </div>
  );
};

export default ToDo;
