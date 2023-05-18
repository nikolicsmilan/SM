import React from "react";

const Info = ({
  numImages,
  sliderPosition,
  handlePrevClick,
  galleryWidth,
 // stepprecent,
 imageDimensions,
  handleNextClick,
}) => {
  return (
    <>
      <p className="text-dark px-2 py-1 font-bold border-0">
        Találat: {numImages} db
      </p>
      <div className="w-64 border-0 flex justify-end">
        <button
          className={`bg-transparent text-primary text-2xl font-bold mx-5 ${
            sliderPosition === 0 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={handlePrevClick}
        >
          ‹
        </button>
        <button
          className={`bg-transparent text-primary text-2xl font-bold mx-5 ${
            sliderPosition < numImages - galleryWidth / imageDimensions
              ? ""
              : "opacity-50 cursor-not-allowed"
          }`}
          onClick={handleNextClick}
        >
          ›
        </button>
      </div>
    </>
  );
};

export default Info;
