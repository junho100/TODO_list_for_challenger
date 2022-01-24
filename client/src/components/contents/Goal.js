import axios from "axios";
import { useState, useEffect } from "react";
import styles from "../style/Goal.module.css";

const Goal = ({ goals, presentIdx, goalMode, setGoalMode, setPresentIdx }) => {
  const [isDone, setIsDone] = useState(false);
  const [creatingMonth, setCreatingMonth] = useState("");
  const [creatingContent, setCreatingContent] = useState("");
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (goals.length !== 0 && goalMode === 1) {
      axios
        .get(`http://localhost:8080/goals/${goals[presentIdx].targetMonth}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setIsDone(res.data.isDone);
        });
    }
  });
  if (goalMode === 0) {
    return (
      <div className={styles.goal}>
        <h3>Create Goal</h3>
        <div>
          <form className={styles.create_form}>
            <input
              onChange={(e) => {
                const year = String(e.target.valueAsDate.getFullYear());
                const month = String(
                  e.target.valueAsDate.getMonth() + 1
                ).padStart(2, "0");
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
                    setGoalMode(1);
                    setPresentIdx(undefined);
                  })
                  .catch((e) => {
                    if (e.response.data === "goal already exists") {
                      alert(`Goal of ${creatingMonth} already exist!`);
                    }
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
  if (goalMode === 2) {
    return (
      <div className={styles.goal}>
        <h3>Update goal</h3>
        <div>
          <form className={styles.create_form}>
            <textarea
              onChange={(e) => {
                setCreatingContent(e.target.value);
              }}
            ></textarea>
            <button
              onClick={(e) => {
                e.preventDefault();
                axios
                  .put(
                    `http://localhost:8080/goals/${goals[presentIdx].targetMonth}`,
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
                    setCreatingContent("");
                    setGoalMode(1);
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
  if (goals.length !== 0 && goalMode === 1) {
    return (
      <div className={styles.goal}>
        <h3>Goal of this month</h3>
        <div>
          <h3>{goals[presentIdx].content}</h3>
          <ul>
            <li>{goals[presentIdx].updatedAt}</li>
          </ul>
          <input
            onChange={() => {
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
            checked={isDone ? true : false}
          ></input>
          <div className={styles.goalRUD}>
            <button
              onClick={() => {
                setGoalMode(2);
              }}
            >
              Update
            </button>
            <button
              onClick={() => {
                axios
                  .delete(
                    `http://localhost:8080/goals/${goals[presentIdx].targetMonth}`,
                    {
                      headers: {
                        Authorization: `Bearer ${token}`,
                      },
                    }
                  )
                  .then(() => {
                    setGoalMode(1);
                    setPresentIdx(undefined);
                  });
              }}
            >
              X
            </button>
          </div>
        </div>
      </div>
    );
  }

  return <div className={styles.goal}></div>;
};

export default Goal;
