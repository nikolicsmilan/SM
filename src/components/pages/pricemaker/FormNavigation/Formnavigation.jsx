import React from "react";
import NavFirstLast from "./NavFirstLast";
import NavInter from "./NavInter";

const Formnavigation = ({ step, formData }) => {
  // Itt kell megoldani a dolgot
  return (
    <div>
    <div className=" z-1 flex w-full justify-center items-center border-0 my-10">
      <div className="z-1 flex justify-between w-full lg:w-1/2 border-0 px-10">
        <div className="border-0 z-1 border-sky-400  flex items-center w-full">
          {formData.map((item, index) => (
            <>
              {index === 0 ? (
                <NavFirstLast step={step} index={index} item={item} />
              ) : (
                <>
                  <NavInter step={step} index={index} item={item} />
                </>
              )}
            </>
          ))}
        </div>
      </div>
    </div>
  </div>

  );
};

export default Formnavigation;

