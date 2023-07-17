import React, { useState } from "react";
import "./CardPicture.scss";
import toast from "react-hot-toast";
import { deleteUnsplash, getUnsplash } from "../../helpers/UnsPlashRest";
export const CardPicture = ({ data, updateList }) => {
  const { title, imageURL, cod_unsplash } = data;
  const on_deleteUnsplash = async (cod_unsplash) => {
    await deleteUnsplash(cod_unsplash)
      .then((r) => {
        toast.success(r.data.msg);
      })
      .catch((error) => {
        toast.error(error.data.msg);
      });
      const newData = await getUnsplash();
      updateList(newData);
  };
  return (
    <div className="content_picture_card">
      <img src={imageURL} alt="" srcSet=""/>
      <div className="overlay">
        <button
          className="button_hover"
          type="button"
          onClick={() => {
            on_deleteUnsplash(cod_unsplash);
          }}
        >
          delete
        </button>
        <p className="text_hover">{title}</p>
      </div>
    </div>
  );
};
