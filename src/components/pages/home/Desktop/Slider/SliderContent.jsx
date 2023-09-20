import React, { useRef, useEffect } from "react";
import { MyDataContext } from "../../../../../context/DataContext";

const SliderContent = ({
  handlesSwitchUrlap,
  sliderAdv,
  sliderCurrentIndex,
  contentsize,
  handleSize,
}) => {
  const contentRef = useRef(null);
  const { size } = MyDataContext();

  useEffect(() => {
    handleSize(contentRef);
  }, [contentRef, size]);

  return (
    <div className="flex overflow-hidden border-0 border-red-400 h-96 w-full  lg:w-auto">
      {sliderAdv?.map((item, index) => (
        <div
          key={index}
          className="flex-shrink-0 rounded-2xl  w-full border-0 border-sky-400 m-0 overflow-hidden h-auto"
          style={{
            backgroundImage: `url("${item.image}")`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            transform: `translateX(-${
              sliderCurrentIndex * contentsize?.width
            }px)`,
            transition: "transform 0.3s ease-in-out",
          }}
          ref={contentRef}
        >
          <h1
            className={`${item.maintextSpecifiedcolor} text-2xl text-gradient mx-20 mt-10 border-0 border-lime-400 fixed bottom-10`}
            style={{
              color: item.maintextCustomColor,
            }}
          >
            {item.maintext}
          </h1>

          {item.subtext ? (
            <p
              className={`${item.subtextSpecifiedColor} fixed bottom-0 font-bold text-base m-2 mx-20 w-96`}
              style={{
                color: item.subtextCustomColor,
              }}
            >
              {item.subtext}
            </p>
          ) : (
            ""
          )}

          {item.buttontext ? (
            <button
              onClick={handlesSwitchUrlap}
              className={` ${item.buttontextSpecifiedColor}  ${item.buttonSpecifiedBackgroundcolor} fixed  right-0 bottom-0 font-bold m-2 mx-20 p-2 w-36 md:w-36 max-w-sm bg-success border-0 rounded text-center cursor-pointer   border-lime-400 `}
              style={{
                color: item.buttontextCustomColor,
                backgroundColor: item.buttonCustomBackgroundColor,
              }}
            >
              {item.buttontext ? item.buttontext : ""}
            </button>
          ) : (
            ""
          )}
        </div>
      ))}
    </div>
  );
};

export default SliderContent;
