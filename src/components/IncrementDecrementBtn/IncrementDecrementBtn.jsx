import React, { useState } from "react";
import "./IncrementDecrementBtn.scss";
const IncrementDecrementBtn = ({ minValue =0 , maxValue }) => {
  const [count, setCount] = useState(minValue);
  const increment = () => {
    if (count < maxValue) {
      setCount((prevState) => prevState + 1);
    }
  };
  const decrement = () => {
    if (count > minValue) {
      setCount((prevState) => prevState - 1);
    }
  };
  return (
    <>
      <div className="increm-decrem-btn">
        <button onClick={decrement} className="decrement-btn">
          <span>-</span>
        </button>
        <p>{count}</p>
        <button onClick={increment} className="increment-btn">
          <span>+</span>
        </button>
      </div>
    </>
  );
};

export default IncrementDecrementBtn;
