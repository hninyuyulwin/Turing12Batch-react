"use client";
import React, { useRef } from "react";

function FocusInput() {
  const inputRef = useRef(null);
  const onClickHandler = () => {
    // console.log("Focused!");
    inputRef.current.focus();
  };

  return (
    <div>
      <h3>FocusInput</h3>
      <input type="text" name="" id="" ref={inputRef} />
      <button type="button" onClick={onClickHandler}>
        Focus
      </button>
    </div>
  );
}

export default FocusInput;
