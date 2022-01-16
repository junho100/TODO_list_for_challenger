import styles from "../style/Login.module.css";
import { Link } from "react-router-dom";

const Login = ({ isLogin, user }) => {
  if (!isLogin) {
    return (
      <div className={styles.btns}>
        <Link to="/login">
          <button>login</button>
        </Link>
        <Link to="/signup">
          <button>signup</button>
        </Link>
      </div>
    );
  }

  return (
    <div className={styles.login}>
      <span>{`Welcome ${user}`}</span>
      <button
        onClick={() => {
          localStorage.removeItem("token");
          window.location.replace("/login");
        }}
      >
        logout
      </button>
    </div>
  );
};

export default Login;
