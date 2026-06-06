import React, { useEffect } from "react";

function withLogger(Component) {
  return function (props) {
    useEffect(() => {
      console.log(`${Component.name} rendered`);
    }, []);
    return <Component {...props} />;
  };
}

export default withLogger;
