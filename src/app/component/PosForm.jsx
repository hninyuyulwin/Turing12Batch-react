"use client";
import React, { useState } from "react";

function PosForm() {
  const [price, setPrice] = useState(0);
  const [qty, setQty] = useState(0);

  return (
    <form action="">
      <div>
        <label htmlFor="">Price</label>
        <input
          type="text"
          value={price}
          name=""
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="">Qty</label>
        <input
          type="text"
          value={qty}
          onChange={(e) => setQty(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="">Total</label>
        <p>{price * qty}</p>
      </div>
    </form>
  );
}

export default PosForm;
