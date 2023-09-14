import React, { useState, useRef } from "react";
import ButtonAdv from "./SliderNavigationButton";
import { useNavigate } from "react-router-dom";
import SliderContent from "./SliderContent";
import SliderPagination from "./SliderPagination";
import { useStyleContext } from "../../../../../context/StyleContext";
import { MyDataContext } from "../../../../../context/DataContext";
const Slider = () => {
  const navigate = useNavigate();
  const [contentsize, setContentSize] = useState({});
  // const [currentIndex, setCurrentIndex] = useState(0);
  const contentRef = useRef(null);
  const { style } = useStyleContext();
  const { sliderAdv, sliderCurrentIndex, setSliderCurrentIndex } =
    MyDataContext();
 // console.log("Logan vissazvág:", sliderAdv);
  const numberHandler = (index) => {
    setSliderCurrentIndex(index);
  };
  function handlesSwitchUrlap() {
    navigate("/sendmessage");
  }

  const prevHandler = () => {
    setSliderCurrentIndex(
      (sliderCurrentIndex - 1 + sliderAdv.length) % sliderAdv.length
    );
  };
  const nextHandler = () => {
    setSliderCurrentIndex((sliderCurrentIndex + 1) % sliderAdv.length);
  };

  const handleSize = (valami) => {
    const { width, height } = valami.current?.getBoundingClientRect() || {};
    setContentSize({ width, height });
  };

  return (
    <div
      className={`border-0 lg:w-3/4 p-1 mt-0 m-1 rounded-3xl  flex items-center justify-between ${
        style !== "dio" ? "" : ""
      }`}
    >
      <ButtonAdv text=" ‹" onClick={prevHandler} />
      <div className="flex-grow overflow-hidden">
        <SliderContent
          handlesSwitchUrlap={handlesSwitchUrlap}
          //size={size}
          sliderAdv={sliderAdv}
          sliderCurrentIndex={sliderCurrentIndex}
          handleContentRef={(ref) => (contentRef.current = ref)}
          contentsize={contentsize}
          handleSize={handleSize}
        />{" "}
        <SliderPagination
          sliderAdv={sliderAdv}
          sliderCurrentIndex={sliderCurrentIndex}
          numberHandler={numberHandler}
        />
      </div>
      <ButtonAdv text=" ›" onClick={nextHandler} />
    </div>
  );
};

export default Slider;
