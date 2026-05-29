"use client";

import React, { useEffect, useState } from "react";

function TimerDemo() {
  const [count, setCount] = useState(0);
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    console.log("Set interval registered");

    let timer = setInterval(() => {
      setNow(new Date());
      console.log("set now run");
    }, 1000);
    
    return () => {
      console.log("Cleanup from effect");
      clearInterval(timer);
    };
  }, []);

  // console.log("Render");

  return (
    <div>
      <h3>TimerDemo</h3>
      <p>{now.toLocaleTimeString()}</p>
      <h3>{count}</h3>
      <button type="button" onClick={() => setCount(count + 1)}>
        Add
      </button>
    </div>
  );
}

export default TimerDemo;
