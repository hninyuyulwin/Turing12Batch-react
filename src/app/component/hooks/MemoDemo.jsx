"use client";
import React, { useMemo, useState } from "react";

function factorial(n) {
  console.log("Compute factorial : ", n);
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

function MemoDemo() {
  const [n, setN] = useState(0);
  const fact = useMemo(() => factorial(n), [n]);
  return (
    <div>
      <h3>UseMemoDemo</h3>
      <input type="text" value={n} onChange={(e) => setN(e.target.value)} />
      <h2>
        Factorial of {n} is {fact}
      </h2>
    </div>
  );
}

export default MemoDemo;
