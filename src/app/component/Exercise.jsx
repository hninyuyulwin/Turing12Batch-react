"use client";

import classNames from "classnames";
import React, { useEffect, useState } from "react";

/*
function SearchFilter({ onChange }) {
  const [filter, setFilter] = useState("");
  const [activeStock, setActiveStock] = useState(false);

  const filterOnChange = (e) => {
    setFilter(e.target.value);
    onChange({
      filter: e.target.value,
      activeStock,
    });
  };

  const filterActiveStock = (e) => {
    setActiveStock(e.target.checked);
    onChange({ filter, activeStock: e.target.checked });
  };

  return (
    <div>
      <div>
        <input
          type="text"
          value={filter}
          onChange={filterOnChange}
          style={{
            padding: "15px",
            borderRadius: "6px",
            margin: "10px",
            width: "80%",
          }}
          placeholder="Search..."
        />
      </div>
      <div>
        <input
          type="checkbox"
          checked={activeStock}
          onChange={filterActiveStock}
        />
        Only Show Product in Stock
      </div>
    </div>
  );
}

function groupProductTable(products) {
  let group = {};
  for (const product of products) {
    if (group[product.category]) {
      group[product.category].push(product);
    } else {
      group[product.category] = [product];
    }
  }
  return group;
}

function ProductTable({ products }) {
  let group = groupProductTable(products);
  let category = Object.keys(group);
  return (
    <div>
      <div className="product-name">Name</div>
      <div className="product-price">Price</div>
      {category.map((c, index) => (
        <ProductCategoryRow key={index} products={group[c]} />
      ))}
    </div>
  );
}

function ProductCategoryRow({ products }) {
  let category = products[0].category;
  return (
    <div>
      <h3 className="product-category">{category}</h3>
      <FilterProductRow products={products} />
    </div>
  );
}

function FilterProductRow({ products }) {
  return (
    <div>
      {products.map((product, index) => (
        <div key={index}>
          <div
            className={classNames("product-name", {
              "product-instock": !product.stocked,
            })}
          >
            {product.name}
          </div>
          <div
            className={classNames("product-price", {
              "product-instock": !product.stocked,
            })}
          >
            {product.price}
          </div>
        </div>
      ))}
    </div>
  );
}

function Exercise() {
  const initialData = [
    { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
    { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
    { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
    { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
    { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
    { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
  ];

  const [products, setProducts] = useState(initialData);

  const onChange = (filterData) => {
    console.log("Search filter : ", filterData);
    let data = initialData;
    if (filterData.filter) {
      data = data.filter((item) => item.name.includes(filterData.filter));
    }
    if (filterData.activeStock) {
      data = data.filter((item) => item.stocked);
    }
    setProducts(data);
  };

  return (
    <div>
      <h3>Filterable ProductTable Exercise</h3>
      <SearchFilter onChange={onChange} />
      <ProductTable products={products} />
    </div>
  );
}
*/

/*
const iniItem = [
  {
    id: "1",
    title: "Task 1",
  },
  {
    id: "2",
    title: "Task 2",
  },
  {
    id: "3",
    title: "Task 3",
  },
];

function TodoItem({ todo, updateTodo, deleteTodo }) {
  const [todoText, setTodoText] = useState(todo.title);
  const [edit, setEdit] = useState(false);

  const onUpdateHandler = () => {
    setEdit(!edit);
    if (edit) {
      updateTodo({
        ...todo,
        title: todoText,
      });
    }
  };

  const onDeleteHandler = () => {
    deleteTodo(todo);
  };

  return (
    <div>
      {!edit ? (
        todoText
      ) : (
        <input
          type="text"
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
        />
      )}
      <button type="button" onClick={onUpdateHandler}>
        {edit ? "Save" : "Edit"}
      </button>
      &nbsp; &nbsp;
      <button type="button" onClick={onDeleteHandler}>
        Delete
      </button>
    </div>
  );
}

function TodoEntry({ addTodo }) {
  const [todoText, setTodoText] = useState("");

  return (
    <div>
      <input
        type="text"
        value={todoText}
        style={{ padding: "5px", margin: "8px" }}
        onChange={(e) => setTodoText(e.target.value)}
      />
      <button
        type="button"
        style={{ padding: "5px", margin: "8px" }}
        onClick={() => addTodo(todoText)}
      >
        Add Todo
      </button>
    </div>
  );
}

let id = 4;
function newTodo(text) {
  return {
    id: id++,
    title: text,
  };
}

function Exercise() {
  const [todos, setTodos] = useState(iniItem);

  const addTodo = (todoText) => {
    let todo = newTodo(todoText);
    setTodos([...todos, todo]);
  };

  const updateTodo = (todo) => {
    setTodos(todos.map((td) => (td.id === todo.id ? todo : td)));
  };

  const deleteTodo = (todo) => {
    setTodos(todos.filter((td) => td.id !== todo.id));
  };

  return (
    <div>
      <TodoEntry addTodo={addTodo} />
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          updateTodo={updateTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </div>
  );
}
*/
function Exercise() {
  const [count, setCount] = useState(0);
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    console.log("Set interval register!");

    setInterval(() => {
      setNow(new Date());
      console.log("Set now run");
    }, 1000);
  }, []);
  console.log("Render");

  return (
    <div>
      <h3>Timer Demo</h3>
      <p>{now.toLocaleTimeString()}</p>
      <h4>{count}</h4>
      <button type="button" onClick={() => setCount(count + 1)}>
        Add
      </button>
    </div>
  );
}
export default Exercise;
