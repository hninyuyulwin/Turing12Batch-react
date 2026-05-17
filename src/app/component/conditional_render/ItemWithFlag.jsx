import React from "react";

function ItemWithFlag({ flag, name }) {
  return (
    <>
      {flag && "😁"}
      {name}
    </>
  );
}

export default ItemWithFlag;
