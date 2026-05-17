"use client";
import React, { useState } from "react";

function Child() {
  console.log("Child render");

  return (
    <div>
      <h2>Child</h2>
    </div>
  );
}

function Counter() {
  let dummy = 0;
  const [count, setCount] = useState(0);
  const [another, setAnother] = useState(10);
  console.log("Counder render dummy ", dummy, " , Count : ", count);

  const increment = () => {
    setCount(count + 1);
    dummy++;
  };

  const decrement = () => {
    setCount(count - 1);
    dummy--;
  };

  const updateAnother = () => {
    setAnother(another + 2);
  };

  return (
    <div>
      <button onClick={increment}>+</button>
      <h1>{count}</h1>
      <button onClick={decrement}>-</button>

      <h2>{another}</h2>
      <button onClick={updateAnother}>Update Another</button>

      <Child />
    </div>
  );
}

export default Counter;
