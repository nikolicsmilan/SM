import React from "react";

const ButtonLight = ({
  height,
  onClick,
  text,
  direction,
  currentIndex,
  numimages,
}) => {
  // console.log("height", height);
/*
  const allow = () => {
    if (currentIndex === 0 && direction === "left") {
      return "opacity-50 cursor-not-allowed";
    } else if (currentIndex >= numimages && direction === "right") {
      return "opacity-50 cursor-not-allowed";
    }
  };*/
/*
  const allow = () => {
    if (currentIndex === 0 && direction === "left") {
      return "opacity-50 cursor-not-allowed";
    } else if (currentIndex >= numimages - 1 && direction === "right") {
      return "opacity-50 cursor-not-allowed";
    }
  };*/
/*
  const allow = () => {
    if (currentIndex === 0 && direction === "left") {
      return "opacity-50 cursor-not-allowed";
    } else if (numimages && currentIndex >= numimages - 1 && direction === "right") {
      return "opacity-50 cursor-not-allowed";
    }
  };*/
/*
  const allow = () => {
    if (currentIndex === 0 && direction === "left") {
      return "opacity-50 cursor-not-allowed";
    } else if (currentIndex >= numimages - 1 && direction === "right") {
      return "opacity-50 cursor-not-allowed";
    } else {
      return "";
    }
  };*/

  const allow = () => {
    console.log("currentIndex",currentIndex)
    if (currentIndex === 0 && direction === "left") {
      return "opacity-50 cursor-not-allowed";
    } else if (direction === "right" && true) {
      return "opacity-50 cursor-not-allowed";
    }
  };
  
  
  return (
    <div
      className={`flex  w-1/4 ${
        direction === "left" ? "justify-start" : "justify-end"
      }`}
      style={{
        height: `${height}px`,
      }}
    >
      <button
        className={`w-1/12 z-200 bg-transparent text-info text-4xl font-bold ${allow()} `}
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
};

export default ButtonLight;

/*import React from "react";

const ButtonLight = ({ height,onClick,text,direction }) => {
 // console.log("height", height);
  return (
    <div
      className="flex border-2 items-center w-1/4"
      style={{
        height: `${height}px`,
      }}
    >
      <button
        className="w-1/12 z-200 bg-transparent text-info text-4xl font-bold mx-5"
        onClick={onClick}
      >{text}</button>
    </div>
  );
};

export default ButtonLight; */

/*const ButtonLight = ({ height, onClick, text, direction }) => {
  // console.log("height", height);
  return (
    <div
      className={`flex  w-1/4 ${direction ==='left'? 'justify-start':'justify-end'}`}
      style={{
        height: `${height}px`,
      }}
    >
      <button
        className="w-1/12 z-200 bg-transparent text-info text-4xl font-bold"
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
};

export default ButtonLight; */

/*
${
          currentIndex === 0 && direction === "left"
            ? "opacity-50 cursor-not-allowed"
            : "" || (currentIndex > numimages && direction === "right")
            ? "opacity-50 cursor-not-allowed"
            : " border-4 border-red-400"
        }
*/
