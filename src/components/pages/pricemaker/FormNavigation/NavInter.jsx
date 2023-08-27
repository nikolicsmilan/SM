import React from "react";

const NavInter = ({ step, index, item }) => {
  return (
    <>
      {/*line */}
      <div
        className={`border-0  w-96 h-1 p-0 m-0 ${
          step.num >= index + 1 ? "bg-primary" : "bg-white"
        }`}
      ></div>
      {/*circle */}
      <div
        className={` relative rounded w-4 h-4 p-4 m-0 ${
          step.num >= index + 1 ? "bg-primary" : "bg-white"
        }`}
      >
        {/*number in the circle */}
        <span
          className={`absolute top-1  w-48 text-base font-bold text-gray-900   ${
            step.num >= index + 1 ? "text-dark" : ""
          }`}
          style={{ transform: "translateX(-50%)" }}
        >
          {index + 1}
        </span>
        {/* text */}
        <span
          className={`absolute top-10  w-48 text-base    ${
            step.num >= index + 1 ? "text-primary " : "text-gray-900"
          }`}
          style={{ transform: "translateX(-50%)" }}
        >
          {item?.stage}
        </span>
      </div>
    </>
  );
};

export default NavInter;
