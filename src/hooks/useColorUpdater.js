import { useState, useEffect } from "react";

function useColorUpdater(
  selectedText,
  sliderAdv,
  setSliderAdv,
  sliderCurrentIndex
) {
  //const [selectedText, setSelectedText] = useState(initialSelectedText);
  const [maintextSpecifiedcolor, setMaintextSpecifiedColor] = useState(
    sliderAdv[sliderCurrentIndex]?.maintextSpecifiedcolor
  );
  const [maintextCustomColor, setMaintextCustomColor] = useState(
    sliderAdv[sliderCurrentIndex]?.maintextCustomColor
  );
  const [subtextSpecifiedColor, setSubtextSpecifiedColor] = useState(
    sliderAdv[sliderCurrentIndex]?.subtextSpecifiedColor
  );
  const [subtextCustomColor, setSubtextCustomColor] = useState(
    sliderAdv[sliderCurrentIndex]?.subtextCustomColor
  );
  const [buttontextSpecifiedColor, setButtonTextSpecifiedColor] = useState(
    sliderAdv[sliderCurrentIndex]?.buttontextSpecifiedColor
  );
  const [buttontextCustomColor, setButtonTextCustomColor] = useState(
    sliderAdv[sliderCurrentIndex]?.buttontextCustomColor
  );
  const [buttonSpecifiedBackgroundcolor, setButtonSpecifiedBackgroundColor] =
    useState(sliderAdv[sliderCurrentIndex]?.buttonSpecifiedBackgroundcolor);
  const [buttonCustomBackgroundColor, setButtonCustomBackgroundColor] =
    useState(sliderAdv[sliderCurrentIndex]?.buttonCustomBackgroundColor);

  useEffect(() => {
    setMaintextSpecifiedColor(
      sliderAdv[sliderCurrentIndex]?.maintextSpecifiedColor
    );
    setMaintextCustomColor(sliderAdv[sliderCurrentIndex]?.maintextCustomColor);
    setSubtextSpecifiedColor(
      sliderAdv[sliderCurrentIndex]?.subtextSpecifiedColor
    );
    setSubtextCustomColor(sliderAdv[sliderCurrentIndex]?.subtextCustomColor);
    setButtonTextSpecifiedColor(
      sliderAdv[sliderCurrentIndex]?.buttontextSpecifiedColor
    );
    setButtonTextCustomColor(
      sliderAdv[sliderCurrentIndex]?.buttontextCustomColor
    );
    setButtonSpecifiedBackgroundColor(
      sliderAdv[sliderCurrentIndex]?.buttonSpecifiedBackgroundColor
    );
    setButtonCustomBackgroundColor(
      sliderAdv[sliderCurrentIndex]?.buttonCustomBackgroundColor
    );
  }, [sliderCurrentIndex, sliderAdv]);

  const updateColor = (type, color) => {
    console.log('updateColor run')
    const updatedConfig = [...sliderAdv];
    const currentIndex = sliderCurrentIndex;

    if (type === "specified") {
      if (selectedText === "maintext") {
        console.log("updateColor maintextttttttttttttttttttt")
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

  return { updateColor, updateBgColor };
}

export default useColorUpdater;



