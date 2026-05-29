"use client";
import "./tab.css";
import React, { act, useState } from "react";

function Tabs({ headers, children }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const tabHandlerClick = (index) => {
    setActiveIndex(index);
  };
  return (
    <div>
      {headers.map((header, index) => (
        <span
          className={`tab-header ${activeIndex === index ? "active" : ""}`}
          key={index}
          onClick={() => tabHandlerClick(index)}
        >
          {header}
        </span>
      ))}
      <div className="tab-content">{children[activeIndex]}</div>
    </div>
  );
}

export default Tabs;
