import styles from "../style/About.module.css";

const About = () => {
  return (
    <ul className={styles.about}>
      <li>About this project</li>
      <li>
        github :{" "}
        <a
          href="https://github.com/junho100/TODO_list_for_challenger"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://github.com/junho100/TODO_list_for_challenger
        </a>
      </li>
    </ul>
  );
};

export default About;
