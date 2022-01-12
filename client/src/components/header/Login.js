import styles from "../style/Login.module.css";
import { Link } from "react-router-dom";

const Login = () => {
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
};

export default Login;
