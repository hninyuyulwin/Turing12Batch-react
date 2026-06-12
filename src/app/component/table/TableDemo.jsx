"use client";
import React from "react";
import Table, { TableBody, TableCell, TableHead, TableRow } from "./Table";

const todoList = [
  {
    id: 1,
    candidates: "Wai Yan & Hnin Yu",
    title: "First meet",
    date: "14 Sep, 2024 ",
  },
  {
    id: 2,
    candidates: "Wai Yan & Hnin Yu",
    title: "Second time met he comes BO",
    date: "28 Oct, 2024 ",
  },
  {
    id: 3,
    candidates: "Wai Yan & Hnin Yu",
    title: "Ma Eaint Farewell",
    date: "09 Nov, 2024 ",
  },
  {
    id: 4,
    candidates: "Wai Yan & Hnin Yu",
    title: "He comes my work and give me sweets",
    date: "06 Dec, 2024",
  },
  {
    id: 5,
    candidates: "Wai Yan & Hnin Yu",
    title: "First Anniversary",
    date: "02 Feb, 2025 ",
  },
];

function TableDemo() {
  return (
    <div>
      {/* <h3>TableDemo</h3> */}
      <Table>
        <TableHead>
          <TableRow>
            <TableCell component="th">ID</TableCell>
            <TableCell component="th">Candidates</TableCell>
            <TableCell component="th">Title</TableCell>
            <TableCell component="th">Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {todoList.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.candidates}</TableCell>
              <TableCell>{row.title}</TableCell>
              <TableCell>{row.date}</TableCell>
            </TableRow>
          ))}
          {/* <TableRow>
            <TableCell>1</TableCell>
            <TableCell>Hytisan Uzima</TableCell>
            <TableCell>true</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>2</TableCell>
            <TableCell>Wai Yan Myo</TableCell>
            <TableCell>true</TableCell>
          </TableRow> */}
        </TableBody>
      </Table>
    </div>
  );
}

export default TableDemo;
