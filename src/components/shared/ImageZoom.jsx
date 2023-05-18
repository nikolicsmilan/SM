import React, { useState } from "react";
//import './styles.css';

const ImageZoom = ({ src, alt }) => {
  const [isZoomed, setIsZoomed] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    //Van synetetikus és native event, a szintetikus a browserek közötti
    //átjárhatóságg miatt van viszont valami csak nativeba van bent
    const { offsetX, offsetY } = event.nativeEvent;
    console.log("offsetX", offsetX, "offsetY", offsetY);
    //The getBoundingClientRect() method is a JavaScript method that returns the size of an element and its position relative to the viewport
    const { width, height } = event.target.getBoundingClientRect();
    console.log("width", width, "height", height);
    const x = (offsetX / width) * 100; //kép x kordinitája elosztva a kép szélességével pl (1/100)*100=1, (10/100)*100= 10
    const y = (offsetY / height) * 100;

    setCursorPos({ x, y });
    setIsZoomed(true);
  };

  const handleMouseLeave = () => {
    setIsZoomed(false);
  };
  // - jel a dollár előtt egy mínusz jel ez okozza az elllentétes irányt
  const transform = isZoomed
    ? `translate(-${cursorPos.x}%, -${cursorPos.y}%) scale(1.5)`
    : "none";

  return (
    <div className="image-container ">
      <img
        className="image"
        src={src}
        alt={alt}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ transform }}
      />
    </div>
  );
};

export default ImageZoom;

/*The getBoundingClientRect() method is a JavaScript method that returns the size of an element and its position relative to the viewport. It returns an object that contains properties such as width, height, left, right, top, and bottom.

In the provided code, the handleMouseMove function is using getBoundingClientRect() method to get the size of the event.target element, which in this case is the <img> element.

The width and height properties of the returned object are then destructured from the object and assigned to the constants width and height, respectively. This allows the code to use these values later in the function to calculate the cursor position relative to the image size.

So, const { width, height } = event.target.getBoundingClientRect(); is extracting the width and height properties from the object returned by getBoundingClientRect() method and assigning them to the width and height constants, respectively. */
