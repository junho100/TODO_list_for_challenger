import { React } from "react";

function MonthController({ mode }) {
  if (mode === 0) {
    return (
      <form>
        <input placeholder="year"></input>
        <input placeholder="month"></input>
        <input placeholder="content"></input>
        <button
          onClick={(e) => {
            e.preventDefault();
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
