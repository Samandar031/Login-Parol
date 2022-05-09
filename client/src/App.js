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

  return (
    <div>
      <div>{!data ? "loading..." : data}</div>
    </div>
  );
}

export default App;
