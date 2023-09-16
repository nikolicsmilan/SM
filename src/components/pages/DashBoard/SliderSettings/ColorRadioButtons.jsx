import React, { useState } from "react";
import { SketchPicker } from "react-color";

const ColorRadioButtons = ({
  currentColor,
  setCurrentColor,
  handleColorChange,
  setProperty,
  property,
  config,
  updateProperty,
}) => {
  const [selectedColor, setSelectedColor] = useState("E");
  const [showSketchPicker, setShowSketchPicker] = useState(false);

  let colors=[]

  if(config.color){
    colors = {
      A: "text-red-400",
      B: "text-sky-400",
      C: "EDEDED",
      D: "BFBFBF",
      E: "000000",
    };
  } else{

    //valamit kell kezdeni A val
    colors = {
      A: "bg-gradient",
      B: "bg-success",
      C: "EDEDED",
      D: "BFBFBF",
      E: "000000",
    };
  }
 

  const handleColorOptionChange = (color) => {
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
      const tailwindColorClass = `${colors[color]}`;
      updateProperty("stylemaintext", tailwindColorClass);
    }
  };

  const kulonColorChange = (property, value) => {
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
    updateProperty("stylemaintext", value);
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
            onChangeComplete={(color) => {
              kulonColorChange(property, `#${color.hex.substr(1)}`);
            }}
          />
        )}
      </div>
    </div>
  );
};

export default ColorRadioButtons;


/*import React, { useState } from "react";
import { SketchPicker } from "react-color";

const ColorRadioButtons = ({
  currentColor,
  setCurrentColor,
  handleColorChange,
  setProperty,
  property,
  config,
  updateProperty,
}) => {
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
  };

  const kulonColorChange = (property, value) => {
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
            onChangeComplete={(color) => {
              kulonColorChange(property, `#${color.hex.substr(1)}`);
            }}
          />
        )}
      </div>
    </div>
  );
};

export default ColorRadioButtons;*/
/*  onChangeComplete={(color) => {updateProperty(property,`#${color.hex.substr(1)}`);setCurrentColor(`#${color.hex.substr(1)}`)}} */
