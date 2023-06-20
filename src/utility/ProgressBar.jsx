import React from 'react';
import { motion } from 'framer-motion';

const ProgressBar = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-200">
      <motion.div
        className="h-2 bg-stone-500"
        initial={{ width: 0 }}
        animate={{ width: '50%' }}
        transition={{ duration: 1 }}
      />Loading
    </div>
  );
};

export default ProgressBar;
