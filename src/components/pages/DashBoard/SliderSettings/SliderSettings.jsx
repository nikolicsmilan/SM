import React, { useState, useEffect } from "react";
import SliderSubMenu from "./SliderSubMenu";
import SliderInput from "./SliderInput";
import ColorRadioButtons from "./ColorRadioButtons";
import SliderOrientationConf from "./SliderOrientationConf";
import SliderImageConf from "./SliderImageConf";

const SliderSettings = ({ sliderAdv, setSliderAdv, sliderCurrentIndex }) => {
  const [property, setProperty] = useState("maintext");
  const [currentStyle, setCurrentStyle] = useState("maintext");
  const [theColors, setTheColors] = useState("maintextcolor");
  const [currentColor, setCurrentColor] = useState("");
  const [currentBgColor, setCurrentBgColor] = useState("");
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

  useEffect(() => {
    setMaintext(sliderAdv[sliderCurrentIndex].maintext);
    setSubtext(sliderAdv[sliderCurrentIndex].subtext);
    setButton(sliderAdv[sliderCurrentIndex].buttontext);
    setStyleButton(sliderAdv[sliderCurrentIndex].styleButton);
    setStylemaintext(sliderAdv[sliderCurrentIndex].stylemaintext);
    setStylesubtext(sliderAdv[sliderCurrentIndex].stylesubtext);
  }, [sliderCurrentIndex, sliderAdv]);

  const updateProperty = (property, value) => {
    setSliderAdv((prevConfig) => {
      const updatedConfig = [...prevConfig];
      console.log("updateProperty: ", "property:", property, "value: ", value);
      updatedConfig[sliderCurrentIndex][property] = value;
      return updatedConfig;
    });
  };

  return (
    <div className="flex flex-col border-0 border-orange-400 mx-10">
      <div className="flex flex-col-reverse lg:flex-row-reverse border-0 border-sky-400">
        <div className="flex flex-col  m-4 border-t border-info  lg:w-1/2 ">
        
          <SliderSubMenu
            config={config}
            setConfig={setConfig}
            currentStyle={currentStyle}
            setTheColors={setTheColors}
            currentColor={currentColor}
            updateProperty={updateProperty}
            setProperty={setProperty}
            property={property}
            //stylecolor={stylecolor}
          />
          {config.color || config.bgcolor ? (
            <ColorRadioButtons
              config={config}
              currentColor={currentColor}
              setProperty={setProperty}
              property={property}
              updateProperty={updateProperty}
              setCurrentColor={setCurrentColor}
            />
          ) : (
            ""
          )}
          {config.orientation ? <SliderOrientationConf config={config} /> : ""}
          {config.image ? <SliderImageConf config={config} /> : ""}
        </div>
        <div className="m-4 lg:w-1/2 border-t border-info">
          <SliderInput
            label="Cím"
            value={maintext}
            property="maintext"
            setValue={setMaintext}
            updateProperty={updateProperty}
            placeholder="Cím"
            onFocus={() => setProperty("maintext")}
            config={config}
            setProperty={setProperty}
          />

          <SliderInput
            label="Alcím"
            property="subtext"
            value={subtext}
            setValue={setSubtext}
            updateProperty={updateProperty}
            placeholder="Alcím"
            onFocus={() => setProperty("subtext")}
            config={config}
            setProperty={setProperty}
          />
          <SliderInput
            label="Gomb"
            property="buttontext"
            value={button}
            setValue={setButton}
            updateProperty={updateProperty}
            placeholder="Gomb"
            onFocus={() => setProperty("buttontext")}
            config={config}
            setProperty={setProperty}
          />
        </div>
      
      </div>
    </div>
  );
};

export default SliderSettings;
