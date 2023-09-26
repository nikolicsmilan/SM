// sliderUtils.js
export const updateColor = (sliderAdv, sliderCurrentIndex, selectedText, type, color) => {
    if (type === "specified") {
      if (selectedText === "maintext") {
        sliderAdv[sliderCurrentIndex].maintextSpecifiedcolor = color;
        sliderAdv[sliderCurrentIndex].maintextCustomColor = "";
      } else if (selectedText === "subtext") {
        sliderAdv[sliderCurrentIndex].subtextSpecifiedColor = color;
        sliderAdv[sliderCurrentIndex].subtextCustomColor = "";
      } else if (selectedText === "buttontext") {
        sliderAdv[sliderCurrentIndex].buttontextSpecifiedColor = color;
        sliderAdv[sliderCurrentIndex].buttontextCustomColor = "";
      }
    } else {
      if (selectedText === "maintext") {
        sliderAdv[sliderCurrentIndex].maintextCustomColor = color;
      } else if (selectedText === "subtext") {
        sliderAdv[sliderCurrentIndex].subtextCustomColor = color;
      } else if (selectedText === "buttontext") {
        sliderAdv[sliderCurrentIndex].buttontextCustomColor = color;
      }
    }
  };
  
  export const updateBgColor = (sliderAdv, sliderCurrentIndex, type, color) => {
    if (type === "specified") {
      sliderAdv[sliderCurrentIndex].buttonSpecifiedBackgroundcolor = color;
      sliderAdv[sliderCurrentIndex].buttonCustomBackgroundColor = "";
    } else if (type === "custom") {
      sliderAdv[sliderCurrentIndex].buttonCustomBackgroundColor = color;
      sliderAdv[sliderCurrentIndex].buttonSpecifiedBackgroundcolor = "";
    }
  };
  
  export const saveSlider = (sliderAdv, sliderCurrentIndex) => {
    // Implement logic to save the slider settings, e.g., to Firestore
  };
  
  export const saveAllSliders = (sliderAdv) => {
    // Implement logic to save settings for all sliders, e.g., to Firestore
  };
  