import First from "./First.js";
import Auth from "./Auth.js";
import styles from "../style/Contents.module.css";

const Contents = ({ loginType, isLogin }) => {
  if (loginType === "login" || loginType === "signup") {
    return (
      <div className={`${styles.main} ${styles.login}`}>
        <Auth loginType={loginType}></Auth>
      </div>
    );
  }

  if (isLogin) {
    return <div className={`${styles.intro} ${styles.main}`}>main page!</div>;
  }

  return (
    <div className={`${styles.intro} ${styles.main}`}>
      <First></First>
    </div>
  );
};

export default Contents;
