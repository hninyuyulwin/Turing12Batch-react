import React from "react";
import "./profile.css";
function Profile({ image, name, size }) {
  let profileImage =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTanjiSPZBmAzp05yBDati9CzNkLNM-ZgG3Rg&s";
  let description = "Lavender Image";

  // let profile = {
  //   image: profileImage,
  //   description: description,
  // };
  let date = new Date();
  return (
    <>
      <img
        className="profile"
        src={image}
        alt={name}
        width={size}
        height={size}
      />
      <p>{date.toString()}</p>
    </>
  );
}

export default Profile;
