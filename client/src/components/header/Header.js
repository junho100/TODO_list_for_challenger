import Title from "./Title.js";
import Login from "./Login.js";
import styles from "../style/Header.module.css";

const Header = ({ isLogin }) => {
  if (!isLogin) {
    return (
      <div className={styles.header}>
        <Title></Title>
        <Login></Login>
      </div>
    );
  }

  return (
    <div className={styles.header}>
      <Title></Title>
      <Login isLogin={isLogin}></Login>
    </div>
  );
};

export default Header;
