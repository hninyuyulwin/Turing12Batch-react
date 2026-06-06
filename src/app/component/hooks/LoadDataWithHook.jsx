"use client";
import React from "react";
import useFetchData from "./useFetchData";

function LoadDataWithHook() {
  const [error, loading, datas] = useFetchData(
    "https://jsonplaceholder.typicode.com/users",
  );
  return (
    <div>
      <h3>LoadDataWithHook</h3>
      {loading && !error && <div>Loading...</div>}
      {error && <div>Something Went Wrong!</div>}
      {datas.map((dt) => (
        <div key={dt.id}>{dt.name}</div>
      ))}
    </div>
  );
}

export default LoadDataWithHook;
