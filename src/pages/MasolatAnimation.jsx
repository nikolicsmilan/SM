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

<AnimatePresence>
<div
  className="border-0 border-red-400 flex justify-center items-center"
  onMouseEnter={handleMouseEnter}
  onMouseLeave={handleMouseLeave}
>
  <div className="border-0 p-20 border-lime-400 flex flex-col items-center justify-center my-10 rounded-2xl">
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
        <motion.img src={kiulo} alt="logo" className="w-full h-full" />
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