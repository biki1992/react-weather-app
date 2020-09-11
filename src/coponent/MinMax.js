import React from "react";

const MinMax = ({ min, max }) => {
  return (
    <h1 className="py-3">
      <span className="px-4">{min}&deg;</span>
      <span className="px-4">{max}&deg;</span>
    </h1>
  );
};

export default MinMax;
