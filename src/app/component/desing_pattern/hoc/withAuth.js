import React from "react";
import useAuth from "./useAuth";

function withAuth(Component) {
  return function (props) {
    const auth = useAuth();
    if (auth) {
      return <Component {...props} />;
    } else {
      return <h1>Accessed Denied!</h1>;
    }
  };
}

export default withAuth;
