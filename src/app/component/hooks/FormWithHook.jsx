"use client";
import React, { useState } from "react";
import useFormInput from "./useFormInput";

function FormWithHook() {
  const usernameInput = useFormInput("");
  const passwordInput = useFormInput("");

  const handleLogin = () => {
    console.log(
      "Username : ",
      usernameInput.value,
      "Password : ",
      passwordInput.value,
    );
  };

  return (
    <div>
      <h2>Login Form</h2>
      <div>
        <label htmlFor="">Username</label>
        <input type={"text"} {...usernameInput} />
      </div>
      <div>
        <label htmlFor="">Password</label>
        <input type={"password"} {...passwordInput} />
      </div>
      <button type={"button"} onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}

export default FormWithHook;
