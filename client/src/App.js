import { Routes, Route } from "react-router-dom";
import Main from "./routes/Main.js";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/login"></Route>
        <Route path="/signup"></Route>
      </Routes>
    </div>
  );
};

export default App;
