import styles from "../style/ToDoHeader.module.css";

const ToDoHeader = ({
  goals,
  presentIdx,
  setPresentIdx,
  setGoalMode,
  goalMode,
}) => {
  if (goals.length === 0 && goalMode === 1) {
    return (
      <div className={styles.notodo}>
        <h1>No Goals! Create Goal.</h1>
        <button
          onClick={() => {
            setGoalMode(0);
          }}
        >
          create
        </button>
      </div>
    );
  }

  if (presentIdx === undefined && goalMode === 1) {
    return (
      <div className={styles.todo}>
        <h2>Choose your goal</h2>
        <div>
          <h5>Shortcut</h5>
          <select
            value={
              presentIdx === undefined
                ? "default"
                : goals[presentIdx].targetMonth
            }
            onChange={(e) => {
              setGoalMode(1);
              setPresentIdx(e.target.options.selectedIndex - 1);
            }}
          >
            <option value="default" disabled={true}>
              Select Month
            </option>
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
  }

  return (
    <div className={styles.todo}>
      <h2>
        {goalMode !== 0 ? goals[presentIdx].targetMonth : "Write yout goal"}
      </h2>
      <div>
        <h5>Shortcut</h5>
        <select
          value={
            presentIdx === undefined ? "default" : goals[presentIdx].targetMonth
          }
          onChange={(e) => {
            setGoalMode(1);
            setPresentIdx(e.target.options.selectedIndex - 1);
          }}
        >
          <option value="default" disabled={true}>
            Select Month
          </option>
          {goals.map((goal) => {
            return (
              <option key={goal.id} value={goal.targetMonth}>
                {goal.targetMonth}
              </option>
            );
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
