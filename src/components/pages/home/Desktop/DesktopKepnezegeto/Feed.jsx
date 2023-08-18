import React, { useRef } from "react";

const Feed = ({
  sliderPosition,
  stepprecent,
  newimages,
  //imageRef,
  handleModalOpen,
  //check,
  imageDimensions,
  handleImageDimensions,
}) => {
  const imageRef = useRef(null);

  const handleImageLoad = () => {
    //ebben benne van a padding de margin nem
    //Ha nincs ez || {} akkor száll el
    const { width, height } = imageRef.current?.getBoundingClientRect() || {};
    // ebben csaK maga az elem
    //const width = imageRef.current?.clientWidth;
    if (width) {
      handleImageDimensions(width);
    }
  };

  return (
    <div
      className="flex transition-transform duration-300 ease-in-out  "
     style={{ transform: `translateX(-${sliderPosition * imageDimensions}px)` }}
  
    >
      {newimages?.map((image, index) => (
        <div key={index} className="flex-shrink-0 p-1 m-0 " ref={imageRef}>
          <img
            //   ref={imageRef}
            className="w-48 h-64 cursor-pointer object-cover rounded-2xl  border-0 border-primary"
            src={image.url}
            alt={`image ${index}`}
            onClick={() => handleModalOpen(index)}
            onLoad={handleImageLoad}
          />

          <p
            // ref={(el) => (nameRefs.current[index] = el)}
            className="text-center mt-2 text-sm font-medium text-info"
          >
            {image.name} {image.price}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Feed;
