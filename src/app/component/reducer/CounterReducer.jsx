"use client";
import React, { useReducer } from "react";

function counterReducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + 1,
      };
    case "DECREMENT":
      return {
        count: state.count - 1,
      };
  }
}

const initState = {
  count: 0,
};

function CounterReducer() {
  const [state, dispatch] = useReducer(counterReducer, initState);

  const inc = () => {
    dispatch({
      type: "INCREMENT",
    });
  };

  const dec = () => {
    dispatch({
      type: "DECREMENT",
    });
  };
  return (
    <div>
      CounterReducer
      <div>
        <button
          type="button"
          style={{ marginRight: "2px", padding: "3px" }}
          onClick={inc}
        >
          +
        </button>
        <span>{state.count}</span>
        <button
          type="button"
          style={{ marginLeft: "2px", padding: "3px" }}
          onClick={dec}
        >
          -
        </button>
      </div>
    </div>
  );
}

export default CounterReducer;
