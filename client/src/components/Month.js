import axios from "axios";

async function fetchMonth() {
  const data = await axios.get("http://localhost:8080/goals?username=bob", {
    data: {
      targetMonth: "202111",
    },
  });
  console.log(data);
}

function Month(props) {
  fetchMonth().then(() => {
    return;
  });
  return <div></div>;
}

export default Month;
