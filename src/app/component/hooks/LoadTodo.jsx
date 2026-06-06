"use client";

import React, { useEffect, useState } from "react";

function LoadTodo() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => {
        setTodos(json);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);
  return (
    <div>
      <h3>LoadTodo</h3>
      {loading && !error && <div>Loading...</div>}
      {error && <div>Something went wrong!</div>}
      {todos.map((td) => (
        <div key={td.id}>{td.title}</div>
      ))}
    </div>
  );
}

export default LoadTodo;
