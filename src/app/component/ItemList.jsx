import React from "react";

function ItemList() {
  let items = ["Apple", "Orange", "Lemon", "Banana"];
  return (
    <>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ItemList;

