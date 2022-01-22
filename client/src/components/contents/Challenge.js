import { useState, useEffect } from "react";
import axios from "axios";
import styles from "../style/Challenge.module.css";

const Challenge = ({ content, targetWeek, isDone, targetMonth }) => {
  const [challengeMode, setChallengeMode] = useState(1);
  const [creatingChallenge, setCreatingChallenge] = useState("");
  // 0:create, 1:read, 2:update
  const [presentContent, setPresentContent] = useState("");
  useEffect(() => {
    if (content) {
      setPresentContent(content);
    } else {
      setPresentContent("");
    }
  }, [content]);

  if (challengeMode === 0 || challengeMode === 2) {
    return (
      <div className={`${styles.challenge}`}>
        <h4>{targetWeek}</h4>
        <div>
          <input
            onChange={(e) => {
              setCreatingChallenge(e.target.value);
            }}
            className={styles.create}
            value={creatingChallenge}
          ></input>
        </div>
        <div>
          <button
            onClick={() => {
              if (challengeMode === 0) {
                const token = localStorage.getItem("token");
                axios
                  .post(
                    `http://localhost:8080/challs/${targetMonth}/${targetWeek}`,
                    {
                      content: creatingChallenge,
                    },
                    {
                      headers: {
                        Authorization: `Bearer ${token}`,
                      },
                    }
                  )
                  .then(() => {
                    setPresentContent(creatingChallenge);
                    setCreatingChallenge("");
                    setChallengeMode(1);
                  })
                  .catch((e) => {
                    console.log(e.response);
                  });
              }
              if (challengeMode === 2) {
                const token = localStorage.getItem("token");
                axios
                  .put(
                    `http://localhost:8080/challs/${targetMonth}/${targetWeek}`,
                    {
                      content: creatingChallenge,
                    },
                    {
                      headers: {
                        Authorization: `Bearer ${token}`,
                      },
                    }
                  )
                  .then(() => {
                    setPresentContent(creatingChallenge);
                    setCreatingChallenge("");
                    setChallengeMode(1);
                  })
                  .catch((e) => {
                    console.log(e.response);
                  });
              }
            }}
          >
            Submit
          </button>
        </div>
      </div>
    );
  }
  if (challengeMode === 1) {
    if (presentContent) {
      return (
        <div className={`${styles.withchallenge} ${styles.challenge}`}>
          <h4>{targetWeek}</h4>
          <div>{presentContent}</div>
          <div>
            <input
              type="checkbox"
              defaultChecked={isDone ? true : false}
              onClick={() => {
                const token = localStorage.getItem("token");
                axios.put(
                  `http://localhost:8080/challs/${targetMonth}/${targetWeek}`,
                  {},
                  {
                    headers: {
                      Authorization: `Bearer ${token}`,
                    },
                  }
                );
              }}
            ></input>
            <button
              onClick={() => {
                setChallengeMode(2);
              }}
            >
              Update
            </button>
            <button
              onClick={() => {
                const token = localStorage.getItem("token");
                axios
                  .delete(
                    `http://localhost:8080/challs/${targetMonth}/${targetWeek}`,
                    {
                      headers: {
                        Authorization: `Bearer ${token}`,
                      },
                    }
                  )
                  .then(() => {
                    setPresentContent("");
                  });
              }}
            >
              X
            </button>
          </div>
        </div>
      );
    } else {
      return (
        <div className={`${styles.nochallenge} ${styles.challenge}`}>
          <h4>{targetWeek}</h4>
          <div>No Challenge!</div>
          <div>
            <button
              onClick={() => {
                setChallengeMode(0);
              }}
            >
              Create
            </button>
          </div>
        </div>
      );
    }
  }
};

export default Challenge;
