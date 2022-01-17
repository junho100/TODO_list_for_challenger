import axios from "axios";
import { useState, useEffect } from "react";
import styles from "../style/Challenge.module.css";

const Challenge = ({ goals, presentIdx }) => {
  return (
    <div className={styles.challenge}>
      <h3>Challenge of this month</h3>
      <div></div>
    </div>
  );
};

export default Challenge;
