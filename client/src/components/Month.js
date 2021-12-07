import { React, useState, useEffect } from "react";
import axios from "axios";
import MonthSelector from "./MonthSelector.js";
import MonthViewer from "./MonthViewer.js";
import MonthController from "./MonthController.js";
import Week from "./Week.js";

const username = "bob";

function Month(props) {
  const [mode, setMode] = useState(4); // 0:C, 1:R, 2:U, 3:D, 4:Default, 5:toggle
  const [goalDatas, setGoalDatas] = useState([]);
  const [targetMonths, setTargetMonths] = useState([]);
  const [presentMonth, setPresentMonth] = useState();

  const getGoalDatas = async () => {
    const { data: data } = await axios.get(
      `http://localhost:8080/goals?username=${username}`
    );
    setGoalDatas(data);
    setTargetMonths(data.map((d) => d.targetMonth));
  };

  const getGoalByMonth = async (targetMonth) => {
    const { data: data } = await axios.get(
      `http://localhost:8080/goals/${targetMonth}?username=${username}`
    );
    return data;
  };

  useEffect(() => {
    getGoalDatas();
  }, [mode]);

  return (
    <div>
      <MonthSelector
        targetMonths={targetMonths}
        onSetPresentMonth={setPresentMonth}
        onSetMode={setMode}
      ></MonthSelector>
      <MonthViewer
        presentMonth={presentMonth}
        onGetGoalDatas={getGoalDatas}
        onGetGoalByMonth={getGoalByMonth}
        goalDatas={goalDatas}
        mode={mode}
      ></MonthViewer>
      <MonthController
        presentMonth={presentMonth}
        mode={mode}
        onGetGoalDatas={getGoalDatas}
        onSetMode={setMode}
      ></MonthController>
      <Week presentMonth={presentMonth} mode={mode}></Week>
    </div>
  );
}

export default Month;
