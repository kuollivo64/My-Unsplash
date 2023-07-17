import React from "react";
import "./ListPictures.scss";
import { CardPicture } from "../card_picture/CardPicture";
import { useUnsplashs } from "../../hooks/useUnsplashs";

export const ListPictures = ({ unsplash, isLoading }) => {
  return (
    <div className="flex_pictures">
      {isLoading ? (
        <div className="sppiner">
          <h1>Cargando...</h1>
        </div>
      ) : unsplash ? (
        <div className="content_pictures">
          {unsplash.map((it, index) => (
            <CardPicture key={index} data={it} />
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
