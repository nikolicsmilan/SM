import React, { useRef, useEffect } from "react";
import { MyDataContext } from "../../../../../context/DataContext";
import { useNavigate } from "react-router-dom";
import { useStyleContext } from "../../../../../context/StyleContext";
const AddContent = ({
  handlesSwitchUrlap,
  reklam,
  currentIndex,
  contentsize,
  handleSize,
}) => {
  const contentRef = useRef(null);
  const { size } = MyDataContext();
  const { style} = useStyleContext();
  const navigate = useNavigate();
  useEffect(() => {
    handleSize(contentRef);
  }, [contentRef, size]);
  return (
    <div className="flex overflow-hidden border-0">
      {reklam?.map((item, index) => (
        <div
          key={index}
          className="flex-shrink-0  w-full border-0 m-0 overflow-hidden"
          style={{
            transform: `translateX(-${currentIndex * contentsize?.width}px)`,
            transition: "transform 0.3s ease-in-out",
          }}
          ref={contentRef}
        >
          <h1 className="text-2xl text-white mx-20 mt-10">{item.foszoveg}</h1>
          <p className="text-base text-white m-2 mx-20 w-96">{item.alszoveg}</p>
          <button
            onClick={handlesSwitchUrlap}
            className="m-2 mx-20 p-2 w-36 md:w-36 max-w-sm bg-success border-2 border-secondary rounded text-center cursor-pointer"
          >
            Vásárlás most!
          </button>
        </div>
      ))}
    </div>
  );
};

export default AddContent;
