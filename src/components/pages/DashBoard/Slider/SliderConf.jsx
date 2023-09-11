import React, { useState, useEffect } from "react";
import { SketchPicker } from "react-color"; // Import the SketchPicker component

const SliderConf = ({ sliderAdv, setSliderAdv, sliderCurrentIndex }) => {
  const [maintext, setMaintext] = useState(
    sliderAdv[sliderCurrentIndex].maintext
  );
  const [subtext, setSubtext] = useState(sliderAdv[sliderCurrentIndex].subtext);
  const [button, setButton] = useState(sliderAdv[sliderCurrentIndex].button);
  const [styleButton, setStyleButton] = useState(
    sliderAdv[sliderCurrentIndex].styleButton
  );
  const [stylemaintext, setStylemaintext] = useState(
    sliderAdv[sliderCurrentIndex].stylemaintext
  );
  const [stylesubtext, setStylesubtext] = useState(
    sliderAdv[sliderCurrentIndex].stylesubtext
  );
  const [buttonColor, setButtonColor] = useState("#000"); // Initialize color state

  useEffect(() => {
    setMaintext(sliderAdv[sliderCurrentIndex].maintext);
    setSubtext(sliderAdv[sliderCurrentIndex].subtext);
    setButton(sliderAdv[sliderCurrentIndex].button);
    setStyleButton(sliderAdv[sliderCurrentIndex].styleButton);
    setStylemaintext(sliderAdv[sliderCurrentIndex].stylemaintext);
    setStylesubtext(sliderAdv[sliderCurrentIndex].stylesubtext);
  }, [sliderCurrentIndex, sliderAdv]);

  const updateProperty = (property, value) => {
    setSliderAdv((prevConfig) => {
      const updatedConfig = [...prevConfig];
      updatedConfig[sliderCurrentIndex][property] = value;
      return updatedConfig;
    });
  };

  // Handle color change and update styleButton
// Handle color change and update styleButton
const handleColorChange = (color) => {
  const tailwindColorClass = `#${color.hex.substr(1)}`; // Generate Tailwind CSS class

  setButtonColor(color.hex); // Update the color state
  console.log('ez meg mi?',tailwindColorClass)
  // Append the new class to the existing styleButton state
  setStyleButton((prevStyleButton) => prevStyleButton + ' ' + tailwindColorClass);
};

  return (
    <div className="flex flex-col border-0 border-orange-400 mx-10">
      <div className="mb-4">
        <label className="block mb-2 text-sm font-bold text-gray-700">
          Cím
        </label>
        <input
          className="bg-info appearance-none w-1/3 py-2 px-3 leading-tight rounded-lg shadow-md focus:outline-none focus:shadow-outline"
          onChange={(e) => {
            setMaintext(e.target.value);
            updateProperty("maintext", e.target.value);
          }}
          placeholder="Cím"
          value={maintext}
        />
      </div>

      {/* Color Picker */}
      <div>
        <label className="block mb-2 text-sm font-bold text-gray-700">
          Háttérszín kiválasztása
        </label>
        <SketchPicker
          color={buttonColor}
          onChangeComplete={(color) => handleColorChange(color)}
        />
      </div>
    </div>
  );
};

export default SliderConf;



/*
      <div className="mb-4">
        <label className="block mb-2 text-sm font-bold text-gray-700">
          Alcím
        </label>
        <input
          className="  bg-info appearance-none w-1/3 py-2 px-3 leading-tight rounded-lg shadow-md focus:outline-none focus:shadow-outline"
          onChange={(e) => {
            setSubtext(e.target.value);
            updateProperty("subtext", e.target.value);
          }}
          placeholder="Alcím"
          value={subtext}
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2 text-sm font-bold text-gray-700">
          Gomb2
        </label>
        <input
          className="  bg-info appearance-none w-1/3 py-2 px-3 leading-tight rounded-lg shadow-md focus:outline-none focus:shadow-outline"
          onChange={(e) => {
            setButton(e.target.value);
            updateProperty("button", e.target.value);
          }}
          placeholder="Gomb"
          value={button}
        />
      </div>
*/
/*  <input
        className="w-32 m-2 rounded"
        onChange={(e) => {
          setStyleButton(e.target.value);
          updateProperty("styleButton", e.target.value);
        }}
        placeholder="StyleButton"
        value={styleButton}
      />
      <input
        className="w-32 m-2 rounded"
        onChange={(e) => {
          setStylemaintext(e.target.value);
          updateProperty("stylemaintext", e.target.value);
        }}
        placeholder="Stylemaintext"
        value={stylemaintext}
      />
      <input
        className="w-32 m-2 rounded"
        onChange={(e) => {
          setStylesubtext(e.target.value);
          updateProperty("stylesubtext", e.target.value);
        }}
        placeholder="Stylesubtext"
        value={stylesubtext}
      /> */
