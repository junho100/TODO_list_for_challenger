import axios from "axios";
import { React, useEffect, useState } from "react";

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

function Month(props) {
  const [monthGoal, setMonthGoal] = useState({
    id: undefined,
    username: undefined,
    content: undefined,
    updateAt: undefined,
    targetMonth: undefined,
    isDone: undefined,
  });

  useEffect(() => {
    const fetchMonth = async () => {
      const data = await axios.get(
        "http://localhost:8080/goals/202111?username=bob"
      );
      if (monthGoal.id !== data.data.id) {
        const result = {
          ...data.data,
          targetMonth: Months[parseInt(data.data.targetMonth.slice(4, 6))],
          year: data.data.targetMonth.slice(0, 4),
        };
        setMonthGoal(result);
      }
    };

    fetchMonth();
  }, [monthGoal]);
  return (
    <div>
      <h1>
        {monthGoal.year} {monthGoal.username}'s Goal in {monthGoal.targetMonth}
      </h1>
      <ul>
        <li>{monthGoal.content}</li>
      </ul>
    </div>
  );
}

export default Month;
