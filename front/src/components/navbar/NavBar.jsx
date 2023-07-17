import React, { useState } from "react";
import logo_img from "./../../assets/my_unsplash_logo.svg";
import search_icon from "./../../assets/search_icon.svg";
import "./NavBar.scss";
import { ModalComponent } from "../modal/ModalComponent";
import { UnsPlashForm } from "../../form/UnsPlashForm/UnsPlashForm";
export const NavBar = () => {
  const [isActive, setisActive] = useState(false);
  const onOpen = () => {
    setisActive(!isActive);
  };
  const onClose = () => {
    setisActive(!isActive);
  };
  return (
    <>
      <div className="nav_flex">
        <div className="nav_flex_items">
          <img src={logo_img} alt="" srcSet="" />
          <div>
            <input
              className="input_search"
              type="text"
              name=""
              id=""
              placeholder="Search by name"
            />
            <img
              src={search_icon}
              alt="no-image"
              srcSet=""
              className="icon_search"
            />
          </div>
        </div>
        <button className="button_add" type="button" onClick={onOpen}>
          Add a photo
        </button>
      </div>
      <ModalComponent active={isActive} onClose={onClose}>
        <UnsPlashForm onClose={onClose} />
      </ModalComponent>
    </>
  );
};
