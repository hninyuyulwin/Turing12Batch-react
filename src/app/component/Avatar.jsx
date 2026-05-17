import React from "react";
import Profile from "./Profile";

function Avatar({ image, name, size }) {
  return (
    <>
      {name}
      <Profile image={image} name={name} size={size} />
    </>
  );
}

export default Avatar;
