import React, { useState } from "react";
import LighBoxHeader from "./LighBoxHeader";
import ButtonLight from "./ButtonLight";
import LightFeed from "./LightFeed";
//import ImageZoom from "./ImageZoom";
import { FaRegWindowClose } from "react-icons/fa";

const LightBox = ({
  //nincs használatban a megfelelő indexre kellen ugrani
  indexem,
  handleModalClose,
  newimages,
  sliderPosition,
}) => {
  const [clicked, setClicked] = useState(false);
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(indexem);
  console.log("in Modal", indexem);
  const handleImage = () => {
    setClicked((prevstate) => !prevstate);
  };

  const prevHandler = () => {
    //  setCurrentIndex((currentIndex - 1 + newimages?.length) % newimages?.length);
    setCurrentIndex(currentIndex - 1);
  };
  const nextHandler = () => {
    console.log("newimages", newimages);

    setCurrentIndex(currentIndex + 1);
    //setCurrentIndex((currentIndex + 1) % newimages?.length);
  };

  const setSizes = (width, height) => {
    setHeight(height);
    setWidth(width);
  };

  return (
    <div
      className="  z-50 border-0 border-sky-400 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-50 flex justify-center items-center w-full h-full "
      //onClick={handleModalClose}
    >
      <div className=" w-full h-full  bg-white z-50 relative flex flex-col items-center">
        <LighBoxHeader
          handleModalClose={handleModalClose}
          handleImage={handleImage}
          clicked={clicked}
        />
        <div className="flex justify-center my-2 w-full m-0 p-0 border-0 border-primary">
          <ButtonLight
            height={height}
            text=" ‹"
            onClick={prevHandler}
            direction="left"
            currentIndex={currentIndex}
            numimages={newimages?.length}
          />
          <LightFeed
            newimages={newimages}
            currentIndex={currentIndex}
            width={width}
            setSizes={setSizes}
            sliderPosition={sliderPosition}
          />
          <ButtonLight
            text=" ›"
            onClick={nextHandler}
            height={height}
            direction="right"
            currentIndex={currentIndex}
            numimages={newimages?.length}
          />{" "}
          <div className="m-3 cursor-pointer relative z-50">
            <FaRegWindowClose onClick={() => handleModalClose()} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LightBox;
