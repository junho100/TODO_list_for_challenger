import { React, useEffect, useState } from "react";

function MonthSelector(props) {
  return (
    <div>
      {props.targetMonths.map((targetMonth) => {
        return (
          <button
            key={targetMonth}
            onClick={(e) => {
              props.onSetPresentMonth(e.target.innerText);
            }}
          >
            {targetMonth}
          </button>
        );
      })}
    </div>
  );
}

export default MonthSelector;
