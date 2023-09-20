import React, { useState } from "react";
import { SketchPicker } from "react-color";

const ColorRadioButtons = ({
  currentColor,
 /* setCurrentColor,
  handleColorChange,
  setProperty,
  property,
  config,
  updateProperty,*/
  updateColor,
}) => {
  const [selectedColor, setSelectedColor] = useState("E");
  const [showSketchPicker, setShowSketchPicker] = useState(false);

  const colors = {
    A: "text-primary",
    B: "text-secondary",
    C: "text-success",
    D: "text-info",
    E: "text-dark",
  };
  // Az kellene hogy A,B,C,D,E esetén és ha a maintext a selectedText
  //stylemaintext legyen a color és maintextcolor legyen üres
  //Ha egyéni akkor maintextcolor
  const handleColorOptionChange = (color) => {
    if (color === "custom") {
      setShowSketchPicker(true);
    } else {
      setSelectedColor(color);
      setShowSketchPicker(false);
    }
  };

  const newColorChange = (type,color) => {
    console.log("newColorChange type",type,"color: ",color)
    if(type==='specified'){
      console.log("newColorChange run  specified branch","type: ",type,"color: ",colors[color])
      updateColor(type,colors[color]);
    }else{
      console.log("newColorChange run  custom branch")
      updateColor(type,`#${color.hex.substr(1)}`);
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
    </div>
  );
};

export default ColorRadioButtons;
/*  onChangeComplete={(color) => {updateProperty(property,`#${color.hex.substr(1)}`);setCurrentColor(`#${color.hex.substr(1)}`)}} */
/**  const kulonColorChange = (property, value) => {
    console.log("kulonColorChange: property", property);
    let updatedProperty = property; // Initialize with the current property value

    if (config.bgcolor) {
      console.log("Ág: 1");
      updatedProperty = "buttonbackgroundcolor";
    } else if (property === "maintext") {
      console.log("Ág: 2");
      updatedProperty = "maintextcolor";
    } else if (property === "subtext") {
      console.log("Ág: 3");
      updatedProperty = "subtextcolor";
    } else if (property === "buttontext") {
      console.log("Ág: 4");
      updatedProperty = "buttoncolor";
    }
    setCurrentColor(value);
    updateProperty(updatedProperty, value);
  }; */

/** const handleColorOptionChange = (color) => {
    console.log(
      "handleColorOptionChange color:",
      colors[color],
      "property: ",
      property
    );

    let updatedProperty = property; // Initialize with the current property value

    if (config.bgcolor) {
      console.log("Ág: 1");
      updatedProperty = "buttonbackgroundcolor";
    } else if (property === "maintext") {
      console.log("Ág: 2");
      updatedProperty = "maintextcolor";
    } else if (property === "subtext") {
      console.log("Ág: 3");
      updatedProperty = "subtextcolor";
    } else if (property === "buttontext") {
      console.log("Ág: 4");
      updatedProperty = "buttoncolor";
    }

    if (color === "custom") {
      setShowSketchPicker(true);
    } else {
      setSelectedColor(color);
      setShowSketchPicker(false);
      const tailwindColorClass = `#${colors[color]}`;
      updateProperty(updatedProperty, tailwindColorClass);
    }
  }; */
