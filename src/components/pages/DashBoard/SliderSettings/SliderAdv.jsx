import React, { useState, useEffect, useRef } from "react";
import Slider from "../../home/Desktop/Advertise/Slider";
import SliderSettings from "./SliderSettings";
import useWindowSize from "../../../../hooks/use-windowsize";
import { MyDataContext } from "../../../../context/DataContext";

const SliderAdv = () => {
  const { sliderAdv, setSliderAdv, sliderCurrentIndex, setSliderCurrentIndex } =
    MyDataContext();

  return (
    <div className="flex flex-col">
      <Slider />
      <div className="flex-grow ">
        <SliderSettings
          sliderAdv={sliderAdv}
          setSliderAdv={setSliderAdv}
          sliderCurrentIndex={sliderCurrentIndex}
          setSliderCurrentIndex={setSliderCurrentIndex}
        />
      </div>
    </div>
  );
};

export default SliderAdv;
