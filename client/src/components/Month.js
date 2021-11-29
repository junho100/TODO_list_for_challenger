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
  const [goals, setGoals] = useState([
    {
      id: undefined,
      username: undefined,
      content: undefined,
      updateAt: undefined,
      targetMonth: undefined,
      isDone: undefined,
    },
  ]);
  const [presentMonth, setPresentMonth] = useState("");

  ///TODO!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  useEffect(() => {
    const fetchGoals = async () => {
      const { data: data } = await axios.get(
        `http://localhost:8080/goals?username=${username}`
      );
      console.log(data === goals);
      console.log(data === goals);
    };
    fetchGoals();
  }, [goals]);

  return (
    <div>
      <MonthSelector></MonthSelector>
      <MonthViewer></MonthViewer>
    </div>
  );
}

export default Month;
