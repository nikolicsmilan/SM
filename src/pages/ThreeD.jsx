import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BottomConsole from "../components/pages/threeD/BottomConsole";
import MyScene from "../components/pages/threeD/MyScene";
import CustomButton from "../components/pages/threeD/CustomButton";
import Logo2 from "../assets/Logo2.png";
import kiulo from "../assets/kiulo.jpg";
import { mainconsole, sizeconsole, colorconsole } from "../data/console";
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
  const { menu3D, setMenu3D } = useStyleContext();
  const [subConsoleMenu, setSubConsoleMenu] = useState("");
  const [toggle, setToggle] = useState(false);
  const [subButtons, setSubButtons] = useState(sizeconsole);
  const handleMenuChange = (name) => {
    if (name === "size") {
      setSubButtons(sizeconsole);
    } else if (name === "color") {
      setSubButtons(colorconsole);
    }
  };

  const handleSubMenuChange = (property, value) => {
    setMenu3D((prevState) => ({
      ...prevState,
      [property]: value,
    }));
  };
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
        <div className="border-0 border-red-400 flex justify-center items-center h-screen">
          <div
            className="border-2 p-20 border-primary flex flex-col items-center justify-center my-10 rounded-2xl"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="flex  my-0 ">
              <div className="relative border-0 border-sky-400 h-96 w-10">
                {toggle && (
                  <motion.div
                    className=" absolute top-0  z-10 glassmorphism w-16 h-96 rounded m-2 flex flex-col items-center justify-start"
                    {...myAnimation("left")}
                  >
                    {mainconsole.map((item) => (
                      <div
                        className="text-3xl text-info m-2 flex flex-col justify-center"
                        onClick={() => handleMenuChange(item.name)}
                      >
                        <span className="border-0 flex justify-center">
                          {item.icon}
                        </span>
                        <p className="text-base">{item.displayname}</p>
                      </div>
                    ))}
                  </motion.div>
                )}
              </div>
              <div className="relative right-5 top-5 w-96 h-96 border-0 border-lime-400 flex items-center justify-center">
                <ModelViewer width={500} height={500} menu3D={menu3D} />
              </div>
            </div>

            <div className=" flex flex-col justify-center items-center relative border-0 border-sky-400 h-10 w-96 my-0">
              {toggle && (
                <motion.div
                  className="top-0 z-10 glassmorphism w-96 h-16 rounded m-0 flex flex-row items-center justify-start"
                  {...myAnimation("up")}
                >
                  <BottomConsole
                    buttons={subButtons}
                    handleSubMenuChange={handleSubMenuChange}
                  />
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </AnimatePresence>
      
      <h1> Color:{menu3D.color}</h1> 
      <h1> Size:  {menu3D.size}</h1>
   
      <p className="text-info text-base">
        * This work is based
        <a
          href="https://sketchfab.com/3d-models/tv-unit-furniture-cfb211faac924b978f3d0f6bc10cd55f"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          on "TV UNIT | FURNITURE"
        </a>
        <a
          href="https://sketchfab.com/SonerTIFTIK"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          by SonerTIFTIK
        </a>
        <a
          href="http://creativecommons.org/licenses/by/4.0/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          licensed under CC-BY-4.0
        </a>
      </p>
    </main>
  );
};

export default ThreeD;
//'/tv_unit__furniture/textures/Material_6_baseColor.jpeg'
//<ModelViewer/>

/* <span className="text-3xl text-info m-2 flex flex-col">
                      <FaTools />
                      <p className="text-base">Tools</p>
                    </span>
                    <span className="text-3xl text-info m-2">
                      <FaCalculator />
                    </span>
                    <span className="text-3xl text-info m-2">
                      <FaInfoCircle />
                    </span> */
