import React from "react";

const NavFirstLast = ({ step, index, item }) => {
  return (
    <>
      {/*stage (circle) */}
      <div
        className={` relative rounded w-4 h-4 p-4 m-0 ${
          step.num >= 1 ? "bg-primary" : "bg-white"
        }`}
      >
        {/*number in the circle +plus one as index of array */}
        <span
          className={`absolute top-1  w-48 text-base font-bold text-gray-500   ${
            step.num >= 1 ? "text-dark" : ""
          }`}
          style={{ transform: "translateX(-50%)" }}
        >
          {index + 1}
        </span>
        {/*text */}
        <span
          className={`absolute top-10  w-48 text-base  text-gray-500   ${
            step.num >= 1 ? "text-primary" : ""
          }`}
          style={{ transform: "translateX(-50%)" }}
        >
          {item?.stage}
        </span>

  
      </div>
    </>
  );
};

export default NavFirstLast;
