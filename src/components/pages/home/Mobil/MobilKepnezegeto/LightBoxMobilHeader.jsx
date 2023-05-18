import React from 'react'
import Logo from "../../../../navigation/Logo";
import { SlBasket } from "react-icons/sl";
import { FaSearchPlus } from "react-icons/fa";
import { FaSearchMinus } from "react-icons/fa";
import { FaRegWindowClose } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
const LightBoxMobilHeader = ({ handleModalClose, handleImage, clicked }) => {
  return (
    <div className="flex border-0 bg-secondary w-full p-0 items-center  my-0 m-0">
      <div className="w-1/6 border-0  ">
        <Logo />
      </div>
      <div className="w-full mx-2 flex border-0  justify-center">
       
      </div>
      <div className="w-1/12 flex justify-end border-0 text-xl">
      <div className="m-3">
          <SlBasket />
        </div>
        <div className="m-3">
          <FaPlay />
        </div>
        <div className="m-3">
          {clicked ? (
            <FaSearchMinus onClick={() => handleImage()} />
          ) : (
            <FaSearchPlus onClick={() => handleImage()} />
          )}
        </div>
        <div className="m-3">
          <FaRegWindowClose onClick={() => handleModalClose()} />
        </div>
      </div>
    </div>
  )
}

export default LightBoxMobilHeader