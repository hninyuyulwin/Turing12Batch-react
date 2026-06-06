"use client";
import React from "react";
import useAuth from "./useAuth";

function Page1() {
  const auth = useAuth();
  return (
    <div>
      {auth && <div>Page 1</div>}
      {!auth && <p>Accessed Denied!</p>}
    </div>
  );
}

function Page2() {
  const auth = useAuth();
  return (
    <div>
      {auth && <div>Page 2</div>}
      {!auth && <p>Accessed Denied!</p>}
    </div>
  );
}

function WhyHocAuth() {
  return (
    <div>
      <Page1 />
      <Page2 />
    </div>
  );
}

export default WhyHocAuth;
