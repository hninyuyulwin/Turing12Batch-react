"use client";

import React, { useContext, useReducer } from "react";
import { TodoContext } from "./TodoContext";

function TodoCount() {
  const { todos, dispatch } = useContext(TodoContext);
  return <div>Todo Count {todos.length}</div>;
}

export default TodoCount;
