"use client";
import React from "react";
import useRouter from "./useRouter";

function HomePage() {
  const route = useRouter();
  const onClickHandler = (e) => {
    route("/dashboard");
  };
  return (
    <div>
      HomePage
      <button type="button" onClick={onClickHandler}>
        Go to Dashboard
      </button>
    </div>
  );
}

export default HomePage;
