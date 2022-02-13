import React from "react";
import { ContentTabs } from "./TabsContent";
const Button = ({ category, setCategory }) => {
  return (
    <div className="tabs">
      {ContentTabs.map((button, index) => {
        const { id, label } = button;
        return (
          <button
            key={id}
            onClick={() => {
              setCategory(index);
            }}
            className={`content-btn ${index === category && "active-btn"}`}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
};

export default Button;
