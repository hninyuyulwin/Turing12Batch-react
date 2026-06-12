"use client";
import React from "react";
import "./Table.css";

export function TableHead({ children }) {
  return <thead>{children}</thead>;
}

export function TableRow({ children }) {
  return <tr>{children}</tr>;
}

export function TableCell({ children, component, ...props }) {
  if (component == "th") {
    return <th {...props}>{children}</th>;
  } else {
    return <td {...props}>{children}</td>;
  }
}

export function TableBody({ children }) {
  return <tbody>{children}</tbody>;
}

function Table({ children, ...props }) {
  return (
    <table {...props} className={"cus-table"}>
      {children}
    </table>
  );
}

export default Table;
