import axios from "axios";
import { useState, useEffect } from "react";
import styles from "../style/Challenges.module.css";
import Challenge from "./Challenge.js";

const Challenges = ({ goals, presentIdx, createGoalMode }) => {
  const [challenges, setChallenges] = useState([]);

  const getChallenges = async () => {
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
          setChallenges(() => []);
        }
      });
  };

  const renderChallenge = () => {
    const challs = [];
    for (let i = 1; i < 6; i++) {
      const target = challenges.find((challenge) => {
        return challenge.targetWeek === String(i);
      });
      if (target) {
        challs.push(
          <Challenge
            key={i}
            content={target.content}
            targetWeek={i}
            isDone={target.isDone}
          ></Challenge>
        );
      } else {
        challs.push(<Challenge key={i} targetWeek={i}></Challenge>);
      }
    }

    return challs;
  };

  useEffect(() => {
    if (presentIdx !== undefined && goals.length !== 0) {
      getChallenges();
    }
  }, [presentIdx, goals]);
  if (createGoalMode) {
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
