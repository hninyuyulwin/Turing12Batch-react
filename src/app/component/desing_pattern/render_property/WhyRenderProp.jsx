import React from "react";

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

function TodoList({ todos }) {
  return (
    <div>
      {todos.map((item) => (
        <div key={item.id}>{item.title}</div>
      ))}
    </div>
  );
}

function WhyRenderProp() {
  return (
    <div>
      <h3>WhyRenderProp</h3>
      <TodoList todos={initItem} />
    </div>
  );
}

export default WhyRenderProp;
