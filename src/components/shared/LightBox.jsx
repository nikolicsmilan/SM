import React, { useState } from "react";
import LighBoxHeader from "./LighBoxHeader";
import ButtonLight from "./ButtonLight";
import LightFeed from "./LightFeed";
//import ImageZoom from "./ImageZoom";

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
      className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-50 z-50 flex justify-center items-center w-full
     h-full "
      //onClick={handleModalClose}
    >
      <div className=" w-full h-full  bg-white z-101 flex flex-col items-center">
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
          />
        </div>
      </div>
    </div>
  );
};

export default LightBox;

/*
 <div className="flex w-1/2 overflow-hidden ">
            {newimages?.map((image, index) => (
              <div
                key={index}
                className="flex-shrink-0 p-1 m-0  transition-transform duration-300 ease-in-out overflow-hidden w-full h-screen "
                ref={imageFrameRef}
                style={{ transform: `translateX(-${currentIndex * width}px)` }}
              >
                <div class="flex h-5/6 ">
                  <img
                    className="w-full object-contain"
                    src={image.image}
                    alt="Image"
                    ref={imageRef}
                  />
                </div>
                <div className="text-center">{image.name} {image.price}</div>
                <div className="text-center">{image.description} </div>
              </div>
            ))}
          </div>
*/

/*  {clicked && (
          <div className="border-4 ">
            <ImageZoom src={imageSrc} className="w-3/5 h-2/3 object-cover " />
          </div>
        )} */

/*        {!clicked && (
          <div className="flex  justify-center items-center border-0 w-full h-full m-0 p-0">
            <img
              src={imageSrc}
              alt={altText}
              className="w-1/2 h-2/3 object-cover "
            />
          </div>
        )} */
