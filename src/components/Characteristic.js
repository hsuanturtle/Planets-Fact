import React from "react";

const Characteristic = ({ data }) => {
  return (
    <div className="character-section">
      <div className="detail">
        <p className="character-title">ROTATION TIME</p>
        <p className="character-data">{data.rotation}</p>
      </div>
      <div className="detail">
        <p className="character-title">REVOLUTION TIME</p>
        <p className="character-data">{data.revolution}</p>
      </div>
      <div className="detail">
        <p className="character-title">RADIUS</p>
        <p className="character-data">{data.radius}</p>
      </div>
      <div className="detail">
        <p className="character-title">AVERAGE TEMP</p>
        <p className="character-data">{data.temperature}</p>
      </div>
    </div>
  );
};

export default Characteristic;
