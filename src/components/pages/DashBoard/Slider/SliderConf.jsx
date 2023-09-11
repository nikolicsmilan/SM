import React, { useState } from "react";

const SliderConf = ({ sliderAdv, setSliderAdv,number }) => {
 
  const [property, setProperty] = useState(""); // Add state for the property you want to update
  const [newValue, setNewValue] = useState(""); // Add state for the new value of the property

  const changeHandler = () => {
    // Make sure both property and newValue have values
    if (property && newValue !== "") {
      setSliderAdv((prevConfig) => ({
        ...prevConfig,
        [number]: {
          ...prevConfig[number],
          [property]: newValue,
        },
      }));
    }
  };



  return (
    <div className="flex flex-col border-0 border-orange-400 mx-10">
     
      <input
        className="w-8 m-2 rounded"
        onChange={(e) => setProperty(e.target.value)} // Set the property when input changes
        placeholder="Property" // Add a placeholder for the property
      />
      <input
        className="w-8 m-2 rounded"
        onChange={(e) => setNewValue(e.target.value)} // Set the new value when input changes
        placeholder="New Value" // Add a placeholder for the new value
      />
      <button onClick={changeHandler}>Update</button> {/* Add a button to trigger the update */}
    </div>
  );
};

export default SliderConf;
