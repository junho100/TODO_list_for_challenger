import { React, useEffect, useState } from "react";

function MonthSelector({ targetMonths, onSetPresentMonth, onSetMode }) {
  return (
    <div>
      {targetMonths.map((targetMonth) => {
        return (
          <div key={targetMonth}>
            <button
              key={targetMonth}
              onClick={(e) => {
                onSetPresentMonth(e.target.innerText);
                onSetMode(1);
              }}
            >
              {targetMonth}
            </button>
            <button
              key="update"
              onClick={() => {
                onSetMode(2);
              }}
            >
              Update
            </button>
            <button
              key="delete"
              onClick={() => {
                onSetMode(3);
              }}
            >
              Delete
            </button>
            <button
              key="toggle"
              onClick={() => {
                onSetMode(5);
              }}
            >
              V
            </button>
          </div>
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
