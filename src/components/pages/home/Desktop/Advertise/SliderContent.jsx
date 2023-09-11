import React, { useRef, useEffect } from "react";
import { MyDataContext } from "../../../../../context/DataContext";
import { useNavigate } from "react-router-dom";
import { useStyleContext } from "../../../../../context/StyleContext";
const SliderContent = ({
  handlesSwitchUrlap,
  sliderAdv,
  sliderCurrentIndex,
  contentsize,
  handleSize,
}) => {
  const contentRef = useRef(null);
  const { size } = MyDataContext();
  const { style } = useStyleContext();
  const navigate = useNavigate();
  useEffect(() => {
    handleSize(contentRef);
  }, [contentRef, size]);
  return (
    <div className="flex overflow-hidden border-0 h-96">
      {sliderAdv?.map((item, index) => (
        <div
          key={index}
          className="flex-shrink-0 rounded-2xl  w-full border-0 m-0 overflow-hidden h-auto"
          style={{
            backgroundImage: `url("${item.image}")`,
            backgroundSize: "cover", // Adjust as needed
            backgroundRepeat: "no-repeat", // Adjust as needed
            backgroundPosition: "center center",
            transform: `translateX(-${
              sliderCurrentIndex * contentsize?.width
            }px)`,
            transition: "transform 0.3s ease-in-out",
          }}
          ref={contentRef}
        >
          <h1
            className={`${item.stylemaintext} text-2xl text-gradient mx-20 mt-10 border-0 border-lime-400 fixed bottom-10`}
            style={{
              color: '#3e5a20', // Replace 'yourColorValue' with your desired color
              backgroundColor: "yourBackgroundColorValue", // Replace 'yourBackgroundColorValue' with your desired background color
              fontSize: "yourFontSizeValue", // Replace 'yourFontSizeValue' with your desired font size (e.g., '16px')
            }}
          >
            {item.maintext}
          </h1>
          {console.log('kívánicsi vagyok rá hogy ez mi?',item.stylemaintext)}
          <p
            className={`${item.stylesubtext} fixed bottom-0 font-bold text-base text-stone-700 m-2 mx-20 w-96`}
          >
            {item.subtext}
          </p>
          <button
            onClick={handlesSwitchUrlap}
            className={`border-lime-400 ${item.styleButton} fixed  right-0 bottom-0 font-bold m-2 mx-20 p-2 w-36 md:w-36 max-w-sm bg-success border-0 rounded text-center cursor-pointer bg-gradient text-white border-lime-400`}
          >
            {item.button ? item.button : "Megveszem!"}
          </button>
        </div>
      ))}
    </div>
  );
};

export default SliderContent;
