import React, { useState, useRef } from "react";
import InfoMobil from "./InfoMobil";
import FeedMobil from "./FeedMobil";
import NavMobil from "./NavMobil";
import LightBoxMobil from "./LightBoxMobil";
import { MyDataContext } from "../../../../../context/DataContext";
// Only display responsible
const MobilKepnezegeto = () => {
  const { newimages, sliderPosition, setSliderPosition, size } =
    MyDataContext();
  const [mobilegallery, setMobileGallery] = useState({
    isModalOpen: false,
 //   indexem: 0,//sliderpositionbe bent van
    imageDimensions: 1,
    galleryWidth: 0,
  });

  const mobilegalleryRef = useRef(null);
  const handleModalOpen = (index) => {
    setMobileGallery((prevState) => ({
      ...prevState,
      isModalOpen: true,
      indexem: index,
    }));
  };
  const handleImageDimensions = (dimensions) => {
    console.log("dimensions", dimensions);
    setMobileGallery((prevState) => ({
      ...prevState,
      imageDimensions: dimensions,
      galleryWidth: mobilegalleryRef.current?.clientWidth,
    }));
  };
  const handleModalClose = () => {
    setMobileGallery((prevState) => ({
      ...prevState,
      isModalOpen: false,
    }));
  };

  const numImages = newimages.length;

  return (
    <div className="flex flex-col items-center border-0 border-sky-400" ref={mobilegalleryRef}>
      {mobilegallery.isModalOpen && (
        <LightBoxMobil
          handleModalClose={handleModalClose}
        //  mobilegallery={mobilegallery}
          newimages={newimages}
          size={size}
          sliderPosition={sliderPosition}
          setSliderPosition={setSliderPosition}
          imageDimensions={mobilegallery.imageDimensions}
          handleImageDimensions={handleImageDimensions}
          numImages={numImages}
        />
      )}
      <InfoMobil numImages={numImages} />
      <FeedMobil
        sliderPosition={sliderPosition}
        imageDimensions={mobilegallery.imageDimensions}
        newimages={newimages}
        handleModalOpen={handleModalOpen}
        handleImageDimensions={handleImageDimensions}
        size={size}
      />
      <NavMobil
        setSliderPosition={setSliderPosition}
        sliderPosition={sliderPosition}
        numImages={numImages}
      />
    </div>
  );
};

export default MobilKepnezegeto;

