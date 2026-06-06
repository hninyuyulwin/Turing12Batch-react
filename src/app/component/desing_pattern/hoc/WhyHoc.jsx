"use client";
import React, { useEffect } from "react";

function Component1() {
  useEffect(() => {
    console.log("Component1 rendered");
  }, []);
  return <div>Component1</div>;
}

function Component2() {
  useEffect(() => {
    console.log("Component2 rendered");
  }, []);
  return <div>Component2</div>;
}

function WhyHoc() {
  return (
    <div>
      <Component1 />
      <Component2 />
    </div>
  );
}

export default WhyHoc;
