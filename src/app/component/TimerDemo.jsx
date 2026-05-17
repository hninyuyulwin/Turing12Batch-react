"use client";
import React, { useState } from "react";

function Timer({ time }) {
  return (
    <div>
      <h1>{time.toLocaleTimeString()}</h1>
    </div>
  );
}

const TimerDemo = () => {
  const [now, setNow] = useState(new Date());

  setInterval(() => {
    setNow(new Date());
  }, 1000);

  return (
    <div>
      <Timer time={now} />
    </div>
  );
};

export default TimerDemo;
