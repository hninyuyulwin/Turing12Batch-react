"use client";
import React, { useState } from "react";

function LoginForm() {
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");

  const [form, setForm] = useState({
    username,
    password,
  });

  const usernameOnChange = (e) => {
    setUsername(e.target.value);
  };

  const passwordOnChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    console.log();
  };

  return (
    <div>
      <h2>Login Form</h2>
      <div>
        <label htmlFor="">Username</label>
        <input type={"text"} value={username} onChange={usernameOnChange} />
      </div>
      <div>
        <label htmlFor="">Password</label>
        <input type={"password"} value={password} onChange={passwordOnChange} />
      </div>
      <button type={"button"} onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}

export default LoginForm;
