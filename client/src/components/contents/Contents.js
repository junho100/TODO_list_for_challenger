import First from "./First.js";
import styles from "../style/Contents.module.css";

const Contents = ({ loginType }) => {
  if (loginType === "login") {
    return <div className={`${styles.main} ${styles.login}`}>login</div>;
  } else if (loginType === "signup") {
    return <div className={`${styles.main} ${styles.login}`}>signup</div>;
  }
  return (
    <div className={`${styles.intro} ${styles.main}`}>
      <First></First>
    </div>
  );
};

export default Contents;
