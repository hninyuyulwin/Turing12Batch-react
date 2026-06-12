"use client";
import React, { useState } from "react";

function Child({ onClick, another }) {
  console.log("Child render");

  return (
    <div>
      <p>Child Another: {another}</p>
      <button onClick={onClick}>Click Me</button>
    </div>
  );
}

function getHandler() {
  return function () {
    console.log("Handler clicked");
  };
}

function WhyUseCallback() {
  const [count, setCount] = useState(0);
  const [another, setAnother] = useState(0);
  const onClick = () => {
    console.log("Clicked ", another);
  };
  console.log("Parent Render");

  return (
    <div>
      <h1>{count}</h1>
      <h1>Another {another}</h1>
      <button onClick={() => setCount(count + 1)}>Update Count</button>
      <br />
      <br />
      <button onClick={() => setAnother(another + 1)}>Update Another</button>
      <h3>Why Use useCallback?</h3>
      <Child onClick={getHandler()} another={another} />
    </div>
  );
}

export default WhyUseCallback;
