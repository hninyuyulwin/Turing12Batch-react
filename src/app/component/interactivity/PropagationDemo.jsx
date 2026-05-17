"use client";
import React from "react";

function ChildOne() {
  const childHander = (event) => {
    console.log("Child Handler");
    event.stopPropagation();
  };
  return (
    <div onClick={childHander}>
      <h3>Child One</h3>
    </div>
  );
}

function PropagationDemo() {
  const parentHandler = () => {
    console.log("Parent Handler");
  };
  const rightClickHandler = (event) => {
    console.log("Right Clicked");
    event.preventDefault();
  };
  return (
    <div onClick={parentHandler} onContextMenu={rightClickHandler}>
      <h3>Parent Part</h3>
      <ChildOne />
    </div>
  );
}

export default PropagationDemo;
