import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MyScene from "../components/pages/threeD/MyScene";
import CustomButton from "../components/pages/threeD/CustomButton";
import Logo2 from "../assets/Logo2.png";
import kiulo from "../assets/kiulo.jpg";
import { FaInfoCircle } from "react-icons/fa";
import { FaTools } from "react-icons/fa";
import { FaCalculator } from "react-icons/fa";
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  fadeAnimation,
  slideAnimation,
  textAnimation,
  myAnimation,
} from "../config/motion";

import { useStyleContext } from "../context/StyleContext";
import ModelViewer from "../components/pages/threeD/ModelViewer";

const ThreeD = () => {
  const [toggle, setToggle] = useState(false);
  const handleMouseEnter = () => {
    setToggle(true);
  };

  const handleMouseLeave = () => {
    setToggle(false);
  };

  return (
    <main className="app transition-all ease-in ">
      <h1 className="text-center text-xl font-bold">
        Az oldal még fejlesztés alatt van...
      </h1>
  
<AnimatePresence>
<div
  className="border-0 border-red-400 flex justify-center items-center h-screen"
 
>
  <div className="border-2 p-20 border-primary flex flex-col items-center justify-center my-10 rounded-2xl"  onMouseEnter={handleMouseEnter}
  onMouseLeave={handleMouseLeave}>
    <div className="flex  my-0 ">
      <div className="relative border-0 border-sky-400 h-96 w-10">
        {toggle && (
          <motion.div
            className=" absolute top-20  z-10 glassmorphism w-16 h-56 rounded m-2 flex flex-col items-center justify-start"
            {...myAnimation("left")}
          >
            <span className="text-3xl text-info m-2">
              <FaTools />
            </span>
            <span className="text-3xl text-info m-2">
              <FaCalculator />
            </span>
            <span className="text-3xl text-info m-2">
              <FaInfoCircle />
            </span>
          </motion.div>
        )}
      </div>
      <div className="relative right-5 top-5 w-96 h-96 border-0 border-lime-400 flex items-center justify-center">
      <ModelViewer width={500} height={500}/>
      </div>
    </div>

    <div className=" flex flex-col justify-center items-center relative border-0 border-sky-400 h-10 w-96 my-0">
      {toggle && (
        <motion.div
          className="top-0 z-10 glassmorphism w-56 h-16 rounded m-0 flex flex-row items-center justify-start"
          {...myAnimation("up")}
        >
          <span className="text-3xl text-info m-2">
            <FaTools />
          </span>
          <span className="text-3xl text-info m-2">
            <FaCalculator />
          </span>
          <span className="text-3xl text-info m-2">
            <FaInfoCircle />
          </span>
        </motion.div>
      )}
    </div>
  </div>
</div>
</AnimatePresence>

   <p className="text-info text-base">
   * This work is based 
   <a href="https://sketchfab.com/3d-models/tv-unit-furniture-cfb211faac924b978f3d0f6bc10cd55f" target="_blank" rel="noopener noreferrer"> on "TV UNIT | FURNITURE"</a>

   <a href="https://sketchfab.com/SonerTIFTIK" target="_blank" rel="noopener noreferrer"> by SonerTIFTIK</a>

   <a href="http://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer"> licensed under CC-BY-4.0</a>
   
   </p>
    </main>
  );
};

export default ThreeD;
//<ModelViewer/>