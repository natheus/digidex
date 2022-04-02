import React from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const DigimonThumb = ({ img, name, level }) => {
  const style = level + " thumb-container";
  return (
    <Zoom>
      <div className={style} style={{ backgroundColor: "#fff" }}>
        <img alt={name} src={img} />
        <div className="detail-wrapper">
          <h3 className="smart-h3">{name}</h3>
          <small>Level: {level}</small>
        </div>
      </div>
    </Zoom>
  );
};

export default DigimonThumb;
