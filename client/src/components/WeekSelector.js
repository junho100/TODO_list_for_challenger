import { React } from "react";

function WeekSelector({ targetWeeks, onSetPresentWeek }) {
  return (
    <div>
      {targetWeeks.map((targetWeek) => {
        return (
          <button
            key={targetWeek}
            onClick={(e) => {
              onSetPresentWeek(e.target.innerText);
            }}
          >
            {targetWeek}
          </button>
        );
      })}
    </div>
  );
}

export default WeekSelector;
