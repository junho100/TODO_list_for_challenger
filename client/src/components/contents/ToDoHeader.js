import styles from "../style/ToDoHeader.module.css";

const ToDoHeader = ({
  goals,
  presentIdx,
  setPresentIdx,
  setCreateGoalMode,
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
      <h2>{goals[presentIdx].targetMonth}</h2>
      <div>
        <h5>Shortcut</h5>
        <select
          onChange={(e) => {
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
          setCreateGoalMode(true);
        }}
      >
        +
      </button>
    </div>
  );
};

export default ToDoHeader;
