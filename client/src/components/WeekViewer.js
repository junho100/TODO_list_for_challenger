import { React, useEffect, useState } from "react";
import axios from "axios";

const username = "bob";

function WeekViewer({ presentMonth, presentWeek }) {
  const [presentWeekData, setPresentWeekData] = useState({
    id: undefined,
    username: undefined,
    content: undefined,
    updatedAt: undefined,
    targetMonth: undefined,
    targetWeek: undefined,
    isDone: undefined,
  });

  const fetchWeekData = () => {
    axios
      .get(
        `http://localhost:8080/challs/${presentMonth}/${presentWeek}?username=${username}`
      )
      .then((data) => {
        setPresentWeekData(data.data);
      });
  };

  useEffect(() => {
    if (presentWeek !== undefined) {
      fetchWeekData();
    }
  }, [presentWeek, presentMonth]);
  if (presentWeek !== undefined) {
    return (
      <div>
        <li>{presentWeekData.content}</li>
        <li>{presentWeekData.updatedAt}</li>
        <li>{presentWeekData.targetWeek}</li>
        <li>{presentWeekData.isDone === true ? "complete" : "not complete"}</li>
      </div>
    );
  }
  return <div></div>;
}

export default WeekViewer;
