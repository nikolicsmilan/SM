import React, { useState, useEffect } from "react";
import { SketchPicker } from "react-color";

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
  const [buttonColor, setButtonColor] = useState("#000");

  useEffect(() => {
    setMaintext(sliderAdv[sliderCurrentIndex].maintext);
    setSubtext(sliderAdv[sliderCurrentIndex].subtext);
    setButton(sliderAdv[sliderCurrentIndex].button);
    setStyleButton(sliderAdv[sliderCurrentIndex].styleButton);
    setStylemaintext(sliderAdv[sliderCurrentIndex].stylemaintext);
    setStylesubtext(sliderAdv[sliderCurrentIndex].stylesubtext);
  }, [sliderCurrentIndex, sliderAdv]);

  const updateProperty = (property, value) => {
    // Debugging: Check if this function is being called
    console.log(
      "UUUUUUUUUUUUUUpdateProperty is running. Property:",
      property,
      "Value:",
      value
    );

    setSliderAdv((prevConfig) => {
      const updatedConfig = [...prevConfig];
      updatedConfig[sliderCurrentIndex][property] = value;
      return updatedConfig;
    });
  };

  const handleColorChange = (color) => {
    const tailwindColorClass = `#${color.hex.substr(1)}`;
    console.log(
      "handleColorChangeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"
    );
    // Update stylemaintext in the appropriate currentIndex
    setSliderAdv((prevSliderAdv) => {
      console.log(
        "EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEz lefut setSliderAdv: ",
        prevSliderAdv,
        "sliderCurrentIndex: ",
        sliderCurrentIndex
      );
      const updatedSliderAdv = [...prevSliderAdv];
      updatedSliderAdv[sliderCurrentIndex].stylemaintext = tailwindColorClass;
      console.log("updatedSliderAdv: ", updatedSliderAdv);
      return updatedSliderAdv;
    });
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
            console.log(
              "This input is not changed!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"
            );
            setMaintext(e.target.value);

            updateProperty("maintext", e.target.value);
          }}
          placeholder="Cím"
          value={maintext}
        />
      </div>
      <div>
        <label className="block mb-2 text-sm font-bold text-gray-700">
          Háttérszín kiválasztása: {stylemaintext}
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
