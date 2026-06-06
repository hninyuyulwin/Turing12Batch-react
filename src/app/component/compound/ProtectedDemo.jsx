"use client";
import React from "react";
import Protected from "./Protected";

function Page1() {
  return <div>Authenticated Page 1</div>;
}

function ProtectedDemo() {
  return (
    <div>
      <Protected render={() => <h3>Access Denied!</h3>}>
        <Page1 />
      </Protected>
    </div>
  );
}

export default ProtectedDemo;
