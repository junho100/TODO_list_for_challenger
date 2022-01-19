import styles from "../style/Challenge.module.css";

const Challenge = ({ content, targetWeek, isDone }) => {
  if (content) {
    return (
      <div className={`${styles.withchallenge} ${styles.challenge}`}>
        <h4>{targetWeek}</h4>
        <div>{content}</div>
        <div>
          <input type="checkbox" defaultChecked={isDone ? true : false}></input>
        </div>
      </div>
    );
  }
  return (
    <div className={`${styles.nochallenge} ${styles.challenge}`}>
      <h4>{targetWeek}</h4>
      <div>No Content!</div>
    </div>
  );
};

export default Challenge;
