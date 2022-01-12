import Intro from "./Intro.js";
import About from "./About.js";
import styles from "../style/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <Intro></Intro>
      <About></About>
    </div>
  );
};

export default Footer;
