import { useState, useEffect } from "react";
import React from "react";
import './../styles/App.css';

const App = () => {

  const [number, setNumber] = useState([]);
  const [input, setInput] = useState("");
  const [sum, setSum] = useState(0);

  const calculateSum = (e) => {
    const value = e.target.value;

    setInput(value);

    if (value === "") return;

    setNumber([...number, parseInt(value)]);
  };

  useEffect(() => {

    const timer = setTimeout(() => {

      let total = 0;

      number.forEach((num) => {
        total += num;
      });

      setSum(total);

    }, 0);

    return () => clearTimeout(timer);

  }, [number]);

  return (
    <div>
      <h1>Sum Calculator</h1>

      <input
        type="number"
        value={input}
        onChange={calculateSum}
        placeholder="Enter a number"
      />

      <p>Sum: {sum}</p>

    </div>
  );
};

export default App;