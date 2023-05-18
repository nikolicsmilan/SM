import React, { useState, useRef, useEffect } from "react";
import LighBoxHeader from "./LighBoxHeader";
import ButtonLight from "./ButtonLight";
//import ImageZoom from "./ImageZoom";

const LightBox = ({
  imageSrc,
  altText,
  handleModalClose,
  reklam,
  newimages,
}) => {
  const [clicked, setClicked] = useState(false);
  const [height, setHeight] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  console.log("in Modal", imageSrc);
  const handleImage = () => {
    setClicked((prevstate) => !prevstate);
  };
  const imageRef = useRef(null);
  const prevHandler = () => {
    setCurrentIndex((currentIndex - 1 + reklam.length) % reklam.length);
  };
  const nextHandler = () => {
    setCurrentIndex((currentIndex + 1) % reklam.length);
  };
  useEffect(() => {
    const { width, height } = imageRef.current?.getBoundingClientRect() || {};
    setHeight(height);
  }, []);
  return (
    <div
      className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-50 z-50 flex justify-center items-center w-full
     h-full border-4"
      //onClick={handleModalClose}
    >
      <div className=" w-full h-full  bg-white z-101 flex flex-col  items-center border-2 border-red-800">
        <LighBoxHeader
          handleModalClose={handleModalClose}
          handleImage={handleImage}
          clicked={clicked}
        />

        <div className="flex  justify-center my-2 border-0 border-red-700 w-full h-4/5 m-0 p-0 ">
          <ButtonLight height={height} text=" ‹" onClick={prevHandler} />
          <div className="flex w-1/2 border-0 border-sky-400 overflow-hidden">
            {newimages?.map((image, index) => (
              <div
                key={index}
                className="flex-shrink-0 p-1 m-0 border-0 border-red-400 transition-transform duration-300 ease-in-out overflow-hidden"
                ref={imageRef}
                style={{ transform: `translateX(-${0}px)` }}
              >
                <img
                  src={image.image}
                  alt={altText}
                  className="  object-cover  "
                  ref={imageRef}
                />
              </div>
            ))}
          </div>

          <ButtonLight height={height} text=" ›" onClick={nextHandler} />
        </div>
        <div>dddddddddddddddddddddddd</div>
      </div>
     
    </div>
  );
};

export default LightBox;

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
