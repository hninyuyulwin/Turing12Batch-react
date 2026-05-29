"use client";

import React, { useRef } from "react";

function MyInput({ ref }) {
  return (
    <div>
      <h4>My Input</h4>
      <input type="text" ref={ref} id="" />
    </div>
  );
}

function CustomInputDemo() {
  const ref = useRef(null);

  const focusHandler = () => {
    ref.current.focus();
  };
  return (
    <div>
      <h3>CustomInputDemo</h3>
      <button type="button" onClick={focusHandler}>
        Focus
      </button>
      <MyInput ref={ref} />
    </div>
  );
}

export default CustomInputDemo;
