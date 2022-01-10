import Title from "./Title.js";
import Login from "./Login.js";
import styles from "../style/Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <Title></Title>
      <Login></Login>
    </div>
  );
};

export default Header;
