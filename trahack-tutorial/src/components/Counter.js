import React, { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const countUp = () => {
    setCount((prevState) => prevState + 1);
  };
  const countDown = () => {
    setCount((prevState) => prevState - 1);
  };

  return (
    <div>
      <p>現在のカウント: {count}</p>
      <button onClick={countUp}>COUNT UP</button>
      <button onClick={()=>countDown()}>COUNT DOWN</button>
    </div>
  )
};
