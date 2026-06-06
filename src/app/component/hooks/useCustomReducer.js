"use client";
import React, { useState } from "react";

function useCustomReducer(reducer, initState) {
  const [state, setState] = useState(initState);
  function dispatch(action) {
    let newState = reducer(state, action);
    setState(newState);
  }
  return [state, dispatch];
}

export default useCustomReducer;
