import React, { useState, useEffect } from "react";
import SliderSubMenu from "./SliderSubMenu";
import SliderInput from "./SliderInput";
import ColorRadioButtons from "./ColorRadioButtons";
import BgColorRadioButtons from "./BgColorRadioButtons";
import SliderOrientationConf from "./SliderOrientationConf";
import SliderImageConf from "./SliderImageConf";

const SliderSettings = ({ sliderAdv, setSliderAdv, sliderCurrentIndex }) => {
  const [selectedText, setSelectedText] = useState("maintext");
  // const [currentStyle, setCurrentStyle] = useState("maintext");
  const [currentColor, setCurrentColor] = useState("");
  const [maintext, setMaintext] = useState(
    sliderAdv[sliderCurrentIndex].maintext
  );
  const [subtext, setSubtext] = useState(sliderAdv[sliderCurrentIndex].subtext);
  const [button, setButton] = useState(
    sliderAdv[sliderCurrentIndex].buttontext
  );
  const [stylebutton, setStyleButton] = useState(
    sliderAdv[sliderCurrentIndex].styleButton
  );
  const [stylemaintext, setStylemaintext] = useState(
    sliderAdv[sliderCurrentIndex].stylemaintext
  );
  const [stylesubtext, setStylesubtext] = useState(
    sliderAdv[sliderCurrentIndex].stylesubtext
  );

  const [config, setConfig] = useState({
    color: true,
    bgcolor: false,
    orientation: false,
    image: false,
  });
//ilyet kell megvalósítani positionnál is
  useEffect(() => {
    setMaintext(sliderAdv[sliderCurrentIndex].maintext);
    setSubtext(sliderAdv[sliderCurrentIndex].subtext);
    setButton(sliderAdv[sliderCurrentIndex].buttontext);
    setStyleButton(sliderAdv[sliderCurrentIndex].styleButton);
    setStylemaintext(sliderAdv[sliderCurrentIndex].stylemaintext);
    setStylesubtext(sliderAdv[sliderCurrentIndex].stylesubtext);
  }, [sliderCurrentIndex, sliderAdv]);

  const updateText = (value) => {
    setSliderAdv((prevConfig) => {
      const updatedConfig = [...prevConfig];
      updatedConfig[sliderCurrentIndex][selectedText] = value;
      return updatedConfig;
    });
  };

  const updateColor = (type, color) => {
    console.log("updateColor run");
    if (type === "specified") {
      console.log("updateColor run specified branch");
      if (selectedText === "maintext") {
        console.log("updateColor run specified maintext branch");
        setSliderAdv((prevConfig) => {
          const updatedConfig = [...prevConfig];
          updatedConfig[sliderCurrentIndex].maintextSpecifiedcolor = color;
          updatedConfig[sliderCurrentIndex].maintextCustomColor = "";
          return updatedConfig;
        });
      } else if (selectedText === "subtext") {
        console.log("updateColor run specified subtext branch");
        setSliderAdv((prevConfig) => {
          const updatedConfig = [...prevConfig];
          updatedConfig[sliderCurrentIndex].subtextSpecifiedColor = color;
          updatedConfig[sliderCurrentIndex].subtextCustomColor = "";
          return updatedConfig;
        });
      } else if (selectedText === "buttontext") {
        console.log("updateColor run specified buttontext branch");
        setSliderAdv((prevConfig) => {
          const updatedConfig = [...prevConfig];
          updatedConfig[sliderCurrentIndex].buttontextSpecifiedColor = color;
          updatedConfig[sliderCurrentIndex].buttontextCustomColor = "";
          return updatedConfig;
        });
      }
    } else {
      console.log("updateColor run custom branch");
      if (selectedText === "maintext") {
        console.log("updateColor run custom maintext branch");
        setSliderAdv((prevConfig) => {
          const updatedConfig = [...prevConfig];
          updatedConfig[sliderCurrentIndex].maintextCustomColor = color;
          return updatedConfig;
        });
      } else if (selectedText === "subtext") {
        console.log("updateColor run custom subtext branch");
        setSliderAdv((prevConfig) => {
          const updatedConfig = [...prevConfig];
          updatedConfig[sliderCurrentIndex].subtextCustomColor = color;
          return updatedConfig;
        });
      } else if (selectedText === "buttontext") {
        console.log("updateColor run custom buttontext branch");
        setSliderAdv((prevConfig) => {
          const updatedConfig = [...prevConfig];
          updatedConfig[sliderCurrentIndex].buttontextCustomColor = color;
          return updatedConfig;
        });
      }
    }
  };

  const updateBgColor = (type, color) => {
    console.log("updateBgColor run");
    if (type === "specified") {
      console.log("updateBgColor run specified branch");
      setSliderAdv((prevConfig) => {
        const updatedConfig = [...prevConfig];
        updatedConfig[sliderCurrentIndex].buttonSpecifiedBackgroundcolor =
          color;
        updatedConfig[sliderCurrentIndex].buttonCustomBackgroundColor = "";
        return updatedConfig;
      });
    } else if (type === "custom") {
      console.log("updateBgColor run custom branch");
      setSliderAdv((prevConfig) => {
        const updatedConfig = [...prevConfig];
        updatedConfig[sliderCurrentIndex].buttonCustomBackgroundColor = color;
        updatedConfig[sliderCurrentIndex].buttonSpecifiedBackgroundcolor = "";
        return updatedConfig;
      });
    }
  };



  return (
    <div className="flex flex-col border-0 border-orange-400 mx-10">
      <h1>
        sliderCurrentIndex: {sliderCurrentIndex} selectedText:{selectedText}{" "}
      </h1>
      <h2>Tulajdonságok</h2>
      <ul className="flex flex-wrap">
        <li className="m-1 p-1 border-2 border-primary rounded">
          maintext: {sliderAdv[sliderCurrentIndex].maintext}
        </li>
        <li className="m-1 p-1 border-2 border-primary rounded">
          subtext: {sliderAdv[sliderCurrentIndex].subtext}
        </li>
        <li className="m-1 p-1 border-2 border-primary rounded">
          buttontext: {sliderAdv[sliderCurrentIndex].buttontext}
        </li>
        <li className="m-1 p-1 border-2 border-primary rounded">
        maintextSpecifiedcolor: {sliderAdv[sliderCurrentIndex].maintextSpecifiedcolor}
        </li>
        <li className="m-1 p-1 border-2 border-primary rounded">
        maintextCustomColor: {sliderAdv[sliderCurrentIndex].maintextCustomColor}
        </li>
        <li className="m-1 p-1 border-2 border-primary rounded">
        subtextSpecifiedColor: {sliderAdv[sliderCurrentIndex].subtextSpecifiedColor}
        </li>
        <li className="m-1 p-1 border-2 border-primary rounded">
        subtextCustomColor: {sliderAdv[sliderCurrentIndex].subtextCustomColor}
        </li>
        <li className="m-1 p-1 border-2 border-primary rounded">
        buttontextSpecifiedColor: {sliderAdv[sliderCurrentIndex].buttontextSpecifiedColor}
        </li>
        <li className="m-1 p-1 border-2 border-primary rounded">
        buttontextCustomColor: {sliderAdv[sliderCurrentIndex].buttontextCustomColor}
        </li>
        <li className="m-1 p-1 border-2 border-primary rounded">
        buttonSpecifiedBackgroundcolor: {sliderAdv[sliderCurrentIndex].buttonSpecifiedBackgroundcolor}
        </li>
        <li className="m-1 p-1 border-2 border-primary rounded">
        buttonCustomBackgroundColor:{" "}
          {sliderAdv[sliderCurrentIndex].buttonCustomBackgroundColor}
        </li>
        <li className="m-1 p-1 border-2 border-sky-400 rounded">
        maintextPosition:
          {sliderAdv[sliderCurrentIndex]?.maintextPosition}
        </li>
        <li className="m-1 p-1 border-2 border-primary rounded">
        subtexttextPosition:{" "}
          {sliderAdv[sliderCurrentIndex].subtexttextPosition}
        </li>
        <li className="m-1 p-1 border-2 border-primary rounded">
        buttontextPosition:{" "}
          {sliderAdv[sliderCurrentIndex].buttontextPosition}
        </li>
      </ul>
      <div className="flex flex-col-reverse lg:flex-row-reverse border-0 border-sky-400">
        <div className="flex flex-col  m-4 border-t border-info  lg:w-1/2 ">
          <SliderSubMenu
            config={config}
            setConfig={setConfig}
            selectedText={selectedText}
          />
          {config.color ? (
            <ColorRadioButtons
              currentColor={currentColor}
              updateColor={updateColor}
            />
          ) : (
            ""
          )}
          {config.bgcolor ? (
            <BgColorRadioButtons
              currentColor={currentColor}
              updateBgColor={updateBgColor}
            />
          ) : (
            ""
          )}

          {config.orientation ? <SliderOrientationConf sliderCurrentIndex={sliderCurrentIndex} selectedText={selectedText} setSliderAdv={setSliderAdv}/> : ""}
          {config.image ? <SliderImageConf config={config} /> : ""}
        </div>
        <div className="m-4 lg:w-1/2 border-t border-info">
          <SliderInput
            onFocus={() => setSelectedText("maintext")}
            value={maintext}
            label="Cím"
            updateText={updateText}
          />
          <SliderInput
            onFocus={() => setSelectedText("subtext")}
            value={subtext}
            label="Alcím"
            updateText={updateText}
          />
          <SliderInput
            onFocus={() => setSelectedText("buttontext")}
            value={button}
            label="Gomb"
            updateText={updateText}
          />
        </div>
      </div>
    </div>
  );
};

export default SliderSettings;