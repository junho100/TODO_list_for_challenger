import { React } from "react";
import axios from "axios";

const username = "bob";

function MonthController({
  mode,
  onGetGoalDatas,
  onSetIsUpdate,
  presentMonth,
}) {
  if (mode === 0) {
    return (
      <form>
        <input placeholder="year"></input>
        <input placeholder="month"></input>
        <input placeholder="content"></input>
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            const targetMonth =
              String(e.target.form[0].value) + String(e.target.form[1].value);
            const content = String(e.target.form[2].value);

            axios
              .post(
                `http://localhost:8080/goals/${targetMonth}?username=${username}`,
                {
                  content,
                }
              )
              .then(() => {
                onGetGoalDatas();
              });
          }}
        >
          submit
        </button>
      </form>
    );
  } else if (mode === 2) {
    return (
      <form>
        <input placeholder="content"></input>
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            const targetMonth = presentMonth;
            const content = String(e.target.form[0].value);

            axios
              .put(
                `http://localhost:8080/goals/${targetMonth}?username=${username}`,
                {
                  content,
                }
              )
              .then(() => {
                onSetIsUpdate(true);
              });
          }}
        >
          submit
        </button>
      </form>
    );
  } else if (mode === 3) {
    const targetMonth = presentMonth;
    axios.delete(
      `http://localhost:8080/goals/${targetMonth}?username=${username}`
    );
  }
  return <div></div>;
}

export default MonthController;
