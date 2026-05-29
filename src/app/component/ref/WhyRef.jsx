"use client";

import React, { useRef, useState } from "react";

function WhyRef() {
  let incClickCount = 0;
  let clickCount = 0;

  const anotherCount = useRef(0);
  console.log("Another Click Count : ", anotherCount.current);
  const [count, setCount] = useState(0);

  const incHandler = () => {
    setCount(count + 1);
    // incClickCount++;
  };

  const anotherHandler = () => {
    anotherCount.current++;
  };

  return (
    <div>
      <button type="button" onClick={incHandler}>
        +
      </button>
      <p>{count}</p>
      <button type="button" onClick={() => setCount(count - 1)}>
        -
      </button>
      <br />
      <br />
      <button type="button" onClick={anotherHandler}>
        Another Handler
      </button>
    </div>
  );
}

export default WhyRef;
