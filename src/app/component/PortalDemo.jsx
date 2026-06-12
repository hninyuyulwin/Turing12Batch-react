"use client";

import React from "react";
import { createPortal } from "react-dom";

function ModalDialog() {
  return (
    <div>
      <p>This is a Modal Dialog</p>
    </div>
  );
}

function PortalDemo() {
  return (
    <div style={{ border: "1px solid #fff", padding: "10px", margin: "10px" }}>
      <h3>Portal Demo</h3>
      {createPortal(<ModalDialog />, document.body)}
    </div>
  );
}

export default PortalDemo;

