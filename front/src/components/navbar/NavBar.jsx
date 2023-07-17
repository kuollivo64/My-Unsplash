import React, { useEffect, useState } from "react";
import logo_img from "./../../assets/my_unsplash_logo.svg";
import search_icon from "./../../assets/search_icon.svg";
import { ModalComponent } from "../modal/ModalComponent";
import { UnsPlashForm } from "../../form/UnsPlashForm/UnsPlashForm";
import { searchUnsplash } from "../../helpers/UnsPlashRest";
import { ListPictures } from "../list_pictures/ListPictures";
import { useUnsplashs } from "../../hooks/useUnsplashs";
import "./NavBar.scss";
export const NavBar = () => {
  const { isLoading, unsplash } = useUnsplashs();
  const [isActive, setisActive] = useState(false);
  const [search, setsearch] = useState("");
  const [unsplash_list, setUnsplash] = useState([]);
  const onChange = (event) => {
    setsearch(event.target.value);
  };
  const onOpen = () => {
    setisActive(!isActive);
  };
  const onClose = () => {
    setisActive(!isActive);
  };
  const listUnsplash = async (value) => {
    const data = await searchUnsplash(value);
    setUnsplash(data);
  };
  useEffect(() => {
    if (search.length == 0) {
      setUnsplash(unsplash);
    } else {
      listUnsplash(search);
    }
  }, [search]);
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
              value={search}
              onChange={onChange}
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
      <ListPictures unsplash={unsplash_list} isLoading={isLoading} />
      <ModalComponent active={isActive} onClose={onClose}>
        <UnsPlashForm onClose={onClose} />
      </ModalComponent>
    </>
  );
};
