import React from "react";
import Slider from "./Slider";
import Calculator from "./Calculator";

const Advertise = () => {
  return (
    <>
      <div className="relative z-10 flex flex-row h-80 border-0 mx-5 mt-0 overflow-hidden ">
        <Slider />
        <Calculator />
      </div>
    </>
  );
};

export default Advertise;
