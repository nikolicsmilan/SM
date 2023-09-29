import React, { useState } from "react";
import { SketchPicker } from "react-color";

const ColorRadioButtons = ({ updateColor, style }) => {
  console.log('ColorRadioButtons RUNNNNNNNNNNNNNNNNNNNNNN')
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
    console.log('handleColorOptionChange RUNNNNNNNNNNNNNNNNNNNNNN')
    if (color === "custom") {
      setShowSketchPicker(true);
    } else {
      setSelectedColor(color);
      setShowSketchPicker(false);
    }
  };

  const newColorChange = (type, color) => {
    console.log("newColorChange type", type, "color: ", color);
    if (type === "specified") {
      console.log(
        "newColorChange run  specified branch",
        "type: ",
        type,
        "color: ",
        colors[color]
      );
      console.log('updateColor BEFORE RUNNNNNNNNNNNNNNNNNNNNNN')
     // updateColor()
     updateColor(type, colors[color]);
      console.log('updateColor AFTER RUNNNNNNNNNNNNNNNNNNNNNN')
    } else {
      console.log("newColorChange run  custom branch");
      updateColor(type, `#${color.hex.substr(1)}`);
    }
  };

  return (
    <div
      className={`flex m-0  ${style === "narancs" ? "border-2" : "border-0"}`}
    >
      {Object.keys(colors).map((color) => (
        <div key={color} className="m-2 border-0 h-8">
          <input
            className="m-2 text-info"
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
          <label
            className="text-info font-bold"
            htmlFor={color}
            style={{ backgroundColor: colors[color] }}
          >
            {color}
          </label>
        </div>
      ))}
      <div className="m-2 border-0 h-8">
        <input
          className="m-2 text-info"
          type="radio"
          id="custom"
          name="colorOptions"
          value="custom"
          checked={showSketchPicker}
          onChange={() => handleColorOptionChange("custom")}
        />
        <label className="text-info font-bold" htmlFor="custom">
          Egyedi
        </label>
        {showSketchPicker && (
          <SketchPicker
            color={selectedColor}
            onChangeComplete={(color) => {
              newColorChange("custom", color);
              setSelectedColor(color);
            }}
          />
        )}
      </div>
    </div>
  );
};

export default ColorRadioButtons;
