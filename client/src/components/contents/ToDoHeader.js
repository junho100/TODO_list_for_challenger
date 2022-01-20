import styles from "../style/ToDoHeader.module.css";

const ToDoHeader = ({
  goals,
  presentIdx,
  setPresentIdx,
  setGoalMode,
  goalMode,
}) => {
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
      <h2>
        {goalMode !== 0 ? goals[presentIdx].targetMonth : "Write yout goal"}
      </h2>
      <div>
        <h5>Shortcut</h5>
        <select
          onChange={(e) => {
            setGoalMode(1);
            setPresentIdx(e.target.options.selectedIndex);
          }}
        >
          {goals.map((goal) => {
            return <option key={goal.id}>{goal.targetMonth}</option>;
          })}
        </select>
      </div>
      <button
        onClick={() => {
          setGoalMode(0);
        }}
      >
        +
      </button>
    </div>
  );
};

export default ToDoHeader;
