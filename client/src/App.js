import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:7000/api")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data.msg);
      });
  }, []);

  // func = async () => {
  //   const url = await fetch("http://127.0.0.1:8004/api/v1/consol");
  //   const res = await url.json();
  //   console.log(res);

  // };
  // func();

  return (
    <div>
      <div>{!data ? "loading..." : data}</div>
    </div>
  );
}

export default App;
