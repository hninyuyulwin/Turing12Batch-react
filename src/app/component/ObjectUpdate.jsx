"use client";
import React, { useState } from "react";

function ObjectUpdate() {
  const [person, setPerson] = useState({
    name: "John",
    age: 30,
  });

  const updateAge = () => {
    setPerson({ ...person, age: person.age + 3 });
  };

  return (
    <div>
      <h1>Object Update</h1>
      Name : {person.name} Age - {person.age}
      <button type="{button}" onClick={updateAge}>
        Update Person Age
      </button>
    </div>
  );
}

export default ObjectUpdate;
