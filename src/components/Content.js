import React from "react";

const Content = ({ data, category }) => {
  if (category === 0) {
    return <p className="content">{data.geology.content}</p>;
  } else if (category === 1) {
    return <p className="content">{data.structure.content}</p>;
  } else {
    return <p className="content">{data.overview.content}</p>;
  }
};

export default Content;
