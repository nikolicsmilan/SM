import React, { useEffect } from "react";
//import { PiArrowLineUpLeftBold } from "react-icons/pi";
import {
  BsBoxArrowInUpLeft,
  BsBoxArrowInDownLeft,
  BsBoxArrowInDown,
  BsBoxArrowInUp,
  BsBoxArrowInUpRight,
  BsBoxArrowInDownRight,
  BsBoxArrowLeft,
  BsBoxArrowRight,
  BsArrowsMove,
} from "react-icons/bs";
const SliderOrientation = ({
  selectedText,
  setSliderAdv,
  sliderCurrentIndex,
  selectedAttribute,
  setSelectedAttribute,
  selectedPosition,
  setSelectedPosition,
  style
}) => {
  /*
  const updateOrioentation = (x, y) => {
    console.log("updateOrioentation run");
    if (selectedText === "maintext") {
      console.log("updateOrioentation run maintext");
      setSelectedAttribute("maintextPosition");
      setSelectedPosition(` ${x}-10 ${y}-10`);
    } else if (selectedText === "subtext") {
      console.log("updateOrioentation run subtext");
      setSelectedAttribute("subtexttextPosition");
      setSelectedPosition(`${x}-10 ${y}-10`);
    } else if (selectedText === "buttontext") {
      console.log("updateOrioentation run subtext");
      setSelectedAttribute("buttontextPosition");
      setSelectedPosition(`${x}-10 ${y}-10`);
    }
  };*/
  const updateOrioentation = (value) => {
    console.log("updateOrioentation run");
    if (selectedText === "maintext") {
      console.log("updateOrioentation run maintext");
      setSelectedAttribute("maintextPosition");
      setSelectedPosition(value);
    } else if (selectedText === "subtext") {
      console.log("updateOrioentation run subtext");
      setSelectedAttribute("subtexttextPosition");
      setSelectedPosition(value);
    } else if (selectedText === "buttontext") {
      console.log("updateOrioentation run subtext");
      setSelectedAttribute("buttontextPosition");
      setSelectedPosition(value);
    }
  };

  useEffect(() => {
    console.log("Useffect run");
    setSliderAdv((prevConfig) => {
      const updatedConfig = [...prevConfig];
      updatedConfig[sliderCurrentIndex][selectedAttribute] = selectedPosition;
      return updatedConfig;
    });
  }, [selectedAttribute, selectedPosition, setSliderAdv, sliderCurrentIndex]);
//
  return (
    <div className={`  ${style==="narancs"?"border-2":"border-0"}`}>
      <div className="flex p-2">
        <BsBoxArrowInUpLeft
          className="text-2xl text-info m-2 cursor-pointer hover:text-primary"
          onClick={() => {
            updateOrioentation("left-10 top-10");
          }}
        />
        <BsBoxArrowInUp
          className="text-2xl text-info m-2 cursor-pointer hover:text-primary"
          onClick={() => {
            updateOrioentation("top-10 left-1/2 transform -translate-x-1/2");
          }}
        />
        <BsBoxArrowInUpRight
          className="text-2xl text-info m-2 cursor-pointer hover:text-primary"
          onClick={() => {
            updateOrioentation("right-10 top-10");
          }}
        />
      </div>
      <div className="flex p-2">
        <BsBoxArrowLeft
          className="text-2xl text-info m-2 cursor-pointer hover:text-primary"
          onClick={() => {
            updateOrioentation("top-1/2 left-10 transform -translate-y-1/2 -translate-y-10");
          }}
        />
        <BsArrowsMove
          className="text-2xl text-info m-2 cursor-pointer hover:text-primary"
          onClick={() => {
           /* updateOrioentation(
              "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            ); */
            updateOrioentation(
              "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -translate-y-10"
            );
            //updateOrioentation("top-10 left-10 transform -translate-x-1/2 -translate-y-1/2");
          }}
        />
        <BsBoxArrowRight
          className="text-2xl text-info m-2 cursor-pointer hover:text-primary"
          onClick={() => {
            updateOrioentation("top-1/2 right-10 transform -translate-y-1/2 -translate-y-10");
          }}
        />
      </div>
      <div className="flex p-2">
        <BsBoxArrowInDownLeft
          className="text-2xl text-info m-2 cursor-pointer hover:text-primary"
          onClick={() => {
            updateOrioentation("top-3/4 transfrom -translate-y-10 translate-x-10");
          }}
        />
        <BsBoxArrowInDown
          className="text-2xl text-info m-2 cursor-pointer hover:text-primary"
          onClick={() => {
            updateOrioentation("bottom-10 left-1/2 transform -translate-x-1/2");
          }}
        />
        <BsBoxArrowInDownRight
          className="text-2xl text-info m-2 cursor-pointer hover:text-primary"
          onClick={() => {
           // updateOrioentation("right-10 bottom-10");
           updateOrioentation("top-3/4 left-3/4 transfrom -translate-y-10");
          }}
        />
      </div>
    </div>
  );
};

export default SliderOrientation;
