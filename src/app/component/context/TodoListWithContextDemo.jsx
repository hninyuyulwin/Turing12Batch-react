"use client";

import React, { useContext, useReducer } from "react";
import { TodoContext } from "./TodoContext";
import TodoListWithContext from "./TodoListWithContext";
import { todoReducer } from "../reducer/TodoListReducer";
import TodoCount from "./TodoCount";

const initState = [
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

function TodoListWithContextDemo() {
  const [todos, dispatch] = useReducer(todoReducer, initState);

  const todoContext = {
    todos: todos,
    dispatch,
  };
  return (
    <>
      <TodoContext.Provider value={todoContext}>
        <TodoCount />
        <TodoListWithContext />
      </TodoContext.Provider>
    </>
  );
}

export default TodoListWithContextDemo;
