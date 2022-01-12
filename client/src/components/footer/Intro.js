import styles from "../style/Intro.module.css";

const Intro = () => {
  return (
    <ul className={styles.intro}>
      <li>Made by JunHo Baek</li>
      <li>email : bemodesty306@naver.com</li>
      <li>
        <a
          href="https://github.com/junho100"
          target="_blank"
          rel="noopener noreferrer"
        >
          github
        </a>
      </li>
    </ul>
  );
};

export default Intro;
