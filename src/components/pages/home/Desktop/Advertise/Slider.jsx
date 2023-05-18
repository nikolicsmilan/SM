import React, { useState, useRef } from "react";
import ButtonAdv from "./ButtonAdv";
import { useNavigate } from "react-router-dom";
import { reklam } from "../../../../../data/reklam";
import AddContent from "./AddContent";
const Slider = () => {
    const navigate = useNavigate();
    const [contentsize, setContentSize] = useState({});
    const [currentIndex, setCurrentIndex] = useState(0);
    const contentRef = useRef(null);
  
    function handlesSwitchUrlap() {
      navigate("/pricemaker");
    }
  
    const prevHandler = () => {
      setCurrentIndex((currentIndex - 1 + reklam.length) % reklam.length);
    };
    const nextHandler = () => {
      setCurrentIndex((currentIndex + 1) % reklam.length);
    };
  
    const handleSize = (valami) => {
      const { width, height } = valami.current?.getBoundingClientRect() || {};
      setContentSize({ width, height });
    };
    

  return (
    <div className="border-4 w-2/3 mt-5 rounded-3xl bg-gradient flex items-center justify-between ">
    <ButtonAdv text=" ‹" onClick={prevHandler} />
    <div className="flex-grow overflow-hidden">
      <AddContent
        handlesSwitchUrlap={handlesSwitchUrlap}
        //size={size}
        reklam={reklam}
        currentIndex={currentIndex}
        handleContentRef={(ref) => (contentRef.current = ref)}
        contentsize={contentsize}
        handleSize={handleSize}
      />
    </div>
    <ButtonAdv text=" ›" onClick={nextHandler} />
  </div>
  )
}

export default Slider