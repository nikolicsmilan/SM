import React from "react";
import NavFirstLast from "./NavFirstLast";
import NavInter from "./NavInter";
import useWindowSize from "../../../../hooks/use-windowsize";

const Formnavigation = ({ step, formData }) => {
  const { width, height } = useWindowSize();
  // Itt kell megoldani a dolgot
  return (
    <div>
      <div className=" z-1 flex w-full justify-center items-center border-0 my-0 lg:my-10">
        <div className="z-1 flex justify-between w-full lg:w-1/2 border-0 px-10">
          <div className="border-1 z-1 border-sky-400  flex items-center w-full">
            {formData.map((item, index) => (
              <>
                {index === 0 ? (
                  <NavFirstLast
                    step={step}
                    index={index}
                    item={item}
                    width={width}
                    height={height}
                  />
                ) : (
                  <>
                    <NavInter
                      step={step}
                      index={index}
                      item={item}
                      width={width}
                      height={height}
                    />
                  </>
                )}
              </>
            ))}
          </div>
        </div>
      </div>
      {width < 1024 || width < height || 300 > height
        ? (<p className="my-1 font-bold">{formData[step.num - 1]?.stage}</p>)
        : ""}
    </div>
  );
};

export default Formnavigation;
