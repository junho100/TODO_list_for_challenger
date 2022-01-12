import styles from "../style/Auth.module.css";

const Auth = ({ loginType }) => {
  if (loginType === "login") {
    return (
      <form className={styles.form}>
        <input type="text" placeholder="Username"></input>
        <input type="password" placeholder="Password"></input>
        <button>Submit</button>
      </form>
    );
  } else if (loginType === "signup") {
    return (
      <form className={styles.form}>
        <input type="text" placeholder="Write username"></input>
        <input type="password" placeholder="Write password"></input>
        <input type="text" placeholder="Write your name"></input>
        <button>Submit</button>
      </form>
    );
  } else {
    return <div>rendering error!</div>;
  }
};

export default Auth;
