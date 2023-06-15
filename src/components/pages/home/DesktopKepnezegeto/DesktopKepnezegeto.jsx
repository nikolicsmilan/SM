import React, { useState, useRef } from "react";
import LightBox from "../../../shared/LightBox";
import Feed from "./Feed";
import Info from "./Info";
import { MyDataContext } from "../../../../context/DataContext";

const DesktopKepnezegeto = () => {
  const { newimages, sliderPosition, setSliderPosition } = MyDataContext();
  const [gallery, setGallery] = useState({
    //stepprecent: 0,
    isModalOpen: false,
    indexem: false,
    imageDimensions: 1,
    galleryWidth: 0,
  });

  const galleryRef = useRef(null);
  const numImages = newimages.length;

  const handleImageDimensions = (dimensions) => {
    setGallery((prevState) => ({
      ...prevState,
      imageDimensions: dimensions,
      galleryWidth: galleryRef.current?.clientWidth,
      //stepprecent: (dimensions * numImages) / numImages,
    }));
  };

  const handlePrevClick = () => {
    if (sliderPosition > 0) {
      setSliderPosition(sliderPosition - 1);
    }
  };

  const handleNextClick = () => {
    if (
      sliderPosition <
      numImages - gallery.galleryWidth / gallery.imageDimensions
    ) {
      setSliderPosition(sliderPosition + 1);
    }
  };

  const handleModalOpen = (index) => {
    setGallery((prevState) => ({
      ...prevState,
      isModalOpen: true,
      indexem: index,
    }));
  };

  const handleModalClose = () => {
    setGallery((prevState) => ({
      ...prevState,
      isModalOpen: false,
    }));
  };

  return (
    <div className="mx-5 ">
      <div className="relative overflow-hidden w-full" ref={galleryRef}>
        {gallery.isModalOpen && (
          <LightBox
            indexem={gallery.indexem}
            handleModalClose={handleModalClose}
            newimages={newimages}
            sliderPosition={sliderPosition}
          />
        )}
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Info
            numImages={numImages}
            sliderPosition={sliderPosition}
            galleryWidth={gallery.galleryWidth}
            // stepprecent={gallery.stepprecent}
            imageDimensions={gallery.imageDimensions}
            handlePrevClick={handlePrevClick}
            handleNextClick={handleNextClick}
          />
        </div>
        <Feed
          sliderPosition={sliderPosition}
          //stepprecent={gallery.stepprecent}
          imageDimensions={gallery.imageDimensions}
          newimages={newimages}
          handleModalOpen={handleModalOpen}
          handleImageDimensions={handleImageDimensions}
        />
      </div>
    </div>
  );
};

export default DesktopKepnezegeto;
