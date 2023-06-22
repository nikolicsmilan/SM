import React, { useRef, useEffect } from "react";
import { SlBasket } from "react-icons/sl";

const LightFeed = ({ newimages, currentIndex, width, setSizes,sliderPosition }) => {
  const imageRef = useRef(null);
  const imageFrameRef = useRef(null);

  useEffect(() => {
    const { height } = imageRef.current?.getBoundingClientRect() || {};
    const { width } = imageFrameRef.current?.getBoundingClientRect() || {};
    setSizes(width, height);
  }, []);
  

  return (
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
          <div className=" flex text-center border-0 items-center justify-center m-1 text-info border-0" >
           <SlBasket className="inline text-white text-2xl bg-primary rounded p-1 mr-2 w-8"/><span className="text-base text-dark font-bold">{image.name} {image.price} {image.description}</span></div>
    
         
          
        </div>
      ))}
    </div>
  );
};

export default LightFeed;
