import React from "react";
import Slider from "./Slider";
import SliderSuplement from "./SliderSuplement";

const Advertise = () => {
  return (
    <>
      <div className="relative z-10 flex flex-row h-full border-0 mx-0 mt-0 overflow-hidden ">
        <Slider />
       <SliderSuplement/>
      </div>
    </>
  );
};

export default Advertise;
// <Articels />