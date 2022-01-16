import axios from "axios";
import { useState, useEffect } from "react";
import Goal from "./Goal.js";
import Challenge from "./Challenge.js";
import ToDoHeader from "./ToDoHeader.js";

const ToDo = ({ user }) => {
  const [goals, setGoals] = useState([]);

  const getGoals = async () => {
    const token = localStorage.getItem("token");
    axios
      .get("http://localhost:8080/goals", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((data) => {
        setGoals(() => data.data);
      });
  };

  useEffect(() => {
    if (user) {
      getGoals();
    }
  }, []);
  return (
    <div>
      <ToDoHeader goals={goals}></ToDoHeader>
      <main>
        <Goal goals={goals}></Goal>
        <Challenge></Challenge>
      </main>
    </div>
  );
};

export default ToDo;
