import React, { useRef } from "react";
import LightBoxMobilHeader from "./LightBoxMobilHeader";
import NavMobil from "./NavMobil";

const LightBoxMobil = ({
  handleModalClose,
  // mobilegallery,
  newimages,
  size,
  sliderPosition,
  imageDimensions,
  handleImageDimensions,
  setSliderPosition,
  numImages,
}) => {
  const mobileImageRef = useRef(null);

  const handleImageLoad = () => {
    //ebben benne van a padding de margin nem
    //Ha nincs ez || {} akkor száll el
    const { width } = mobileImageRef.current?.getBoundingClientRect() || {};
    // ebben csaK maga az elem
    //const width = mobileImageRef.current?.clientWidth;

    if (width) {
      handleImageDimensions(width);
    }
  };
  return (

    <>
 
    <div
      className=" border-0 fixed top-0 bg-black bg-opacity-50 z-50 flex justify-center  w-full h-full flex-col"
    > <LightBoxMobilHeader handleModalClose={handleModalClose} />
      <div className=" w-full h-full  bg-white z-101 flex flex-col items-center justify-center border-0 border-red-400">
     
       
        <div
          className={`border-0 border-orange-400 overflow-hidden p-0 ${
            size.height > 667 ? "w-96 px-0" : "w-80 px-0 border-0"
          }`}
          ref={mobileImageRef}
        >
          <div
            className="flex transition-transform duration-300 ease-in-out border-0 p-0"
            style={{
              transform: `translateX(-${sliderPosition * imageDimensions}px)`,
            }}
          >
            {newimages?.map((image, index) => (
              <div key={index} className="flex-shrink-0 p-0 m-0 border-0">
                <p
                  // ref={(el) => (nameRefs.current[index] = el)}
                  className={`text-center  text-base text-dark font-extrabold ${
                    size.height > 667 ? "my-0" : "my-0"
                  }`}
                >
                  {image.name}
                </p>
                <img
                  className={`cursor-pointer object-cover  border-0 ${
                    size.width < 667 || size.width < size.height || 300 > size.height ? "h-96 my-0" : "h-60"
                  }`}
                  src={image.image}
                  //onClick={() => handleModalOpen(index)}
                  onLoad={handleImageLoad}
                  style={{ width: `${imageDimensions}px` }}
                  alt="ez egy kép"
                />
              </div>
            ))}
          </div>
        </div>
        <NavMobil
          setSliderPosition={setSliderPosition}
          sliderPosition={sliderPosition}
          numImages={numImages}
        />
      </div>
    </div>
    </>
  );
};

export default LightBoxMobil;

// <h1>Index: {sliderPosition}</h1>
