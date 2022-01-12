import Contents from "../components/contents/Contents.js";
import Footer from "../components/footer/Footer.js";
import Header from "../components/header/Header.js";
import styles from "./global.module.css";

const Login = ({ loginType }) => {
  return (
    <div className={styles.page}>
      <Header></Header>
      <Contents loginType={loginType}></Contents>
      <Footer></Footer>
    </div>
  );
};

export default Login;
