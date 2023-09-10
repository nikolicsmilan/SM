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
    <div className="flex overflow-hidden border-0 h-96">
      {reklam?.map((item, index) => (
        <div
          key={index}
          className="flex-shrink-0 rounded-2xl  w-full border-0 m-0 overflow-hidden h-auto"
          style={{
            backgroundImage: `url("${item.image}")`,
            backgroundSize: "cover", // Adjust as needed
            backgroundRepeat: "no-repeat", // Adjust as needed
            backgroundPosition: "center center",
            transform: `translateX(-${currentIndex * contentsize?.width}px)`,
            transition: "transform 0.3s ease-in-out",
          }}
          ref={contentRef}
        >
          <h1 className="text-2xl text-gradient  mx-20 mt-10 border-0 border-lime-400 fixed bottom-10">{item.foszoveg}</h1>
          <p className="fixed bottom-0 font-bold text-base text-stone-700 m-2 mx-20 w-96">{item.alszoveg}</p>
          <button
            onClick={handlesSwitchUrlap}
            className={`border-lime-400 ${item.stylegomb} fixed  right-0 bottom-0 font-bold m-2 mx-20 p-2 w-36 md:w-36 max-w-sm bg-success border-0 rounded text-center cursor-pointer bg-gradient text-white border-lime-400`}
          >
           {item.gomb ?item.gomb : 'Megveszem!'}
          </button>
        </div>
      ))}
    </div>
  );
};

export default AddContent;
