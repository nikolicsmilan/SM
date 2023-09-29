import { useState, useEffect } from "react";

function useTextPositionUpdater(
  selectedText,
  sliderAdv,
  setSliderAdv,
  sliderCurrentIndex
) {
  const [maintextPosition, setMaintextPosition] = useState(
    sliderAdv[sliderCurrentIndex]?.maintextPosition
  );
  const [subtextPosition, setSubtextPosition] = useState(
    sliderAdv[sliderCurrentIndex]?.subtextPosition
  );
  const [buttontextPosition, setButtonTextPosition] = useState(
    sliderAdv[sliderCurrentIndex]?.buttontextPosition
  );
  const [selectedPosition, setSelectedPosition] = useState(
    sliderAdv[sliderCurrentIndex]?.maintextPosition
  );

  useEffect(() => {
    setMaintextPosition(sliderAdv[sliderCurrentIndex]?.maintextPosition);
    setSubtextPosition(sliderAdv[sliderCurrentIndex]?.subtextPosition);
    setButtonTextPosition(sliderAdv[sliderCurrentIndex]?.buttontextPosition);
  }, [sliderCurrentIndex, sliderAdv]);

  const updateColor = (type, color) => {
    console.log("updateColor run");
    const updatedConfig = [...sliderAdv];
    const currentIndex = sliderCurrentIndex;

    if (type === "specified") {
      if (selectedText === "maintext") {
        console.log("updateColor maintextttttttttttttttttttt");
        updatedConfig[currentIndex].maintextSpecifiedcolor = color;
        updatedConfig[currentIndex].maintextCustomColor = "";
      } else if (selectedText === "subtext") {
        updatedConfig[currentIndex].subtextSpecifiedColor = color;
        updatedConfig[currentIndex].subtextCustomColor = "";
      } else if (selectedText === "buttontext") {
        updatedConfig[currentIndex].buttontextSpecifiedColor = color;
        updatedConfig[currentIndex].buttontextCustomColor = "";
      }
    } else {
      if (selectedText === "maintext") {
        updatedConfig[currentIndex].maintextCustomColor = color;
      } else if (selectedText === "subtext") {
        updatedConfig[currentIndex].subtextCustomColor = color;
      } else if (selectedText === "buttontext") {
        updatedConfig[currentIndex].buttontextCustomColor = color;
      }
    }

    setSliderAdv(updatedConfig);
  };

  const updateBgColor = (type, color) => {
    console.log("updateBgColor run");
    setSliderAdv((prevConfig) => {
      const updatedConfig = [...prevConfig];
      const currentIndex = sliderCurrentIndex;

      if (type === "specified") {
        console.log("updateBgColor run specified branch");
        updatedConfig[currentIndex].buttonSpecifiedBackgroundcolor = color;
        updatedConfig[currentIndex].buttonCustomBackgroundColor = "";
      } else if (type === "custom") {
        console.log("updateBgColor run custom branch");
        updatedConfig[currentIndex].buttonCustomBackgroundColor = color;
        updatedConfig[currentIndex].buttonSpecifiedBackgroundcolor = "";
      }

      return updatedConfig;
    });
  };

  return { selectedPosition,setSelectedPosition };
}

export default useTextPositionUpdater;
