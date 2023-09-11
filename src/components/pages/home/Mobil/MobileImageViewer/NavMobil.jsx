import React from "react";

const NavMobil = ({ sliderPosition, setSliderPosition, numImages }) => {
  const handlePrevClick = () => {
    if (sliderPosition > 0) {
      setSliderPosition(sliderPosition - 1);
    }
  };

  const handleNextClick = () => {
    if (sliderPosition + 1 < numImages) {
      setSliderPosition(sliderPosition + 1);
    }
  };

  return (
    <>
      <div className=" border-0 border-lime-400 m-0 p-0 h-8">
        <button
          className={`bg-transparent text-primary text-2xl md:text-4xl font-bold mx-5 ${
            sliderPosition === 0 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={handlePrevClick}
        >
          ‹
        </button>
        <button
          className={`bg-transparent text-primary text-2xl font-bold mx-5 ${
            sliderPosition + 1 < numImages
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

export default NavMobil;
