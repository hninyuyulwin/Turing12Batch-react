"use client";
import React, { useContext, useReducer } from "react";
import { TodoEntry, TodoItem } from "../TodoList";
import { TodoContext } from "./TodoContext";


let id = 4;
function newTodo(text) {
  return {
    id: id++,
    title: text,
  };
}

function TodoWithContext() {
  const { todos, dispatch } = useContext(TodoContext);

  const addTodo = (text) => {
    let todo = newTodo(text);
    dispatch({
      type: "ADD_TODO",
      payload: todo,
    });
  };

  const updateTodo = (todo) => {
    dispatch({
      type: "UPDATE_TODO",
      payload: todo,
    });
  };

  const deleteTodo = (todo) => {
    dispatch({
      type: "DELETE_TODO",
      payload: todo,
    });
  };

  return (
    <div>
      <h3>TodoWithContext</h3>
      <TodoEntry addTodo={addTodo} />
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          updateTodo={updateTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </div>
  );
}

export default TodoWithContext;
