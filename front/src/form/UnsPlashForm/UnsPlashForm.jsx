import React, { useState } from "react";
import toast from "react-hot-toast";
import "./UnsPlashForm.scss";
import { postUnsplash } from "../../helpers/UnsPlashRest";
import { useUnsplashs } from "../../hooks/useUnsplashs";

export const UnsPlashForm = ({ onClose }) => {
  const { unsplash } = useUnsplashs();
  const [formData, setformData] = useState({
    title: "",
    imageURL: "",
  });

  const handleChange = (e) => {
    setformData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      ...formData,
      cod_unsplash: (unsplash.length + 2).toString(),
      active: true,
      isactiveunsplash: true,
    };
    await postUnsplash(data)
      .then((r) => {
        toast.success("Successfully add unsplash!");
      })
      .catch((error) => {
        toast.error(error.message);
      });

    setformData({
      title: "",
      imageURL: "",
    });
    onClose();
  };

  return (
    <form className="form_content" onSubmit={handleSubmit}>
      <div className="inputForm">
        <label htmlFor="title">Label</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          required
          placeholder="Suspendisse elit massa"
          onChange={handleChange}
        />
      </div>
      <div className="inputForm">
        <label htmlFor="username">Photo URL:</label>
        <input
          type="text"
          id="imageURL"
          name="imageURL"
          value={formData.imageURL}
          required
          placeholder="https://images.unsplash.com/photo-1584395630827-860eee694d7b?ixlib=r..."
          onChange={handleChange}
        />
      </div>
      <div className="groupButton">
        <button className="cancel_button" type="button" onClick={onClose}>
          Cancel
        </button>
        <button className="succes_button" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};
