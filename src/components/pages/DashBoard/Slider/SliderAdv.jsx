import React, { useState, useEffect, useRef } from "react";
import Slider from "../../home/Desktop/Advertise/Slider";
import SliderConf from "./SliderConf";
import useWindowSize from "../../../../hooks/use-windowsize";
import { MyDataContext } from "../../../../context/DataContext";

const SliderAdv = () => {
  const {sliderAdv,setSliderAdv} = MyDataContext();

 
  return (
    <div className="flex flex-col">
      <Slider />
      <div className="flex-grow ">
        <SliderConf sliderAdv={sliderAdv} setSliderAdv={setSliderAdv}/>
      </div>
      
    </div>
  );
};

export default SliderAdv;
