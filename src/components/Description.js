import React from "react";
import Image from "./Image";
import Content from "./Content";
const Description = ({ data, category }) => {
  return (
    <div className="description animate__animated animate__slideInDown">
      <div className="image-section">
        <Image data={data} category={category} />
      </div>
      <div className="detail-section">
        <h1 className="name">{data.name}</h1>
        <Content data={data} category={category} />
        <p className="link">
          Source:
          <span>
            <a href={data.overview.source} target="_blank" rel="noreferrer">
              Wikipedia
            </a>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Description;
