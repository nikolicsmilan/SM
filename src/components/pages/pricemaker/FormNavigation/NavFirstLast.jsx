import React from "react";

const NavFirstLast = ({ step, index, item,width, height }) => {
  return (
    <>
      {/*stage (circle) */}
      <div
        className={` relative rounded w-4 h-4 p-4 m-0  border-0 ${
          step.num >= 1 ? "bg-primary" : "bg-white"
        }`}
      >
        {/*number in the circle +plus one as index of array */}
        <span
          className={`absolute top-1  w-48 text-base font-bold text-gray-900   border-0 ${
            step.num >= 1 ? "text-dark" : "text-red-400"
          }`}
          style={{ transform: "translateX(-50%)" }}
        >
          {index + 1}
        </span>
        {/*text */}
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

export default NavFirstLast;
