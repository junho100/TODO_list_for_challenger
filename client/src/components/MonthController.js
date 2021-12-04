import { React } from "react";
import axios from "axios";

const username = "bob";

function MonthController({ mode, onGetGoalDatas }) {
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
            console.log(targetMonth, content);
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
  } else if (mode === 3) {
  }
  return <div></div>;
}

export default MonthController;
