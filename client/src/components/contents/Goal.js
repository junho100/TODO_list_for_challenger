import axios from "axios";
import { useState, useEffect } from "react";
import styles from "../style/Goal.module.css";

const Goal = ({ goals, presentIdx, createGoalMode, setCreateGoalMode }) => {
  const [isDone, setIsDone] = useState(false);
  const [creatingMonth, setCreatingMonth] = useState("");
  const [creatingContent, setCreatingContent] = useState("");
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (goals.length !== 0) {
      setIsDone(goals[presentIdx].isDone);
    }
  }, []);
  if (createGoalMode) {
    return (
      <div className={styles.goal}>
        <h3>Create Goal</h3>
        <div>
          <form className={styles.create_form}>
            <input
              onChange={(e) => {
                const year = String(e.target.valueAsDate.getFullYear());
                const month = String(e.target.valueAsDate.getMonth()).padStart(
                  2,
                  "0"
                );
                setCreatingMonth(year + month);
              }}
              type="month"
            ></input>
            <textarea
              onChange={(e) => {
                setCreatingContent(e.target.value);
              }}
            ></textarea>
            <button
              onClick={(e) => {
                e.preventDefault();
                axios
                  .post(
                    `http://localhost:8080/goals/${creatingMonth}`,
                    {
                      content: creatingContent,
                    },
                    {
                      headers: {
                        Authorization: `Bearer ${token}`,
                      },
                    }
                  )
                  .then(() => {
                    setCreatingMonth("");
                    setCreatingContent("");
                    setCreateGoalMode(false);
                  });
              }}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
  if (goals.length !== 0) {
    return (
      <div className={styles.goal}>
        <h3>Goal of this month</h3>
        <div>
          <h3>{goals[presentIdx].content}</h3>
          <ul>
            <li>{goals[presentIdx].updatedAt}</li>
          </ul>
          <input
            onChange={(e) => {
              setIsDone((current) => !current);
              axios
                .put(
                  `http://localhost:8080/goals/${goals[presentIdx].targetMonth}`,
                  {},
                  {
                    headers: {
                      Authorization: `Bearer ${token}`,
                    },
                  }
                )
                .catch((err) => console.log);
            }}
            type="checkbox"
            checked={isDone}
          ></input>
          <div className={styles.goalRUD}>
            <button>Update</button>
            <button>X</button>
          </div>
        </div>
      </div>
    );
  }

  return <div className={styles.goal}></div>;
};

export default Goal;
