import React from "react";

function Dashboard({ role }) {
  // if (role == "admin") {
  //   return <Admin />;
  // } else {
  //   return <User />;
  // }

  // return <>{role === "admin" ? <Admin /> : <User />}</>;
  let Component;
  if (role === "admin") {
    Component = Admin;
  } else {
    Component = User;
  }
  return <Component />;
}

function Admin() {
  return <h3>Admin Dashboard</h3>;
}

function User() {
  return <h3>User Dashboard</h3>;
}

export default Dashboard;
 