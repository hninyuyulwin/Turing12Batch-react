"use client";
import React, { useReducer } from "react";
import { TodoEntry, TodoItem } from "../TodoList";

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

export function todoReducer(state, action) {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.payload];
    case "DELETE_TODO":
      return state.filter((todo) => todo.id !== action.payload.id);
    case "UPDATE_TODO":
      return state.map((todo) =>
        todo.id == action.payload.id ? action.payload : todo,
      );
  }
}

let id = 4;
function newTodo(text) {
  return {
    id: id++,
    title: text,
  };
}

function TodoListReducer() {
  const [todos, dispatch] = useReducer(todoReducer, initState);

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
      <h3>TodoListReducer</h3>
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

export default TodoListReducer;
