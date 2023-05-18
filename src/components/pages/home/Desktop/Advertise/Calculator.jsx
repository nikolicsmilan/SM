import React from "react";
import { useNavigate } from "react-router-dom";

const Calculator = () => {
  const navigate = useNavigate();
  function handleSwitchCalculator() {
    navigate("/calculator");
  }

  return (
    <div className="border-4 w-1/3 mt-5 rounded-3xl bg-gradient">
      <h1 className="text-2xl text-white mx-20 mt-5">
        Szeretne többet megtudni?
      </h1>
      <p className="text-base text-white m-4 mx-20">
        Használja a kalkulátort! 
      </p>
      <button
        onClick={handleSwitchCalculator}
        className="m-2 mx-20 p-2 w-36 md:w-36 max-w-sm bg-success border-2 border-secondary rounded text-center cursor-pointer"
      >
        Kiszámolom!
      </button>
    </div>
  );
};

export default Calculator;
