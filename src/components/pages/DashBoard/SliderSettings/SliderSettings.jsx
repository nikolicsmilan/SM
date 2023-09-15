import React, { useState, useEffect } from "react";
import SliderSubMenu from "./SliderSubMenu";
import SliderInput from "./SliderInput";
import ColorRadioButtons from "./ColorRadioButtons";
import SliderOrientationConf from "./SliderOrientationConf";
import SliderImageConf from "./SliderImageConf";

const SliderSettings = ({ sliderAdv, setSliderAdv, sliderCurrentIndex }) => {
  const [currentStyle, setCurrentStyle] = useState("maintext");
  const [theColors, setTheColors] = useState("maintextcolor");
  const [currentColor, setCurrentColor] = useState("");
  const [currentBgColor, setCurrentBgColor] = useState("");
  const [maintext, setMaintext] = useState(
    sliderAdv[sliderCurrentIndex].maintext
  );
  const [subtext, setSubtext] = useState(sliderAdv[sliderCurrentIndex].subtext);
  const [button, setButton] = useState(sliderAdv[sliderCurrentIndex].button);
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
    setButton(sliderAdv[sliderCurrentIndex].button);
    setStyleButton(sliderAdv[sliderCurrentIndex].styleButton);
    setStylemaintext(sliderAdv[sliderCurrentIndex].stylemaintext);
    setStylesubtext(sliderAdv[sliderCurrentIndex].stylesubtext);
  }, [sliderCurrentIndex, sliderAdv]);

  // Update currentStyle based on the input field being focused
  const handleInputFocus = (
    styletext, //stylemaintext, stylesubtext, or stylebutton
    stylecolor, //maintextcolor,subtextcolor or buttoncolor
    buttonbackgroundcolor //buttonbackgroundcolor
  ) => {
    console.log(
      "handleInputFocus styletext: ",
      styletext,
      "stylecolor: ",
      stylecolor,
      "buttonbackgroundcolor: ",
      buttonbackgroundcolor
    );

    setCurrentStyle(styletext);
    setTheColors(stylecolor);
  };


  //Az a probléma hogy a 2 funkició nem konzisztens egymással
  // a két funkcióból egyet kell csinálni
  //melyben mind a submenü mind a textinput a 
  // megfelelő property t állítja
  // a colort lent a color kompoenenben kell
  //összeálítani ez lesz az érték majd a megfelelő
  //propertyre továbbítani tehát
  //az update proerty marad ugyanaz
  //Itt egyenlőre az a gond
  //hogy a submenüből megérkezik a property
  // vagy megérkezhet inkább a property ha beállítom
  // de nem érkezik meg a value
  // a buttonbackgroundcolor a property de a szín
  //továbbra is ColorRadioButtons ból kell érkeznie
  // A ColorRadioButtons nak mindenkép csak színt szabad állítania
  // amit aztán lepaszolok a SliderSubMenu nek
  // hogy aztán visszadja az updateProperty nak
  const updateProperty = (property, value) => {
    //vizsont el kell dönteni valahol hogy az inputra való fókusz
    // ezt a hármat állítja 
    // maintext:"Ön megálmodja 1! ",
      //  subtext:"Mi megvalósítjuk!",
     //   button:"Vásárlás most!",     
     //tulajdonképpen a fókuszal az updateProperty nak átadott
     //értéket változtatom
     // még a submenüben is ugyanezt teszem
     //Sokkal jobb megoldás
     //HA ITT KINT LÉTREHOZOK EGY STATE -T
     //PROPERTY NÉVEN ÉS EZT A PROPERTY ÁLLÍTJA MIND A 
     //SUBMENU MIND A SliderInput
     // A ColorRadioButtons PEDIG CSAK EGY SZÍNT ADD VISSZA
     // AZ updateProperty FUNKIÓNAK A VALUE ÉRTÉKBEN
     //A PROPERTY PEDIG A LEPASZOLT STATE
     //VISSZAADÁSA LESZ AMI A SUBMENU ILLETVE A SliderInput ÁLLÍTANAK
    setSliderAdv((prevConfig) => {
      const updatedConfig = [...prevConfig];
      updatedConfig[sliderCurrentIndex][property] = value;
      return updatedConfig;
    });
  };

  const handleColorChange = (color) => {
    const tailwindColorClass = `#${color}`;
    setSliderAdv((prevSliderAdv) => {
      const updatedSliderAdv = [...prevSliderAdv];
      setCurrentColor(color);
         //ezt a property-t kell átálítani buttoncolor
      // ról buttonbackgroundcolorra
      updatedSliderAdv[sliderCurrentIndex][theColors] = tailwindColorClass;
      return updatedSliderAdv;
    });
  };

  return (
    <div className="flex flex-col border-0 border-orange-400 mx-10">
      <div className="flex flex-col-reverse lg:flex-row-reverse border-0 border-sky-400">
        <div className="flex flex-col  m-4 border-t border-info  lg:w-1/2 ">
          The Colors: {theColors}
          <SliderSubMenu
            config={config}
            setConfig={setConfig}
            currentStyle={currentStyle}
            setTheColors={setTheColors}
            currentColor={currentColor}
            updateProperty={updateProperty}
            handleColorChange={handleColorChange}
            //stylecolor={stylecolor}
          />
          {config.color ? (
            <ColorRadioButtons
              config={config}
              currentColor={currentColor}
              handleColorChange={handleColorChange}
            />
          ) : (
            ""
          )}
          {config.orientation ? (
            <SliderOrientationConf
              config={config}
              handleColorChange={handleColorChange}
            />
          ) : (
            ""
          )}
          {config.image ? (
            <SliderImageConf
              config={config}
              handleColorChange={handleColorChange}
            />
          ) : (
            ""
          )}
        </div>
        <div className="m-4 lg:w-1/2 border-t border-info">
          {/*Ha ez az aktív akkor stylemaintext legyen a colorchangben */}
          <SliderInput
            label="Cím"
            value={maintext}
            property="maintext"
            setValue={setMaintext}
            updateProperty={updateProperty}
            placeholder="Cím"
            // handleInputFocus={handleInputFocus} // Set currentStyle for this input
            onFocus={() => handleInputFocus("stylemaintext", "maintextcolor")}
            config={config}
          />
          {/*Ha ez az aktív akkor stylesubtext legyen a colorchangben */}
          <SliderInput
            label="Alcím"
            property="subtext"
            value={subtext}
            setValue={setSubtext}
            updateProperty={updateProperty}
            placeholder="Alcím"
            // handleInputFocus={handleInputFocus} // Set currentStyle for this input
            onFocus={() => handleInputFocus("stylesubtext", "subtextcolor")}
            config={config}
          />
          <SliderInput
            label="Gomb"
            property="button"
            value={button}
            setValue={setButton}
            updateProperty={updateProperty}
            placeholder="Gomb"
            /// handleInputFocus={handleInputFocus} // Set currentStyle for this input
            onFocus={() =>
              handleInputFocus(
                "stylebutton",
                "buttoncolor",
                "buttonbackgroundcolor"
              )
            }
            config={config}
          />
        </div>
      </div>
    </div>
  );
};

export default SliderSettings;

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
