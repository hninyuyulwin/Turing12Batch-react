"use client";
import React from "react";
import withAuth from "./withAuth";

function Page1() {
  return <div>Page 1</div>;
}

function Page2() {
  return <div>Page 2</div>;
}

const AuthPage1 = withAuth(Page1);

function AuthDemo() {
  return (
    <div>
      <AuthPage1 />
      <Page1 />
      <Page2 />
    </div>
  );
}

export default AuthDemo;
