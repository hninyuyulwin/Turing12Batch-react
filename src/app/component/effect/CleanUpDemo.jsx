"use client";

import React, { useState } from "react";
import TimerDemo from "./TimerDemo";

function CleanUpDemo() {
  const [showB, setShowB] = useState(true);
  return (
    <div>
      <h3>CleanUpDemo</h3>
      {showB && <TimerDemo />}
      <label htmlFor="">
        <input
          type="checkbox"
          checked={showB}
          onChange={(e) => {
            setShowB(e.target.checked);
          }}
        />
        Render the timer
      </label>
    </div>
  );
}

export default CleanUpDemo;
