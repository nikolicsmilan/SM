import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo2 from "../assets/Logo2.png"
import {
    headContainerAnimation,
    headContentAnimation,
    headTextAnimation,
    slideAnimation
  } from '../config/motion';
const ThreeD = () => {
  return (
    <main className="app transition-all ease-in">
    <AnimatePresence>
             <motion.header {...slideAnimation("left")}>
            <img 
              src={Logo2}
              alt="logo"
              className="w-8 h-8 object-contain"
            />
          </motion.header>
    </AnimatePresence>
    </main>
  )
}

export default ThreeD