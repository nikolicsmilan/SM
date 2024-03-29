import React from "react";

const NavInter = ({ step, index, item,width, height }) => {
  return (
    <>
      {/*line */}
      <div
        className={`border-0 w-8 lg:w-96 h-1 p-0 mx-3 lg:mx-0 z-1 ${
          step.num >= index + 1 ? "bg-primary" : "bg-white"
        }`}
      ></div>
      {/*circle */}
      <div
        className={` relative rounded w-4 h-4 p-4 m-0 z-1 ${
          step.num >= index + 1 ? "bg-primary" : "bg-white"
        }`}
      >
        {/*number in the circle */}
        <span
          className={`absolute top-1 z-1 w-8 text-base font-bold text-gray-900   ${
            step.num >= index + 1 ? "text-dark" : ""
          }`}
          style={{ transform: "translateX(-50%)" }}
        >
          {index + 1}
        </span>
        {/* text */}
        {width < 1024 || width < height || 300 > height ?"":( <span
          className={`absolute top-10  w-48 text-base  z-1  ${
            step.num >= index + 1 ? "text-primary " : "text-gray-900"
          }`}
          style={{ transform: "translateX(-50%)" }}
        >
          {item?.stage}
        </span>)}
       
      </div>
    </>
  );
};

export default NavInter;
