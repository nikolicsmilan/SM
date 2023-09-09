import React from "react";
import { motion } from "framer-motion";
import { modelAnimation } from "../config/motion";

const ErrorModal = ({ error, onClose }) => {
  return (
    <div
      className="z-50 fixed inset-0 flex justify-center items-center bg-black bg-opacity-50"
   
    >
      <motion.div
        className="bg-white p-4 rounded-xl shadow-lg text-center border-2 w-96  m-2 lg:m-0 border-success"
        {...modelAnimation("down")}
      >
        <h2 className="font-bold my-2">Kérlek figyelj!</h2>
        <p>{error}</p>
        <button
          onClick={() => {
            onClose();
          }}
          className="mt-4 px-4 py-2 bg-success text-white rounded"
        >
          Rendben
        </button>
      </motion.div>
    </div>
  );
};

export default ErrorModal;

/*
import React from "react";
import { motion } from "framer-motion";

const ErrorModal = ({ error, onClose }) => {
  return (
    <motion.div
      className="modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="modal-content">
        <h2>Error</h2>
        <p>{error.message}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </motion.div>
  );
};

export default ErrorModal;

*/
