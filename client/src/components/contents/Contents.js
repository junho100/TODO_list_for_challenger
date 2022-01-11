import Intro from "./Intro.js";
import styles from "../style/Contents.module.css";

const Contents = () => {
  return (
    <div className={`${styles.intro} ${styles.main}`}>
      <Intro></Intro>
    </div>
  );
};

export default Contents;
