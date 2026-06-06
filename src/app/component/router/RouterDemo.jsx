"use client";
import React from "react";
import HomePage from "./HomePage";
import DashboardPage from "./DashboardPage";
import Router from "./Router";

function RouterDemo() {
  const routes = [
    {
      path: "/home",
      label: "Home",
      component: <HomePage />,
    },
    {
      path: "/dashboard",
      label: "Dashboard",
      component: <DashboardPage />,
    },
  ];
  return (
    <div>
      <Router routes={routes} />
    </div>
  );
}

export default RouterDemo;
