import React, { useState, useEffect } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const countUp = () => {
    setCount((prevState) => prevState + 1);
  };
  const countDown = () => {
    setCount((prevState) => prevState - 1);
  };

  useEffect(() => {
    console.log(`Counter is ... ${count}`);
    return () => {
      console.log("this component is dead");
    };
  });

  return (
    <div>
      <p>現在のカウント: {count}</p>
      <button onClick={countUp}>COUNT UP</button>
      <button onClick={() => countDown()}>COUNT DOWN</button>
    </div>
  );
};
