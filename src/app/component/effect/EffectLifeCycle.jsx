"use client";

import React, { useEffect, useState } from "react";

function EffectLifeCycle() {
  const [count, setCount] = useState(0);
  const [another, setAnother] = useState(0);

  useEffect(() => {
    console.log("Use Effect 1 fire1 set count info to backend");
  }, [count]);

  useEffect(() => {
    console.log("Use Effect 2 fire2");
  }, [another]);

  useEffect(() => {
    console.log("Use Effect 3 fire both change");
  }, [count, another]);

  console.log("Render ");

  return (
    <div>
      <h4>EffectLifeCycle</h4>
      <button type="button" onClick={() => setCount(count + 1)}>
        +
      </button>
      &nbsp;
      <span>{count}</span>&nbsp;
      <button type="button" onClick={() => setCount(count - 1)}>
        -
      </button>
      <br />
      <button type="button" onClick={() => setAnother(another + 1)}>
        Update Another
      </button>
    </div>
  );
}

export default EffectLifeCycle;
