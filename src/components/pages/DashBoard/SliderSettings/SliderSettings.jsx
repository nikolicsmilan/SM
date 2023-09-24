import React, { useState, useEffect } from "react";
import SliderSubMenu from "./SliderSubMenu";
import SliderInput from "./SliderInput";
import ColorRadioButtons from "./ColorRadioButtons";
import BgColorRadioButtons from "./BgColorRadioButtons";
import SliderOrientationConf from "./SliderOrientationConf";
import SliderImageConf from "./SliderImageConf";
import Fileupload from "../Upload/Fileupload";

const SliderSettings = ({ sliderAdv, setSliderAdv, sliderCurrentIndex }) => {
  const [selectedText, setSelectedText] = useState("maintext");
  // const [currentStyle, setCurrentStyle] = useState("maintext");
  const [currentColor, setCurrentColor] = useState("");
  const [selectedPosition, setSelectedPosition] = useState(
    sliderAdv[sliderCurrentIndex].maintextPosition
  );
  const [selectedAttribute, setSelectedAttribute] =
    useState("maintextPosition");
  const [maintext, setMaintext] = useState(
    sliderAdv[sliderCurrentIndex].maintext
  );
  const [subtext, setSubtext] = useState(sliderAdv[sliderCurrentIndex].subtext);
  const [buttontext, setButtonText] = useState(
    sliderAdv[sliderCurrentIndex].buttontext
  );

  const [maintextSpecifiedcolor, setMaintextSpecifiedColor] = useState(
    sliderAdv[sliderCurrentIndex].maintextSpecifiedcolor
  );
  const [maintextCustomColor, setMaintextCustomColor] = useState(
    sliderAdv[sliderCurrentIndex].maintextCustomColor
  );
  const [subtextSpecifiedColor, setSubtextSpecifiedColor] = useState(
    sliderAdv[sliderCurrentIndex].subtextSpecifiedColor
  );
  const [subtextCustomColor, setSubtextCustomColor] = useState(
    sliderAdv[sliderCurrentIndex].subtextCustomColor
  );
  const [buttontextSpecifiedColor, setButtonTextSpecifiedColor] = useState(
    sliderAdv[sliderCurrentIndex].buttontextSpecifiedColor
  );
  const [buttontextCustomColor, setButtonTextCustomColor] = useState(
    sliderAdv[sliderCurrentIndex].buttontextCustomColor
  );
  const [buttonSpecifiedBackgroundcolor, setButtonSpecifiedBackgroundColor] =
    useState(sliderAdv[sliderCurrentIndex].buttonSpecifiedBackgroundcolor);
  const [buttonCustomBackgroundColor, setButtonCustomBackgroundColor] =
    useState(sliderAdv[sliderCurrentIndex].buttonCustomBackgroundColor);
  const [maintextPosition, setMaintextPosition] = useState(
    sliderAdv[sliderCurrentIndex].maintextPosition
  );
  const [subtextPosition, setSubtextPosition] = useState(
    sliderAdv[sliderCurrentIndex].subtextPosition
  );
  const [buttontextPosition, setButtonTextPosition] = useState(
    sliderAdv[sliderCurrentIndex].buttontextPosition
  );
  const [image, setImage] = useState(sliderAdv[sliderCurrentIndex].image);

  const [configSubmenu, setConfigSubmenu] = useState({
    color: true,
    bgcolor: false,
    orientation: false,
    image: false,
  });

  useEffect(() => {
    setMaintext(sliderAdv[sliderCurrentIndex].maintext);
    setSubtext(sliderAdv[sliderCurrentIndex].subtext);
    setButtonText(sliderAdv[sliderCurrentIndex].buttontext);
    setMaintextSpecifiedColor(
      sliderAdv[sliderCurrentIndex].maintextSpecifiedColor
    );
    setMaintextCustomColor(sliderAdv[sliderCurrentIndex].maintextCustomColor);
    setSubtextSpecifiedColor(
      sliderAdv[sliderCurrentIndex].subtextSpecifiedColor
    );
    setSubtextCustomColor(sliderAdv[sliderCurrentIndex].subtextCustomColor);
    setButtonTextSpecifiedColor(
      sliderAdv[sliderCurrentIndex].buttontextSpecifiedColor
    );
    setButtonTextCustomColor(
      sliderAdv[sliderCurrentIndex].buttontextCustomColor
    );
    setButtonSpecifiedBackgroundColor(
      sliderAdv[sliderCurrentIndex].buttonSpecifiedBackgroundColor
    );
    setButtonCustomBackgroundColor(
      sliderAdv[sliderCurrentIndex].buttonCustomBackgroundColor
    );
    setMaintextPosition(sliderAdv[sliderCurrentIndex].maintextPosition);
    setSubtextPosition(sliderAdv[sliderCurrentIndex].subtextPosition);
    setButtonTextPosition(sliderAdv[sliderCurrentIndex].buttontextPosition);
    setImage(sliderAdv[sliderCurrentIndex].image);
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
    
      <div className="flex flex-col-reverse lg:flex-row-reverse border-0 border-sky-400">
        <div className="flex flex-col  m-4 border-t border-info  lg:w-1/2 ">
          <SliderSubMenu
            configSubmenu={configSubmenu}
            setConfigSubmenu={setConfigSubmenu}
            selectedText={selectedText}
           
          />
          {configSubmenu.color ? (
            <ColorRadioButtons
              currentColor={currentColor}
              updateColor={updateColor}
            />
          ) : (
            ""
          )}
          {configSubmenu.bgcolor ? (
            <BgColorRadioButtons
              currentColor={currentColor}
              updateBgColor={updateBgColor}
            />
          ) : (
            ""
          )}

          {configSubmenu.orientation ? (
            <SliderOrientationConf
              sliderCurrentIndex={sliderCurrentIndex}
              selectedText={selectedText}
              setSliderAdv={setSliderAdv}
              selectedAttribute={selectedAttribute}
              setSelectedAttribute={setSelectedAttribute}
              selectedPosition={selectedPosition}
              setSelectedPosition={setSelectedPosition}
            />
          ) : (
            ""
          )}
          {configSubmenu.image ? <Fileupload submenuStyle="substyle" /> : ""}
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
            value={buttontext}
            label="Gomb"
            updateText={updateText}
          />
        </div>
      </div>
    </div>
  );
};

export default SliderSettings;

/*
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
          maintextSpecifiedcolor:{" "}
          {sliderAdv[sliderCurrentIndex].maintextSpecifiedcolor}
        </li>
        <li className="m-1 p-1 border-2 border-primary rounded">
          maintextCustomColor:{" "}
          {sliderAdv[sliderCurrentIndex].maintextCustomColor}
        </li>
        <li className="m-1 p-1 border-2 border-primary rounded">
          subtextSpecifiedColor:{" "}
          {sliderAdv[sliderCurrentIndex].subtextSpecifiedColor}
        </li>
        <li className="m-1 p-1 border-2 border-primary rounded">
          subtextCustomColor: {sliderAdv[sliderCurrentIndex].subtextCustomColor}
        </li>
        <li className="m-1 p-1 border-2 border-primary rounded">
          buttontextSpecifiedColor:{" "}
          {sliderAdv[sliderCurrentIndex].buttontextSpecifiedColor}
        </li>
        <li className="m-1 p-1 border-2 border-primary rounded">
          buttontextCustomColor:{" "}
          {sliderAdv[sliderCurrentIndex].buttontextCustomColor}
        </li>
        <li className="m-1 p-1 border-2 border-primary rounded">
          buttonSpecifiedBackgroundcolor:{" "}
          {sliderAdv[sliderCurrentIndex].buttonSpecifiedBackgroundcolor}
        </li>
        <li className="m-1 p-1 border-2 border-primary rounded">
          buttonCustomBackgroundColor:{" "}
          {sliderAdv[sliderCurrentIndex].buttonCustomBackgroundColor}
        </li>
        <li className="m-1 p-1 border-2 border-sky-400 rounded">
          maintextPosition:
          {sliderAdv[sliderCurrentIndex].maintextPosition}
        </li>
        <li className="m-1 p-1 border-2 border-primary rounded">
          subtexttextPosition:{" "}
          {sliderAdv[sliderCurrentIndex].subtexttextPosition}
        </li>
        <li className="m-1 p-1 border-2 border-primary rounded">
          buttontextPosition: {sliderAdv[sliderCurrentIndex].buttontextPosition}
        </li>
      </ul> */
