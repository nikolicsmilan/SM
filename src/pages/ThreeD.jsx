import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BottomConsole from "../components/pages/threeD/BottomConsole";
import {
  mainconsole,
  sizeconsole,
  colorconsole,
  roofconsole,
  rotateconsole,
} from "../data/console";
import { myAnimation, mymobileAnimation } from "../config/motion";
import { useStyleContext } from "../context/StyleContext";
import { MyDataContext } from "../context/DataContext";
import ModelViewer from "../components/pages/threeD/ModelViewer";

const ThreeD = () => {
  const { menu3D, setMenu3D } = useStyleContext();
  const { size } = MyDataContext();
  const [toggle, setToggle] = useState(false);
  const [subButtons, setSubButtons] = useState(sizeconsole);
  const handleMenuChange = (name) => {
    if (name === "size") {
      setSubButtons(sizeconsole);
    } else if (name === "color") {
      setSubButtons(colorconsole);
    } else if (name === "roof") {
      setSubButtons(roofconsole);
    } else if (name === "rotate") {
      setSubButtons(rotateconsole);
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
      <AnimatePresence>
        <div className="border-0 border-red-400 flex justify-center items-center h-screen">
          <div
            className="border-0 p-20 border-primary flex flex-col items-center justify-center my-10 rounded-2xl"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="flex  my-0 ">
              <div className="relative border-0 border-sky-400 h-96 w-10">
                {toggle && (
                  <motion.div
                    className=" absolute top-0 md:top-10  z-10 glassmorphism h-16 md:w-16 md:h-96 rounded m-2 flex flex-row md:flex-col  items-center justify-start border-0 border-red-400"
                    {...myAnimation(size.width > 640 ? "desktop" : "mobile")}
                  >
                    {mainconsole.map((item) => (
                      <div
                        className="cursor-pointer text-3xl text-info m-2 flex flex-col justify-center"
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
              <div className="relative right-5 top-0 w-200 h-200 border-0 border-lime-400 flex items-center justify-center">
                <ModelViewer
                  width={size.width > 640 ? 700 : 300}
                  height={500}
                  menu3D={menu3D}
                />
              </div>
            </div>

            <div className=" flex flex-col justify-center items-center relative border-0 border-sky-400 h-10 w-96 my-0">
              {toggle && (
                <motion.div
                  className="cursor-pointer top-10 z-10 glassmorphism w-120 h-16 rounded m-0 flex flex-row items-center justify-start"
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
    </main>
  );
};

export default ThreeD;

