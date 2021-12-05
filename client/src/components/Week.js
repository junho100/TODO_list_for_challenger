import axios from "axios";
import { React, useEffect, useState } from "react";
import WeekSelector from "./WeekSelector.js";
import WeekViewer from "./WeekViewer.js";

const username = "bob";

function Week({ presentMonth }) {
  const [targetWeeks, setTargetWeeks] = useState([]);
  const fetchWeekData = () => {
    axios
      .get(`http://localhost:8080/challs/${presentMonth}?username=${username}`)
      .then((data) => {
        console.log(data.data.map((d) => d.targetWeek));
        setTargetWeeks(data.data.map((d) => d.targetWeek));
      });
  };

  useEffect(() => {
    if (presentMonth !== undefined) {
      fetchWeekData();
    }
  }, [presentMonth]);
  return (
    <div>
      <WeekSelector></WeekSelector>
      <WeekViewer></WeekViewer>
    </div>
  );
}

export default Week;
