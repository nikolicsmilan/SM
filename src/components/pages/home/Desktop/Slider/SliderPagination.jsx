import React, { useState } from "react";
import { MyDataContext } from "../../../../../context/DataContext";
import { myAddGeneral } from "../../../../../firebase/Firestore";
import { FaPlus } from "react-icons/fa";

const SliderPagination = ({ sliderCurrentIndex, numberHandler }) => {
  const { config, sliderAdv, currentSlider, setCurrentSlider } =
    MyDataContext();
  const othersample = {
    id: 1,
    maintext: "Főszöveg",
    subtext: "Alszöveg",
    buttontext: "Gombszöveg",
    maintextSpecifiedcolor: "",
    maintextCustomColor: "",
    subtextSpecifiedColor: "",
    subtextCustomColor: "",
    buttontextSpecifiedColor: " ",
    buttontextCustomColor: "",
    buttonSpecifiedBackgroundcolor: "",
    buttonCustomBackgroundColor: "",
    maintextPosition: "top-10 left-10",
    subtexttextPosition: "top-10 left-10",
    buttontextPosition: "top-10 left-10",
    image: "",
  };
  /*
  const plusHandler =()=>{
    // Create a copy of the current state array and add the new object
    console.log("SliderPagination sliderAdv",sliderAdv)
    const updatedSliderAdv = [...sliderAdv, othersample];
  
    // Update the state with the new array
    setSliderAdv(updatedSliderAdv);
  }*/

  const plusHandler = () => {
    // Parse the current ID as an integer and increment it
    // const newId = parseInt(currentSlider.id, 10) + 1;
    let newId;
    if (sliderAdv.length) {
      newId = sliderAdv.length + 1;
    } else {
      newId = 1;
    }
    // Create a new object with the specified ID and other properties
    const newElement = { ...othersample, id: newId };
    console.log("newElement", newElement);
    // Update the state with the new element
    setCurrentSlider(newElement);
    myAddGeneral("SliderAdv", `${newElement.id}`, newElement);
  };

  return (
    <div className="border-0 flex border-sky-400 w-full justify-center m-1">
      {sliderAdv.map((item, index) => (
        <div
          key={index}
          className={`px-2 text-dark cursor-pointer ${
            sliderCurrentIndex === index ? "bg-primary rounded-full" : ""
          }`}
          onClick={() => numberHandler(index)}
        >
          {index + 1}
        </div>
      ))}
      {config.slider ? (
        <FaPlus
          className="mx-2 m-1 cursor-pointer hover:text-primary"
          onClick={() => {
            plusHandler();
          }}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default SliderPagination;
