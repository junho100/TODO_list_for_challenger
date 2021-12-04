import { React, useState, useEffect } from "react";

const Months = [
  "Unknown",
  "January",
  "Febuary",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function MonthViewer({ presentMonth, onGetGoalByMonth }) {
  const [monthData, setMonthData] = useState({
    id: undefined,
    username: undefined,
    content: undefined,
    updatedAt: undefined,
    targetMonth: undefined,
    isDone: undefined,
  });
  const fetchMonthData = async (targetMonth) => {
    const data = await onGetGoalByMonth(targetMonth);
    setMonthData(data);
  };
  useEffect(() => {
    if (presentMonth) {
      fetchMonthData(presentMonth);
    }
  }, [presentMonth]);
  if (monthData.id) {
    const idx = parseInt(monthData.targetMonth.slice(4, 6));
    const strMonth = monthData.targetMonth.slice(0, 4) + "  " + Months[idx];
    return (
      <ul>
        <li>{monthData.username}</li>
        <li>{strMonth}</li>
        <li>{monthData.content}</li>
        <li>{monthData.updatedAt}</li>
        <li>{monthData.isDone === true ? "complete" : "not complete"}</li>
      </ul>
    );
  }
  return <div>Choose Month!</div>;
}

export default MonthViewer;
