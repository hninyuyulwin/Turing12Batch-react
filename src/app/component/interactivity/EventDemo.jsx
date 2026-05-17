"use client";

import React from "react";

function CustomButton({ clickHandler }) {
  return (
    <button type={"button"} onClick={clickHandler}>
      Click me!
    </button>
  );
}

function EventDemo() {
  const clickHandler = (e) => {
    console.log("On Clicked ", e);
  };

  return (
    <div>
      EventDemo
      <CustomButton clickHandler={clickHandler} />
    </div>
  );
}

export default EventDemo;
