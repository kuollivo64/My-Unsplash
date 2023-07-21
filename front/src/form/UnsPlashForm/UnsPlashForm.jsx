import React, { useEffect, useState } from "react";
import { getUnsplash, postUnsplash } from "../../helpers/UnsPlashRest";
import toast from "react-hot-toast";
import "./UnsPlashForm.scss";

export const UnsPlashForm = ({ onClose, updateList }) => {
  const [formData, setformData] = useState({
    title: "",
    imageurl: "",
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
      isactiveunsplash: true,
    };
    await postUnsplash(data)
      .then((r) => {
        toast.success("Successfully add unsplash!");
      })
      .catch((error) => {
        toast.error(error.message.data.msg);
      });

    const newData = await getUnsplash();
    updateList(newData);

    setformData({
      title: "",
      imageurl: "",
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
          id="imageurl"
          name="imageurl"
          value={formData.imageurl}
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
