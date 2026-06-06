"use client";
import React, { useEffect, useState } from "react";
import useRouter from "./useRouter";

function Router({ routes }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const route = useRouter();

  useEffect(() => {
    console.log("Register pop state");
    window.addEventListener("routeChange", (event) => {
      console.log("popstate event:", event);
      let path = event.path;
      let index = 0;
      for (let i = 0; i < routes.length; i++) {
        if (routes[i].path === path) {
          index = i;
          break;
        }
      }
      setActiveIndex(index);
    });
  }, []);

  useEffect(() => {
    route(routes[0].path);
  }, []);

  const routeClickHandler = (index) => {
    setActiveIndex(index);
  };
  return (
    <div>
      <h3>Router Component</h3>
      <ol>
        {routes.map((route, index) => (
          <li key={index} onClick={() => routeClickHandler(index)}>
            {route.label}
          </li>
        ))}
      </ol>
      <div>{routes[activeIndex].component}</div>
    </div>
  );
}

export default Router;
