import React, { useEffect, useState } from "react";
import "./ListPictures.scss";
import { CardPicture } from "../card_picture/CardPicture";

export const ListPictures = ({ unsplash, isLoading, updateList }) => {
  const [unsplashData, setunsplashData] = useState([]);
  useEffect(() => {
    if (unsplash instanceof Promise) {
      unsplash.then((r) => setunsplashData(r));
    } else {
      setunsplashData(unsplash);
    }
  }, [unsplash]);

  return (
    <div className="flex_pictures">
      {isLoading ? (
        <div className="sppiner">
          <h1>Cargando...</h1>
        </div>
      ) : unsplashData.length != 0 ? (
        <div className="content_pictures">
          {unsplashData.map((it, index) => (
            <CardPicture key={index} data={it} updateList={updateList}/>
          ))}
        </div>
      ) : (
        <div className="sppiner">
          <h1>No data...</h1>
        </div>
      )}
    </div>
  );
};
