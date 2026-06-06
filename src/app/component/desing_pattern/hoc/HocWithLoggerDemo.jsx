"use client";
import React from "react";
import withLogger from "./withLogger";

function Component1() {
  return <div>Component1</div>;
}

function Component2() {
  return <div>Component2</div>;
}

const Component1WithLogger = withLogger(Component1);
const Component2WithLogger = withLogger(Component2);

function HocWithLoggerDemo() {
  return (
    <div>
      <Component1WithLogger />
      <Component2WithLogger />
    </div>
  );
}

export default HocWithLoggerDemo;
