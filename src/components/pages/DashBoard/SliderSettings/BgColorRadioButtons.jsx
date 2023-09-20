import React, { useState } from "react";
import { SketchPicker } from "react-color";

const BgColorRadioButtons = ({ currentColor, updateBgColor }) => {
  const [selectedColor, setSelectedColor] = useState("E");
  const [showSketchPicker, setShowSketchPicker] = useState(false);

  const colors = {
    A: "bg-gradient",
    B: "bg-gradient2",
    C: "bg-gradient3",
    D:""
  
  };
  const handleColorOptionChange = (color) => {
    console.log("handleColorOptionChange run")
    if (color === "custom") {
      console.log("handleColorOptionChange custom branch run")
      setShowSketchPicker(true);
    } else {
      console.log("handleColorOptionChange specified branch run")
      setSelectedColor(color);
      setShowSketchPicker(false);
    }
  };
  const newColorChange = (type,color) => {
    console.log("newColorChange type",type,"color: ",color)
    if(type==='specified'){
      console.log("newColorChange run  specified branch","type: ",type,"color: ",colors[color])
      updateBgColor(type,colors[color]);
    }else{
      console.log("newColorChange run  custom branch")
      updateBgColor(type,`#${color.hex.substr(1)}`);
    }
    
  };

  return     <div className="flex m-0">
  {Object.keys(colors).map((color) => (
    <div key={color} className="m-2 border-0 h-8">

      <input
        className="m-2"
        type="radio"
        id={color}
        name="colorOptions"
        value={color}
        checked={selectedColor === color}
        onChange={() => {
          handleColorOptionChange(color);
          newColorChange("specified", color);
        }}
      />
      <label htmlFor={color} style={{ backgroundColor: colors[color] }}>
        {color}
      </label>
    </div>
  ))}
  <div className="m-2 border-0 h-8">
    <input
      className="m-2"
      type="radio"
      id="custom"
      name="colorOptions"
      value="custom"
      checked={showSketchPicker}
      onChange={() => handleColorOptionChange("custom")}
    />
    <label htmlFor="custom">Egyedi</label>
    {showSketchPicker && (
      <SketchPicker
        color={currentColor}
        onChangeComplete={(color) => {
          newColorChange("custom", color);
        }}
      />
    )}
  </div>
</div>;
};

export default BgColorRadioButtons;
