import { React, useState, useEffect } from "react";
import axios from "axios";
import MonthSelector from "./MonthSelector.js";
import MonthViewer from "./MonthViewer.js";
import MonthController from "./MonthController.js";

const username = "bob";

function Month(props) {
  const [mode, setMode] = useState(1); // 0:C, 1:R, 2:U, 3:D
  const [goalDatas, setGoalDatas] = useState([]);
  const [targetMonths, setTargetMonths] = useState([]);
  const [presentMonth, setPresentMonth] = useState();
  const [isUpdate, setIsUpdate] = useState(false);

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
    if (isUpdate === true) {
      setIsUpdate(false);
    }
  }, []);

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
      ></MonthViewer>
      <MonthController
        onSetIsUpdate={setIsUpdate}
        presentMonth={presentMonth}
        mode={mode}
        onGetGoalDatas={getGoalDatas}
      ></MonthController>
    </div>
  );
}

export default Month;
