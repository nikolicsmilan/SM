import React, { useState, useEffect, useRef } from "react";
import Slider from "../../home/Desktop/Slider/Slider";
import SliderSuplement from "../../home/Desktop/Slider/SliderSuplement"
import SliderSettings from "./SliderSettings";
import useWindowSize from "../../../../hooks/use-windowsize";
import { MyDataContext } from "../../../../context/DataContext";

const SliderAdv = () => {
  const { sliderAdv, setSliderAdv, sliderCurrentIndex, setSliderCurrentIndex,currentSlider } =
    MyDataContext();

  return (
    <div className="flex flex-col">
      <div className="flex flex-col md:flex-row">
      <Slider />
      <SliderSuplement/>
      </div>
      <h1>currentSlider: {currentSlider?.image}</h1>
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
