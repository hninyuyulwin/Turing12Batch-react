"use client";

import React, { useState } from "react";
import Table, { TableBody, TableCell, TableHead, TableRow } from "./Table";

function toOrderObject(columns) {
  let obj = {};
  columns.forEach((column) => {
    obj[column.field] = true;
  });
  return obj;
}

function sortData(column, rowData, order) {
  let asc = order[column.field];
  let type = "string";

  if (column.type == "number") {
    type = "number";
  }
  if (type == "string") {
    rowData.sort((a, b) => {
      let str1 = a[column.field];
      let str2 = b[column.field];
      if (!str1) {
        str1 = "";
      }
      if (!str2) {
        str2 = "";
      }
      if (asc) {
        return str1.localeCompare(str2);
      } else {
        return str2.localeCompare(str1);
      }
    });
  } else {
    rowData.sort((a, b) => {
      if (asc) {
        return a[column.field] - b[column.field];
      } else {
        return b[column.field] - a[column.field];
      }
    });
  }
}

function DataGrid({ columns, rows }) {
  const fields = columns.map((column) => column.field);

  const [rowData, setRowData] = useState(rows);
  const [order, setOrder] = useState(toOrderObject(columns));

  const onClickHandler = (column) => {
    console.log("Clicked ", column.field);

    sortData(column, rowData, order);
    setRowData([...rowData]);
    setOrder({
      ...order,
      [column.field]: !order[column.field],
    });
  };
  return (
    <div>
      <h3>DataGrid</h3>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <input type="checkbox" name="" id="" />
            </TableCell>
            {columns.map((column) => (
              <TableCell
                style={{ width: column.width }}
                key={column.field}
                onClick={() => onClickHandler(column)}
              >
                {column.headerName} {order[column.field] ? "↓" : "↑"}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rowData.map((row) => (
            <TableRow key={row.id}>
              <TableCell>
                <input type="checkbox" name="" id="" />
              </TableCell>
              {fields.map((field, index) => (
                <TableCell key={index}>{row[field]}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default DataGrid;
