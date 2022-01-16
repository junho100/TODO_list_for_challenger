import { useState } from "react";
import axios from "axios";
import styles from "../style/Auth.module.css";

const TOKEN = "token";

const Auth = ({ loginType }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const clearForm = () => {
    setUsername("");
    setPassword("");
    setName("");
  };

  const signup = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/auth/signup", {
        username,
        password,
        name,
      })
      .then((res) => {
        localStorage.setItem(TOKEN, res.data.token);
        window.location.replace("/");
        clearForm();
      })
      .catch((e) => {
        window.alert(e.response.data);
        clearForm();
      });
  };

  const login = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/auth/login", {
        username,
        password,
      })
      .then((res) => {
        localStorage.setItem(TOKEN, res.data.token);
        window.location.replace("/");
        clearForm();
      })
      .catch((e) => {
        window.alert(e.response.data);
        clearForm();
      });
  };

  if (loginType === "login") {
    return (
      <form className={styles.form}>
        <input
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          type="text"
          placeholder="Username"
        ></input>
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          placeholder="Password"
        ></input>
        <button onClick={login}>Submit</button>
      </form>
    );
  } else if (loginType === "signup") {
    return (
      <form className={styles.form}>
        <input
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          type="text"
          placeholder="Write username"
        ></input>
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          placeholder="Write password"
        ></input>
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          type="text"
          placeholder="Write your name"
        ></input>

        <button onClick={signup}>Submit</button>
      </form>
    );
  } else {
    return <div>rendering error!</div>;
  }
};

export default Auth;
