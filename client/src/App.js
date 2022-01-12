import { Routes, Route } from "react-router-dom";
import Main from "./routes/Main.js";
import Login from "./routes/Login.js";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />}></Route>
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
