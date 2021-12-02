import { React, useState, useEffect } from "react";
import axios from "axios";
import MonthSelector from "./MonthSelector.js";
import MonthViewer from "./MonthViewer.js";

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

const username = "bob";

function Month(props) {
  const [goalDatas, setGoalDatas] = useState();
  const [targetMonths, setTargetMonths] = useState();

  const getGoalDatas = async () => {
    const { data: data } = await axios.get(
      `http://localhost:8080/goals?username=${username}`
    );
    setGoalDatas(data);
    setTargetMonths(data.map((d) => d.targetMonth));
  };

  useEffect(() => {
    getGoalDatas();
  }, []);

  return (
    <div>
      <MonthSelector targetMonths={targetMonths}></MonthSelector>
      <MonthViewer></MonthViewer>
    </div>
  );
}

export default Month;
