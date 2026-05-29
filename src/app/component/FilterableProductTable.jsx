"use client";

import React, { useState } from "react";
import "./FilterableProductTable.css";
import classNames from "classnames";

function SearchBar({ onChange }) {
  const [filter, setFilter] = useState("");
  const [inStock, setInStock] = useState(false);

  const filterOnChange = (e) => {
    setFilter(e.target.value);
    onChange({ filter: e.target.value, inStock });
  };

  const inStockOnChange = (e) => {
    setInStock(e.target.checked);
    onChange({ filter, inStock: e.target.checked });
  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Search..."
          value={filter}
          onChange={filterOnChange}
          style={{ padding: "6px", margin: "10px", width: "70%" }}
        />
      </div>
      <div>
        <input type="checkbox" checked={inStock} onChange={inStockOnChange} />{" "}
        Only show product in stock
      </div>
    </div>
  );
}

function groupByCategory(products) {
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
  let group = groupByCategory(products);
  let category = Object.keys(group);
  console.log("Category : ", category);

  return (
    <div>
      <div className={"product-name"}>Name </div>
      <div className={"product-price"}>Price </div>

      {category.map((c, index) => (
        <ProductCategoryRow products={group[c]} key={index} />
      ))}
    </div>
  );
}

function ProductCategoryRow({ products }) {
  let category = products[0].category;
  return (
    <div>
      <h3 className={"product-category"}>{category}</h3>

      <FilterProductRow products={products} />
    </div>
  );
}

function FilterProductRow({ products }) {
  return (
    <div>
      {products.map((prod, index) => (
        <div key={index}>
          <span
            className={classNames("product-name", {
              "product-instock": !prod.stocked,
            })}
          >
            {prod.name}
          </span>
          <span
            className={classNames("product-price", {
              "product-instock": !prod.stocked,
            })}
          >
            {prod.price}
          </span>
        </div>
      ))}
    </div>
  );
}

function FilterableProductTable() {
  const initialData = [
    { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
    { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
    { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
    { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
    { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
    { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
  ];

  const [products, setProducts] = useState(initialData);

  const searchBarChange = (filterData) => {
    console.log("Search bar change : ", filterData);
    let data = initialData;
    if (filterData.filter) {
      data = data.filter((item) => item.name.includes(filterData.filter));
    }
    if (filterData.inStock) {
      data = data.filter((item) => item.stocked);
    }
    setProducts(data);
  };

  return (
    <div>
      <h3>FilterableProductTable</h3>
      <SearchBar onChange={searchBarChange} />
      <ProductTable products={products} />
    </div>
  );
}

export default FilterableProductTable;
