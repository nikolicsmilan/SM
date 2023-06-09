import React from "react";
import NavFirstLast from "./NavFirstLast";
import NavInter from "./NavInter";

const Formnavigation = ({ step, formData }) => {
  return (
    <div>
      <div className="flex w-full justify-center  items-center border-0 my-10">
        <div className="flex justify-between w-1/2 border-0">
          <div className="border-0 border-sky-400  flex items-center w-full">
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
