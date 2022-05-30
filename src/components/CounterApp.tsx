import React, { useState } from "react";
import DisplayCounter from "./DisplayCounter";

const CounterApp = () => {
  const [num, setNum] = useState<number>(0);
  const counterHandeler = (isIncrement?: boolean | null): void => {
    if (isIncrement) {
      setNum((prev: number) => prev + 1);
    } else {
      if (num > 0) {
        setNum((prev: number) => prev - 1);
      }
    }
  };
  return (
    <div>
      <div>
        <button onClick={() => counterHandeler(true)}>Increment</button>
        <button onClick={() => counterHandeler(false)}>Decrement</button>
      </div>
      <div>
        <DisplayCounter value={num} />
      </div>
    </div>
  );
};

export default CounterApp;
