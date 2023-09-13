import React from "react";
import { useNavigate } from "react-router-dom";
import { useStyleContext } from "../../../../../context/StyleContext";
import team from "../../../../../assets/slider/team3.jpg";
const Articels = () => {
  const { style } = useStyleContext();
  const navigate = useNavigate();
  function handleSwitchCalculator() {
    navigate("/calculator");
  }

  return (
    <div
      className={`h-96 my-1 bg-info relative z-10 border-0 w-1/4 mb-0 rounded-3xl ${
        style !== "dio" ? "bg-gradient" : ""
      }`}
      style={{
        backgroundImage: `url(${team})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        display: "flex", // Use flexbox
        flexDirection: "column", // Stack children vertically
        justifyContent: "space-between", // Push elements to top and bottom
      }}
    >
      <h1 className="text-xl  mx-20 mt-4 text-white font-bold ">
        Segíthetünk elkölteni a pénzét?
      </h1>

      <div className="flex-grow" />
      <button
        onClick={handleSwitchCalculator}
        className="m-2 mx-20 p-2 w-36 md:w-36 max-w-sm bg-gradient border-0 border-secondary rounded text-center cursor-pointer text-white font-bold"
      >
        Igen!
      </button>
    </div>
  );
};

export default Articels;
