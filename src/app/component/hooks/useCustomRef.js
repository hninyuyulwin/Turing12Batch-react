"use client";
import React, { useState } from "react";

function useCustomRef(initValue) {
  const [state] = useState({
    current: initValue,
  });
  return state;
}

export default useCustomRef;
