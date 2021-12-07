import axios from "axios";
import { React, useEffect, useState } from "react";
import WeekSelector from "./WeekSelector.js";
import WeekViewer from "./WeekViewer.js";

const username = "bob";
//TODO : Month 바뀔때마다 challenge viewer 초기화 구현
function Week({ presentMonth, mode }) {
  const [targetWeeks, setTargetWeeks] = useState([]);
  const [presentWeek, setPresentWeek] = useState();
  const fetchWeeksData = () => {
    axios
      .get(`http://localhost:8080/challs/${presentMonth}?username=${username}`)
      .then((data) => {
        setTargetWeeks(data.data.map((d) => d.targetWeek));
      })
      .catch((e) => {
        if (e.response.status === 404) {
          setTargetWeeks([]);
        }
      });
  };

  useEffect(() => {
    if (presentMonth !== undefined) {
      fetchWeeksData();
      setPresentWeek(undefined);
    }
  }, [presentMonth]);
  return (
    <div>
      <WeekSelector
        targetWeeks={targetWeeks}
        onSetPresentWeek={setPresentWeek}
      ></WeekSelector>
      <WeekViewer
        presentMonth={presentMonth}
        presentWeek={presentWeek}
        mode={mode}
      ></WeekViewer>
    </div>
  );
}

export default Week;
