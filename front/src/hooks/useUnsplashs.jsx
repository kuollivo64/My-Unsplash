import React, { useEffect, useState } from "react";
import { getUnsplash } from "../helpers/UnsPlashRest";

export const useUnsplashs = () => {
  const [unsplash, setunsplash] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  useEffect(() => {
    getUnsplash()
      .then((r) => {
        setunsplash(r);
        setisLoading(false);
      })
      .catch((error) => {
        setunsplash([]);
        setisLoading(false);
        console.log(error);
      });
  }, []);

  return {
    unsplash, isLoading, setisLoading, setunsplash
  };
};
