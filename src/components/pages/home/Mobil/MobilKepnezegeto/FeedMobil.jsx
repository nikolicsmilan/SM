import React, { useRef, useState } from "react";

const FeedMobil = ({
  sliderPosition,
  setSliderPosition,
  imageDimensions,
  newimages,
  handleImageDimensions,
  handleModalOpen,
  size,
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
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

  const handleMouseDown = (event) => {
    setIsDragging(true);

    setStartX(event.clientX || event.touches[0].clientX);
  };

  const handleMouseMove = (event) => {
    if (!isDragging) return;

    const currentPosition = event.clientX || event.touches[0].clientX;
    const deltaX = currentPosition - startX;
    console.log(
      "currentPosition",
      currentPosition,
      "deltaX",
      deltaX,
      "startX",
      startX
    );
    if (deltaX > 50 && sliderPosition > 0) {
      setSliderPosition((prevIndex) => prevIndex - 1);
      setIsDragging(false);
    } else if (deltaX < -50 && sliderPosition < newimages.length - 1) {
      setSliderPosition((prevIndex) => prevIndex + 1);
      setIsDragging(false);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div
      className={` overflow-hidden m-0 p-0 border-0 border-red-400 w-64`}
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
              className={`text-center  text-base text-dark font-extrabold border-0`}
            >
              {image.name}
            </p>
            <img
              className={`cursor-pointer object-cover rounded-2xl border-0 border-orange-400 h-72`}
              src={image.url}
              onClick={() => handleModalOpen(index)}
              onLoad={handleImageLoad}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onTouchStart={handleMouseDown}
              onTouchMove={handleMouseMove}
              onTouchEnd={handleMouseUp}
              style={{ width: `${imageDimensions}px` }}
              alt="ez egy kép"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeedMobil;
