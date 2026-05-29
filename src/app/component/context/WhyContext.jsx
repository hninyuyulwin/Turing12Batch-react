"use client";

import React from "react";

function Child({ message }) {
  return (
    <div>
      <h3>Child {message}</h3>
    </div>
  );
}

function Parent({ message }) {
  return (
    <div>
      <h3>Parent</h3>
      <Child message={message} />
    </div>
  );
}

function GrandParent({ message }) {
  return (
    <div>
      <h3>GrandParent</h3>
      <Parent message={message} />
    </div>
  );
}

function WhyContext() {
  let message = "Hello World";
  return (
    <div>
      <h3>WhyContext</h3>
      <GrandParent message={message} />
    </div>
  );
}

export default WhyContext;
