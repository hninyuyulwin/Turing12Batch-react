"use client";
import React from "react";

function RenderPropTodo({
  todos,
  render, // render is function , todos is item
}) {
  return (
    <div>
      <h3>RenderPropTodo</h3>
      {todos.map((todo) => render(todo))}
    </div>
  );
}

export default RenderPropTodo;

