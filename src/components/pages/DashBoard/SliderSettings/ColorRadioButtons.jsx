
import React, { useState } from "react";
import { SketchPicker } from "react-color";

const ColorRadioButtons = ({ currentColor, handleColorChange }) => {
  const [selectedColor, setSelectedColor] = useState("E");
  const [showSketchPicker, setShowSketchPicker] = useState(false);

  const colors = {
    A: "F4A01B",
    B: "FAFAFA",
    C: "EDEDED",
    D: "BFBFBF",
    E: "000000",
  };

  const handleColorOptionChange = (color) => {
    if (color === "custom") {
      setShowSketchPicker(true);
    } else {
      setSelectedColor(color);
      setShowSketchPicker(false);
      handleColorChange(colors[color]);
    }
  };

  return (
    <div className="flex m-0">
      {Object.keys(colors).map((color) => (
        <div key={color} className="m-2 border-0 h-8">
          <input
            className="m-2"
            type="radio"
            id={color}
            name="colorOptions"
            value={color}
            checked={selectedColor === color}
            onChange={() => handleColorOptionChange(color)}
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
            onChangeComplete={(color) => handleColorChange(color.hex.substr(1))}
          />
        )}
      </div>
    </div>
  );
};

export default ColorRadioButtons;

/*import React from "react";
import { SketchPicker } from "react-color";
const SliderColorConf = ({currentColor, handleColorChange,config}) => {
  return (
    <>
    <div className="flex">
     <h1>Rádió gombok</h1>
      <SketchPicker
        className=""
        color={currentColor}
        onChangeComplete={(color) => handleColorChange(color)}
      />
    </div>
    </>
  );
};

export default SliderColorConf;*/
