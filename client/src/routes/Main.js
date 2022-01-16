import Header from "../components/header/Header.js";
import Contents from "../components/contents/Contents.js";
import Footer from "../components/footer/Footer.js";
import styles from "./global.module.css";

const Main = ({ login }) => {
  if (!login) {
    return (
      <div className={styles.page}>
        <Header isLogin={false}></Header>
        <Contents></Contents>
        <Footer></Footer>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <Header isLogin={true}></Header>
      <Contents></Contents>
      <Footer></Footer>
    </div>
  );
};

export default Main;
