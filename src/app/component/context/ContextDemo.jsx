"use client";

import React, { useContext, useState } from "react";
import { ThemeContext } from "./ThemeContext";

function Child() {
  let theme = useContext(ThemeContext);

  return (
    <div style={{ color: theme.color }}>
      <h4>Child</h4>
    </div>
  );
}
function Parent() {
  return (
    <div>
      <h4>Parent</h4>
      <Child />
    </div>
  );
}
function GrandParent() {
  return (
    <div>
      <h4>GrandParent</h4>
      <Parent />
    </div>
  );
}

function ContextDemo() {
  const [theme, setTheme] = useState({ color: "yellow" });

  const changeTheme = () => {
    setTheme({ color: "red" });
  };
  return (
    <div>
      <h2>ContextDemo</h2>
      <button type="button" onClick={changeTheme}>
        Change Theme
      </button>
      <ThemeContext.Provider value={theme}>
        <GrandParent />
      </ThemeContext.Provider>
    </div>
  );
}

export default ContextDemo;
