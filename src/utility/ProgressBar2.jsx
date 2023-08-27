import React from "react";
import { motion } from "framer-motion";

const ProgressBar2 = ({progress}) => {
  return (
    <div className="f">
      <span className="mb-4"><h3 className="text-center">Feltöltve: {progress}%</h3></span>
      <div className="relative w-1/4 h-2 bg-primary">
        <motion.div
          className="absolute top-0 left-0 h-full bg-stone-500"
          initial={{ width: 0 }}
          animate={{ width: progress }}
          transition={{ duration: 1 }}
        />
      </div>
    </div>
  );
};

export default ProgressBar2;
// <div className="fixed inset-0 flex flex-col items-center justify-center bg-gray-200">