import React, { useState, useEffect } from "react";
import SliderSubMenu from "./SliderSubMenu";
import ColorRadioButtons from "./ColorRadioButtons";
import BgColorRadioButtons from "./BgColorRadioButtons";
import SliderOrientationConf from "./SliderOrientationConf";
import SliderImageConf from "./SliderImageConf";
import { useStyleContext } from "../../../../context/StyleContext";
import {
  myUpdateGeneral,
  myDeleteGeneral,
} from "../../../../firebase/Firestore";
import { FaSave, FaTrashAlt } from "react-icons/fa";
import useColorUpdater from "../../../../hooks/useColorUpdater";
import useTextPositionUpdater from "../../../../hooks/useTextPositionUpdater";
import SliderText from "./SliderText";

const SliderSettings = ({ sliderAdv, setSliderAdv, sliderCurrentIndex }) => {
  const { style } = useStyleContext();
  const [selectedText, setSelectedText] = useState("maintext");

  const [selectedAttribute, setSelectedAttribute] =
    useState("maintextPosition");
  const [maintext, setMaintext] = useState(
    sliderAdv[sliderCurrentIndex]?.maintext
  );
  const [subtext, setSubtext] = useState(
    sliderAdv[sliderCurrentIndex]?.subtext
  );
  const [buttontext, setButtonText] = useState(
    sliderAdv[sliderCurrentIndex]?.buttontext
  );

  const [image, setImage] = useState(sliderAdv[sliderCurrentIndex]?.image);

  const [configSubmenu, setConfigSubmenu] = useState({
    color: true,
    bgcolor: false,
    orientation: false,
    image: false,
  });

  const { updateColor, updateBgColor } = useColorUpdater(
    selectedText,
    sliderAdv,
    setSliderAdv,
    sliderCurrentIndex
  );
  const { selectedPosition, setSelectedPosition } = useTextPositionUpdater(
    selectedText,
    sliderAdv,
    setSliderAdv,
    sliderCurrentIndex
  );

  const sliderSaveHandler = () => {
    console.log("sliderSaveHandler run");
    console.log("sliderAdv", sliderAdv);
    myUpdateGeneral(
      "SliderAdv",
      sliderAdv[sliderCurrentIndex].id,
      sliderAdv[sliderCurrentIndex]
    );
  };
  //update https://firebase.google.com/docs/firestore/manage-data/add-data
  const sliderDeleteHandler = () => {
    myDeleteGeneral("SliderAdv", sliderAdv[sliderCurrentIndex].id);
  };

  useEffect(() => {
    setMaintext(sliderAdv[sliderCurrentIndex]?.maintext);
    setSubtext(sliderAdv[sliderCurrentIndex]?.subtext);
    setButtonText(sliderAdv[sliderCurrentIndex]?.buttontext);

    setImage(sliderAdv[sliderCurrentIndex]?.image);
  }, [sliderCurrentIndex, sliderAdv]);

  const updateText = (value) => {
    setSliderAdv((prevConfig) => {
      const updatedConfig = [...prevConfig];
      updatedConfig[sliderCurrentIndex][selectedText] = value;
      return updatedConfig;
    });
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
            <ColorRadioButtons updateColor={updateColor} style={style} />
          ) : (
            ""
          )}
          {configSubmenu.bgcolor ? (
            <BgColorRadioButtons updateBgColor={updateBgColor} style={style} />
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
              style={style}
            />
          ) : (
            ""
          )}
          {configSubmenu.image ? <SliderImageConf /> : ""}
        </div>
        <div className="m-4 lg:w-1/2 border-t border-info">
          <SliderText
            setSelectedText={setSelectedText}
            maintext={maintext}
            subtext={subtext}
            buttontext={buttontext}
            updateText={updateText}
          />

          <div className="flex flex-start border-0">
            <FaSave
              className=" text-2xl m-2 text-info hover:text-primary cursor-pointer "
              onClick={() => sliderSaveHandler()}
            />

            <FaTrashAlt
              className=" text-2xl m-2 text-info hover:text-red-400 cursor-pointer "
              onClick={() => sliderDeleteHandler()}
            />
          </div>
        </div>
      </div>

      <div className="h-96"></div>
    </div>
  );
};

export default SliderSettings;
