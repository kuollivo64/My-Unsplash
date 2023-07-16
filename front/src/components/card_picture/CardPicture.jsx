import React, { useState } from "react";
import "./CardPicture.scss";
export const CardPicture = ({ img_resource }) => {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
    console.log( "ES HOVER", isHovered );
};

const handleMouseLeave = () => {
    setIsHovered(false);
    console.log( "NO ES HOVER", isHovered );
  };

  return (
    <div className="content_picture">
      <img
        src={img_resource}
        alt=""
        srcSet=""
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
        <div className="overlay">
            <button className="button_hover">delete</button>
            <p className="text_hover">asdasdasdasdsadasasdaasdasdsadasdsadasdasdsadsdasdasdasdasdasdasdaasd</p>
        </div>
    </div>
  );
};
