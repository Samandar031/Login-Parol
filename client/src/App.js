import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";

function App() {
  const [data, setData] = useState({
    name: "",
    desc: "",
    number: "",
  });

  const handchenge = (e) => {
    const { name, value } = e.target;
    setData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const submitChange = (e) => {
    e.preventDefault();
    const { name, desc, number } = data;
    const newContact = {
      name,
      desc,
      number,
    };
    axios.post("http://localhost:7000/newContact", newContact);

    console.log(newContact);
  };

  return (
    <div>
      <Navbar />
      <form className="w-50 m-auto ">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Enter your name
          </label>
          <input
            onChange={handchenge}
            value={data.name}
            name="name"
            type="text"
            className="form-control"
            id="name"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            desc
          </label>
          <input
            onChange={handchenge}
            value={data.desc}
            name="desc"
            type="text"
            className="form-control"
            id="desc"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="number" className="form-label">
            Enter your Number
          </label>
          <input
            onChange={handchenge}
            value={data.number}
            name="number"
            type="number"
            className="form-control"
            id="number"
          />
        </div>

        <button
          onClick={submitChange}
          type="submit"
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
