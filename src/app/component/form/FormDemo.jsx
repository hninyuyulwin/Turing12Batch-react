"use client";
import React, { useState } from "react";

function FormDemo() {
  const [todo, setTodo] = useState("");

  const onChange = (e) => {
    setTodo(e.target.value);
  };

  const clear = () => {
    setTodo("");
  };
  return (
    <div>
      <div>New Todo Text</div>
      <p>{todo}</p>
      <input type={"text"} value={todo} onChange={onChange} />
      <button type={"button"} onClick={clear}>
        Clear
      </button>
    </div>
  );
}

export default FormDemo;
