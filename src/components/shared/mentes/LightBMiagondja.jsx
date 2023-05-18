const ButtonLight = ({
    height,
    onClick,
    text,
    direction,
    currentIndex,
    numimages,
  }) => {
    const allow = () => {
      console.log("currentIndex",currentIndex)
      if (currentIndex === 0 && direction === "left") {
        return "opacity-50 cursor-not-allowed";
      } else if (direction === "right" && currentIndex >= numimages - 1) {
        return "opacity-50 cursor-not-allowed";
      }
     return ""
    };
  
    return (
      <div
        className={`flex w-1/4 ${
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