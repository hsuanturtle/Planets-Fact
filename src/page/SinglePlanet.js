import React, { useState } from "react";
import Button from "../components/Button";
import Description from "../components/Description";
import Characteristic from "../components/Characteristic";

const SinglePlanet = ({ data }) => {
  const [category, setCategory] = useState(0);
  return (
    <div className="planet-wrapper">
      <Button category={category} setCategory={setCategory} />
      <Description data={data} category={category} setCategory={setCategory} />
      <Characteristic data={data} category={category} />
    </div>
  );
};

export default SinglePlanet;
