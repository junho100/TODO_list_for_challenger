import Header from "../components/header/Header.js";
import Contents from "../components/contents/Contents.js";
import Footer from "../components/footer/Footer.js";
import styles from "./global.module.css";

const Main = () => {
  return (
    <div className={styles.page}>
      <Header></Header>
      <Contents></Contents>
      <Footer></Footer>
    </div>
  );
};

export default Main;
