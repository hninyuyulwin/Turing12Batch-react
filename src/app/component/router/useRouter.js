import React from "react";

function useRouter() {
  return function route(path) {
    console.log("route : ", path);
    history.pushState({ page: path }, "About page", path);
    var e = new CustomEvent("routeChange");
    e.path = path;
    window.dispatchEvent(e);
  };
}

export default useRouter;
