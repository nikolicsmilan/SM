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

  //console.log('In SliderContent sliderAdv state: ',sliderAdv)
  return (
    <div className="flex overflow-hidden border-0 border-red-400 h-96 w-full  lg:w-auto">
      {sliderAdv?.map((item, index) => (
        <div
          key={index}
          className="flex-shrink-0 rounded-2xl  w-full border-0 border-sky-400 m-0 overflow-hidden h-auto"
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
              color: item.maintextcolor,
            }}
          >
            {/*console.log("Közvetlenül előtte: ",item.stylemaintext)*/}
            {item.maintext}
          </h1>
          {/*console.log('kívánicsi vagyok rá hogy ez mi?',item.stylemaintext)*/}

          {item.subtext ? (
            <p
              className={`${item.stylesubtext} fixed bottom-0 font-bold text-base text-stone-700 m-2 mx-20 w-96`}
              style={{
                color: item.subtextcolor,
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
              className={`border-lime-400 ${item.styleButton} fixed  right-0 bottom-0 font-bold m-2 mx-20 p-2 w-36 md:w-36 max-w-sm bg-success border-0 rounded text-center cursor-pointer  text-white border-lime-400 `}
              style={{
                color: item.buttoncolor,
                backgroundColor: item.buttonbackgroundcolor,
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
/*<p className="text-red-400">
            item.buttonbackgroundcolor: {item.buttonbackgroundcolor}
          </p> */