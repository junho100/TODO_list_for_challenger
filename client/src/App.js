import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Main from "./routes/Main.js";
import Login from "./routes/Login.js";

const App = () => {
  const [user, setUser] = useState("");
  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get("http://localhost:8080/auth/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setUser(res.data);
      })
      .catch((e) => {
        if (e.response.status === 401) {
          console.log("login is required");
        }
      });
  }, [user]);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main login={user} />}></Route>
        <Route
          path="/login"
          element={<Login loginType="login"></Login>}
        ></Route>
        <Route
          path="/signup"
          element={<Login loginType="signup"></Login>}
        ></Route>
      </Routes>
    </div>
  );
};

export default App;
