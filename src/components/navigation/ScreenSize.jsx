import React from "react";
import { FaLaptop, FaTabletAlt, FaMobileAlt } from "react-icons/fa";

const ScreenSize = ({ width }) => {
  return (
    <div> 
      <div className="  text-4xl">
        {width < 768 ? (
          <FaMobileAlt />
        ) : width < 992 ? (
          <FaTabletAlt />
        ) : (
          <FaLaptop />
        )}
      </div>
      {width}
    </div>
  );
};

export default ScreenSize;