import React from "react";

const Image = ({ data, category }) => {
  if (category === 0) {
    return (
      <img
        src={data.geology.image}
        alt={data.name}
        height="120"
        width="120"
        className="animate__animated animate__fadeInDown"
      />
    );
  } else if (category === 1) {
    return (
      <img
        src={data.structure.image}
        alt={data.name}
        height="120"
        width="120"
        className="animate__animated animate__fadeIn"
      />
    );
  } else {
    return (
      <img
        src={data.overview.image}
        alt={data.name}
        height="120"
        width="120"
        className="animate__animated animate__fadeInLeft"
      />
    );
  }
};

export default Image;
