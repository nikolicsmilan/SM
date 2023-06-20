import React from "react";
import { motion } from "framer-motion";

const ProgressBar = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-gray-200">
      <span className="mb-4">Várj egy kicsit...</span>
      <div className="relative w-1/4 h-2 bg-gray-300">
        <motion.div
          className="absolute top-0 left-0 h-full bg-stone-500"
          initial={{ width: 0 }}
          animate={{ width: "50%" }}
          transition={{ duration: 1 }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;

