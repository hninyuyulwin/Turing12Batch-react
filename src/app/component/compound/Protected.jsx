import React from "react";
import useAuth from "../desing_pattern/hoc/useAuth";

function Protected({ children, render }) {
  const auth = useAuth();
  if (auth) {
    return <div>{children}</div>;
  } else {
    return <div>{render()}</div>;
  }
}

export default Protected;
