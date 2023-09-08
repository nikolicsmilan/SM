import React from "react";
import { FaSearchPlus } from "react-icons/fa";
import { FaSearchMinus } from "react-icons/fa";
import { FaRegWindowClose } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";
import Logo from "../navigation/Logo";
// Redundant component only the it's high important 
const LighBoxHeader = ({ handleModalClose, handleImage, clicked }) => {
  return (
    <div className="flex border-0 bg-secondary w-full p-2 items-center h-14  relative z-50">
      <div className="w-1/12 border-0  ">
        <Logo />
      </div>
      <div className="w-full mx-2 flex border-0  justify-center">
        <p className="text-info">Képnézegető</p>
      </div>
      <div className="w-1/12 flex justify-end border-0 text-xl">
      <div className="m-3">
        { /* <SlBasket />*/}
        </div>
        <div className="m-3">
       
          { /* <   <FaPlay /> />*/}
        </div>
      
        <div className="m-3 cursor-pointer relative z-50">
          <FaRegWindowClose onClick={() => handleModalClose()} />
        </div>
      </div>
    </div>
  );
};

export default LighBoxHeader;

/*

  <div className="m-3">
          {clicked ? (
            <FaSearchMinus onClick={() => handleImage()} />
          ) : (
            <FaSearchPlus onClick={() => handleImage()} />
          )}
        </div>
*/