import { React, useEffect, useState } from "react";

function MonthSelector({ targetMonths, onSetPresentMonth, onSetMode }) {
  return (
    <div>
      {targetMonths.map((targetMonth) => {
        return (
          <button
            key={targetMonth}
            onClick={(e) => {
              onSetPresentMonth(e.target.innerText);
              onSetMode(1);
            }}
          >
            {targetMonth}
          </button>
        );
      })}
      <button
        onClick={() => {
          onSetMode(0);
        }}
      >
        +
      </button>
    </div>
  );
}

export default MonthSelector;
