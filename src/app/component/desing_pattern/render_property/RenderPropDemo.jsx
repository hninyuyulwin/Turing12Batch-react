"use client";
import React from "react";
import RenderPropTodo from "./RenderPropTodo";

const initItem = [
  {
    id: "1",
    title: "Task 1",
  },
  {
    id: "2",
    title: "Task 2",
  },
  {
    id: "3",
    title: "Task 3",
  },
];

function RenderPropDemo() {
  return (
    <div>
      <RenderPropTodo
        todos={initItem}
        render={(todo) => <h1 key={todo.id}>{todo.title}</h1>}
      />
      <RenderPropTodo
        todos={initItem}
        render={(todo) => <div key={todo.id}>{todo.title}</div>}
      />
    </div>
  );
}

export default RenderPropDemo;

