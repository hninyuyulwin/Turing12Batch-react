"use client";
import React, { useState } from "react";
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

export function TodoItem({ todo, updateTodo, deleteTodo }) {
  const [todoText, setTodoText] = useState(todo.title);
  const [edit, setEdit] = useState(false);

  const onEditHandler = () => {
    setEdit(!edit);
    if (edit) {
      updateTodo({
        ...todo,
        title: todoText,
      });
    }
  };

  const onDeleteHandler = () => {
    deleteTodo(todo);
  };
  return (
    <div>
      {!edit ? (
        todoText
      ) : (
        <input
          type="text"
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
        />
      )}
      <button type="button" onClick={onEditHandler}>
        {edit ? "Save" : "Edit "}
      </button>
      &nbsp;&nbsp;
      <button type="button" onClick={onDeleteHandler}>
        Delete
      </button>
    </div>
  );
}

export function TodoEntry({ addTodo }) {
  const [todoText, setTodoText] = useState("");
  return (
    <div>
      <div>
        <input
          type="text"
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
        />
        <button onClick={() => addTodo(todoText)}>Add Todo</button>
      </div>
    </div>
  );
}

let id = 4;
function newTodo(text) {
  return {
    id: id++,
    title: text,
  };
}

function TodoList() {
  const [todos, setTodo] = useState(initItem);

  const addTodo = (todoText) => {
    let todo = newTodo(todoText);
    setTodo([...todos, todo]);
  };
  const updateTodo = (todo) => {
    setTodo(todos.map((td) => (td.id === todo.id ? todo : td)));
  };

  const deleteTodo = (todo) => {
    setTodo(todos.filter((td) => td.id !== todo.id));
  };
  return (
    <div>
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

export default TodoList;
