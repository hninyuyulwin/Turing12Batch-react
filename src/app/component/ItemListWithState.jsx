"use client";
import React, { useState } from "react";
let id = 5;
function ItemListWithState() {
  const [item, setItem] = useState(["apple", "orange", "banana", "kiwi"]);

  const addItem = () => {
    let itemName = "Item " + id;
    id++;
    setItem([...item, itemName]);
  };

  const deleteItem = (text) => {
    // console.log("delete item ", text);
    setItem(item.filter((i) => i !== text));
  };

  const updateItem = (text) => {
    setItem(item.map((item) => (item == text ? `${text} updated` : item)));
  };

  return (
    <div>
      <h1>Item List Render</h1>
      <button type="{button}" onClick={addItem}>
        Add Item
      </button>
      {item.map((i, index) => (
        <div key={index}>
          {i}
          <button type="{button}" onClick={() => deleteItem(i)}>
            Delete Item
          </button>
          &nbsp; &nbsp;
          <button type="{button}" onClick={() => updateItem(i)}>
            Update Item
          </button>
        </div>
      ))}
    </div>
  );
}

export default ItemListWithState;
