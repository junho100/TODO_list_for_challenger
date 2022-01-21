import axios from "axios";
import { useState, useEffect } from "react";
import styles from "../style/Challenges.module.css";
import Challenge from "./Challenge.js";

const Challenges = ({ goals, presentIdx, goalMode }) => {
  const [challenges, setChallenges] = useState([]);

  const getChallenges = () => {
    const token = localStorage.getItem("token");
    const targetMonth = goals[presentIdx].targetMonth;
    axios
      .get(`http://localhost:8080/challs/${targetMonth}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((data) => {
        setChallenges(() => [...data.data]);
      })
      .catch((e) => {
        if (e.response.status === 404) {
          setChallenges(() => {
            return [];
          });
        }
      });
  };

  const renderChallenge = () => {
    const challs = [];
    const targetMonth = goals[presentIdx].targetMonth;
    for (let i = 1; i < 6; i++) {
      const target = challenges.find((challenge) => {
        return challenge.targetWeek === String(i);
      });
      if (target) {
        challs.push(
          <Challenge
            key={i}
            content={target.content}
            targetWeek={String(i)}
            isDone={target.isDone}
            targetMonth={targetMonth}
          ></Challenge>
        );
      } else {
        challs.push(
          <Challenge
            key={i}
            targetWeek={String(i)}
            targetMonth={targetMonth}
          ></Challenge>
        );
      }
    }
    return challs;
  };

  useEffect(() => {
    if (presentIdx !== undefined && goals.length !== 0) {
      getChallenges();
    }
  }, [presentIdx, goals]);
  if (goalMode === 0) {
    return (
      <div className={styles.challenge}>
        <h3>How to create</h3>
        <div className={styles.desc}>
          <ol>
            <li>Choose year and month</li>
            <li>Write your Goal in the month</li>
            <li>Press Submit!</li>
          </ol>
        </div>
      </div>
    );
  }
  if (goals.length !== 0) {
    return (
      <div className={styles.challenge}>
        <h3>Challenge of this month</h3>
        <div className={styles.challs}>{renderChallenge()}</div>
      </div>
    );
  }

  return <div className={styles.challenge}></div>;
};

export default Challenges;
