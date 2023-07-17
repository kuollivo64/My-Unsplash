import React, { useState } from "react";
import "./ModalComponent.scss";
import iconClose from "./../../assets/close-md-svgrepo-com.svg";
export const ModalComponent = ({ active, onClose, children }) => {
  return (
    <div className="modal_content" style={!active ? { display: "none" } : null}>
      <div className="modal_card">
        <div className="header_flex">
          <p className="modal_title">Add a new photo</p>
          <button className="iconClose" onClick={onClose}>
            <img src={iconClose} alt="" srcSet="" width={30} />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};
