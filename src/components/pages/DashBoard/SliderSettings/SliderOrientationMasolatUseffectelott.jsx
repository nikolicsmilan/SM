import React, { useState, useEffect } from "react";
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
}) => {
  /* const [directionMaintext, setDirectionMainText] = useState("left-0 top-0");
  const [directionSubntext, setDirectionSubText] = useState("left-0 top-0");*/
  const [selectedPosition, setSelectedPosition] = useState("");
  const [selectedAttribute, setSelectedAttribute] =
    useState("maintextPosition");

  const updateOrioentation = (x, y) => {
    console.log("updateOrioentation run");
    if (selectedText === "maintext") {
      console.log("updateOrioentation run maintext");
      setSelectedAttribute("maintextPosition");
     setSelectedPosition(` ${x}-10 ${y}-10`);
    // setSelectedPosition(`100px`);

    } else if (selectedText === "subtext") {
      console.log("updateOrioentation run subtext");
      setSelectedAttribute("subtexttextPosition");
      setSelectedPosition(`${x}-10 ${y}-10`);
  /*  setSelectedPosition({
      left: "10px",
      top: "10px",
    });*/
    } else if (selectedText === "buttontext") {

      console.log("updateOrioentation run subtext");
      setSelectedAttribute("buttontextPosition");
     setSelectedPosition(`${x}-10 ${y}-10`);
/*
 setSelectedPosition({
      left: "10px",
      top: "10px",
    });*/

     /* let newDirection = `${x}-10 ${y}-10`;
      console.log(
        "updateOrioentation run buttontext branch: ",
        "newDirection: ",
        newDirection
      );
      setSliderAdv((prevConfig) => {
        const updatedConfig = [...prevConfig];
        updatedConfig[sliderCurrentIndex].buttontextPosition = newDirection;
        return updatedConfig;
      });*/
    }
  };

  useEffect(() => {
    console.log("Useffect run")
    setSliderAdv((prevConfig) => {
      const updatedConfig = [...prevConfig];
      updatedConfig[sliderCurrentIndex][selectedAttribute] = selectedPosition;
      return updatedConfig;
    });
  }, [selectedAttribute,selectedPosition,setSliderAdv,sliderCurrentIndex]);

  return (
    <div className="border-2  h-auto">
      <div className="flex p-2">
        <BsBoxArrowInUpLeft
          className="text-2xl m-2 cursor-pointer hover:text-primary"
          onClick={() => {
            updateOrioentation("left", "top");
          }}
        />
        <BsBoxArrowInUp className="text-2xl m-2" />
        <BsBoxArrowInUpRight
          className="text-2xl m-2 cursor-pointer hover:text-primary"
          onClick={() => {
            updateOrioentation("right", "top");
          }}
        />
      </div>
      <div className="flex p-2">
        <BsBoxArrowLeft className="text-2xl m-2" />
        <BsArrowsMove className="text-2xl m-2" />
        <BsBoxArrowRight className="text-2xl m-2" />
      </div>
      <div className="flex p-2">
        <BsBoxArrowInDownLeft className="text-2xl m-2" />
        <BsBoxArrowInDown className="text-2xl m-2" />
        <BsBoxArrowInDownRight className="text-2xl m-2" />
      </div>
    </div>
  );
};

export default SliderOrientation;
/*
 const updateOrioentation = (x, y) => {
    console.log("updateOrioentation run");
    if (selectedText === "maintext") {
      let newDirection = ` ${x}-10 ${y}-0`;
      //let newDirection='left-40 top-40'
      console.log(
        "updateOrioentation run maintext branch: ",
        "newDirection: ",
        newDirection
      );

      setSliderAdv((prevConfig) => {
        const updatedConfig = [...prevConfig];
        updatedConfig[sliderCurrentIndex].maintextPosition = `${x}-10 ${y}-10`;
        return updatedConfig;
      });
    } else if (selectedText === "subtext") {
      let newDirection = `${x}-10 ${y}-10`;
      console.log(
        "updateOrioentation run subtext branch: ",
        "newDirection: ",
        newDirection
      );
      setSliderAdv((prevConfig) => {
        const updatedConfig = [...prevConfig];
        updatedConfig[sliderCurrentIndex].subtexttextPosition = `${x}-2 ${y}-2`;
        return updatedConfig;
      });
    } else if (selectedText === "buttontext") {
      let newDirection = `${x}-10 ${y}-10`;
      console.log(
        "updateOrioentation run buttontext branch: ",
        "newDirection: ",
        newDirection
      );
      setSliderAdv((prevConfig) => {
        const updatedConfig = [...prevConfig];
        updatedConfig[sliderCurrentIndex].buttontextPosition = newDirection;
        return updatedConfig;
      });
    }
  };
*/