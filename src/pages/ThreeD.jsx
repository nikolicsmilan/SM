import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
const ThreeD = () => {
  const { snap, setSnap } = useStyleContext();
  const [toggle, setToggle] = useState(false);
  const handleMouseEnter = () => {
    setToggle(true);
  };

  const handleMouseLeave = () => {
    setToggle(false);
  };

  return (
    <main className="app transition-all ease-in">
      <AnimatePresence>
        <div
          className="border-0 border-red-400 flex justify-center items-center"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
       
        >
<div className="relative border-0 border-sky-400 h-96 w-10 my-10">
          {toggle && (
            <motion.div
              className=" absolute top-10 z-10 glassmorphism w-16 h-56 rounded m-2 flex flex-col items-center justify-start"
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
          <div className="w-96 h-96 object-contain border-0 border-lime-400">
            <motion.img
              src={kiulo}
              alt="logo"
              className="w-full h-full"
             
            />
          </div>
        </div>
      </AnimatePresence>
    </main>
  );
};

export default ThreeD;






/*


import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
const ThreeD = () => {
  const { snap, setSnap } = useStyleContext();
  const [toggle, setToggle] = useState(false);
  const handleMouseEnter = () => {
    setToggle(true);
  };

  const handleMouseLeave = () => {
    setToggle(false);
  };

  return (
    <main className="app transition-all ease-in">
      <AnimatePresence>
        <div
          className="border-2 border-red-400 flex justify-center items-center"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
       
        >
          {toggle && (
            <motion.div
              className="glassmorphism w-16 h-56 rounded m-2 flex flex-col items-center justify-start"
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
          <img src={kiulo} alt="logo" className="w-96 h-96 object-contain" />
        </div>
      </AnimatePresence>
    </main>
  );
};

export default ThreeD;*/

/*
 {snap.intro && (
          <motion.section className="home" {...slideAnimation("left")}>
            <motion.header {...slideAnimation("down")}>
              <img src={Logo2} alt="logo" className="w-8 h-8 object-contain" />
            </motion.header>

            <motion.div className="home-content" {...headContainerAnimation}>
              <motion.div {...headTextAnimation}>
                <h1 className="head-text">
                  LET'S <br className="xl:block hidden" /> DO IT.
                </h1>
              </motion.div>
              <motion.div
                {...headContentAnimation}
                className="flex flex-col gap-5"
              >
                <p className="max-w-md font-normal text-gray-600 text-base">
                  Create your unique and exclusive shirt with our brand-new 3D
                  customization tool. <strong>Unleash your imagination</strong>{" "}
                  and define your own style.
                </p>

                <CustomButton
                  type="filled"
                  title="Customize It"
                  handleClick={() =>
                    setSnap((prevSnap) => ({ ...prevSnap, intro: false }))
                  }
                  customStyles="w-fit px-4 py-2.5 font-bold text-xl"
                />
              </motion.div>
            </motion.div>
          </motion.section>
        )}

*/
/*
<div className="glassmorphism w-16 h-56 rounded m-2">
ez mi?
      </div>

/*
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CustomButton from "../components/pages/threeD/CustomButton";
import Logo2 from "../assets/Logo2.png";
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  fadeAnimation,
  slideAnimation,
  textAnimation,
} from "../config/motion";

import TypingAnimation from "../components/pages/threeD/TypingAnimation";

import { useStyleContext } from "../context/StyleContext";
const ThreeD = () => {
  const {snap}=useStyleContext()

  const [toggle, setToggle] = useState(false);
  const [szoveg, setSzoveg] = useState(
    "Ez egy szöveg sdfsd fsdfsdf fsdfsd fsdfsda"
  );
  const [count, setCount] = useState(0);
  const [text2, setText2] = useState("Welcome to the Typing Animation");
  const toggleHandler = () => {
    setToggle((prevState) => !prevState);
  };
  const handleMouseEnter = () => {
    setToggle(true);
  };

  const handleMouseLeave = () => {
    setToggle(false);
  };

  const szovegHandler = () => {
    const arr = [
      "nsdfnskd fsdfdsfa dfsgad",
      "aaaaaaaaa a a aaaaaaaaaaa   aaa ",
      "Kkkkkkk vdsvkdsvkk k k k k  k k k k k k k k k",
    ];
    setCount(count + 1);
    setSzoveg(arr[count]);
  };

  const letterAnimation = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  };

  const [content, setContent] = useState("Initial Content");

  const changeContent = () => {
    setContent("New Content");
  };
  const text =
    "Welcome to the Typing Animation Welcome to the Typing Animation Welcome to the Typing Animation";

  useEffect(() => {
    // Split the text into individual characters
    const characters = text.split("");

    // Animate each character with a delay
    characters.forEach((char, index) => {
      setTimeout(() => {
        setText2((prevText) => prevText + char);
      }, 100 * index);
    });
  }, []);
  return (
    <main className="app transition-all ease-in">
      <div className="">
        <AnimatePresence>
          {toggle && (
            <motion.header {...slideAnimation("left")}>
              <img
                src={Logo2}
                alt="logo"
                className="w-18 h-8 object-contain border-2"
              />
            </motion.header>
          )}

          <motion.div {...fadeAnimation}>fadeAnimation</motion.div>

          <motion.div {...headContainerAnimation}>
            headContainerAnimation
          </motion.div>
          <motion.div {...headContentAnimation}>
            headContentAnimation
          </motion.div>




          <motion.div className="home-content" {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
              <h1 className="head-text">
                LET'S <br className="xl:block hidden" /> DO IT.
              </h1>
            </motion.div>
            <motion.div
              {...headContentAnimation}
              className="flex flex-col gap-5"
            >
              <p className="max-w-md font-normal text-gray-600 text-base">
              Create your unique and exclusive shirt with our brand-new 3D customization tool. <strong>Unleash your imagination</strong>{" "} and define your own style.
              </p>

              <CustomButton 
                type="filled"
                title="Customize It"
                handleClick={() => snap.intro = false}
                customStyles="w-fit px-4 py-2.5 font-bold text-sm"
              />
            </motion.div>
            </motion.div>
        </AnimatePresence>
      </div>

    
      <div className="my-10">
        <div className="my-10">
          <button
            className="m-2 p-2 border-2 border-primary rounded w-24"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Click
          </button>
        </div>
      </div>

      <div></div>
      <TypingAnimation />
    </main>
  );
};

export default ThreeD;
*/
