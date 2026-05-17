import React from "react";
import "./border.css";

function Border({ children }) {
  return <div className="bordered">{children}</div>;
}

export default Border;
