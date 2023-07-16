import React from "react";
import "./ListPictures.scss";
import { CardPicture } from "../card_picture/CardPicture";
import item1 from "./../../assets/collections/1.jpg";
import item2 from "./../../assets/collections/2.jpg";
import item3 from "./../../assets/collections/3.jpg";
import item4 from "./../../assets/collections/4.jpg";
import item5 from "./../../assets/collections/5.jpg";
import item6 from "./../../assets/collections/6.jpg";
import item7 from "./../../assets/collections/7.jpg";
export const ListPictures = () => {
  const data = [
    { img: item1 },
    { img: item2 },
    { img: item3 },
    { img: item4 },
    { img: item5 },
    { img: item6 },
    { img: item7 },
  ];
  return (
    <div className="flex_pictures">
      <div className="content_pictures">
        {
            data.map( (it, index) => (
                <CardPicture key={index} img_resource={it.img} />
            ))
        }
      </div>
    </div>
  );
};
