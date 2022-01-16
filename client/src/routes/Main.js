import Header from "../components/header/Header.js";
import Contents from "../components/contents/Contents.js";
import Footer from "../components/footer/Footer.js";
import styles from "./global.module.css";

const Main = ({ isLogin, user }) => {
  return (
    <div className={styles.page}>
      <Header isLogin={isLogin} user={user}></Header>
      <Contents isLogin={isLogin} user={user}></Contents>
      <Footer></Footer>
    </div>
  );
};

export default Main;
