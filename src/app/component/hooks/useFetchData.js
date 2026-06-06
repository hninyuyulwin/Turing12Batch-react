"use client";
import React, { useEffect, useState } from "react";

function useFetchData(url) {
  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setDatas(json);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);
  return [error, loading, datas];
}

export default useFetchData;
