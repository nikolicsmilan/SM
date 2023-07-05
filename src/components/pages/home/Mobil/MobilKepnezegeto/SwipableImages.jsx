import React, { useState } from 'react';

const SwipeableImages = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);

  const handleMouseDown = (event) => {
    setIsDragging(true);
    setStartX(event.clientX || event.touches[0].clientX);
  };

  const handleMouseMove = (event) => {
    if (!isDragging) return;

    const currentPosition = event.clientX || event.touches[0].clientX;
    const deltaX = currentPosition - startX;

    if (deltaX > 50 && currentImageIndex > 0) {
      setCurrentImageIndex((prevIndex) => prevIndex - 1);
      setIsDragging(false);
    } else if (deltaX < -50 && currentImageIndex < images.length - 1) {
      setCurrentImageIndex((prevIndex) => prevIndex + 1);
      setIsDragging(false);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div
      className={`flex items-center justify-center ${
        isDragging ? 'cursor-grabbing' : 'cursor-grab'
      }`}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onTouchStart={handleMouseDown}
      onTouchMove={handleMouseMove}
      onTouchEnd={handleMouseUp}
    >
      <img
        src={images[currentImageIndex]}
        alt={`Image ${currentImageIndex + 1}`}
        className="w-full max-w-sm sm:max-w-md"
      />
    </div>
  );
};

export default SwipeableImages;



/*import React, { useState } from 'react';

const SwipeableImages = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseMove = (event) => {
    if (!isDragging) return;

    const deltaX = event.movementX || event.touches[0].clientX - event.touches[1].clientX;

    if (deltaX > 50 && currentImageIndex > 0) {
      setCurrentImageIndex((prevIndex) => prevIndex - 1);
      setIsDragging(false);
    } else if (deltaX < -50 && currentImageIndex < images.length - 1) {
      setCurrentImageIndex((prevIndex) => prevIndex + 1);
      setIsDragging(false);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div
      className={`flex items-center justify-center ${
        isDragging ? 'cursor-grabbing' : 'cursor-grab'
      }`}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onTouchStart={handleMouseDown}
      onTouchMove={handleMouseMove}
      onTouchEnd={handleMouseUp}
    >
      <img
        src={images[currentImageIndex]}
        alt={`Image ${currentImageIndex + 1}`}
        className="w-full max-w-sm sm:max-w-md"
      />
    </div>
  );
};

export default SwipeableImages;
*/
  