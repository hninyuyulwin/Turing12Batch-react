"use client";
import React, { useContext, useReducer } from "react";
import { todoReducer } from "../reducer/TodoListReducer";
import { TodoContext } from "./TodoContext";
import TodoWithContext from "./TodoWithContext";
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

function TodoContextDemo() {
  const [todos, dispatch] = useReducer(todoReducer, initState);
  const todoContext = {
    todos: todos,
    dispatch,
  };
  return (
    <>
      <TodoContext.Provider value={todoContext}>
        <TodoCount />
        <TodoWithContext />
      </TodoContext.Provider>
    </>
  );
}

export default TodoContextDemo;
