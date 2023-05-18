import React, { useRef } from "react";

const FeedMobil = ({
  sliderPosition,
  imageDimensions,
  newimages,
  handleImageDimensions,
  handleModalOpen,
  size,
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
    <div
      className={` overflow-hidden m-0 p-0 border-0 border-red-400 ${
        size.width < 667 || size.width < size.height || 500 > size.height ? "w-64" : "w-60"
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
              className={`text-center  text-base text-dark font-extrabold border-0 ${
                size.width < 667 || size.width < size.height || 500 > size.height ? "my-0" : "my-0"
              }`}
            >
              {image.name}
            </p>
            <img
              className={`cursor-pointer object-cover rounded-2xl border-0 border-orange-400 ${
                size.width < 667 || size.width < size.height || 500 > size.height ? "h-72 my-0" : "h-64"
              }`}
              src={image.image}
              onClick={() => handleModalOpen(index)}
              onLoad={handleImageLoad}
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
