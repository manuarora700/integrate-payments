import React from "react";

export const Element = ({ className }) => {
  return (
    <div
      style={{ backfaceVisibility: "hidden", outline: "1px solid transparent" }}
      className={`hidden md:block absolute  h-[50px] w-[300px] bg-white z-0 transform -skew-x-12 -rotate-12 ${className}`}
    ></div>
  );
};
