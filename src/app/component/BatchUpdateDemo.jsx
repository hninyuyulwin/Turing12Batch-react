"use client";
import React, { useState } from "react";

function BatchUpdateCounter() {
  let dummy = 0;
  const [count, setCount] = useState(0);
  console.log("Counter render count : ", count);

  const increment = () => {
    setCount((count) => count + 1);
    setCount((count) => count + 1);
    setCount((count) => count + 1);
  };

  const decrement = () => {
    setCount((count) => count - 1);
    setCount((count) => count - 1);
    setCount((count) => count - 1);
  };

  return (
    <div>
      <button onClick={increment}>+</button>
      <h1>{count}</h1>
      <button onClick={decrement}>-</button>
    </div>
  );
}

function BatchUpdateDemo() {
  return (
    <div>
      <h1>Batch update demo</h1>
      <BatchUpdateCounter />
    </div>
  );
}

export default BatchUpdateDemo;
