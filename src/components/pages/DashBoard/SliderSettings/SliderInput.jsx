import React from "react";

const SliderInput = ({
 // handleInputFocus,
 onFocus,
  property,
  value,
  setValue,
  updateProperty,
  label,
  placeholder,
  config,
}) => {

  //Az a feladata hogy meghatároza: 
  //stylemaintext, stylesubtext, vagy stylebutton
  /*const handleInput = (thing) => {
    if (config.color) {
   
      handleInputFocus("stylemaintext");
    } else if (config.orientation) {
    }
  };*/

  return (
    <div className="m-1">
      <label className="block m-2 text-sm font-bold text-gray-700">
        {label}
      </label>
      <input
        className="bg-info appearance-none w-full py-2 px-3 leading-tight rounded-lg shadow-md focus:outline-none focus:shadow-outline"
        onChange={(e) => {
          setValue(e.target.value);
          updateProperty(property, e.target.value);
        }}
        placeholder={placeholder}
        value={value}
      //  onFocus={() => handleInput("amit szeretnél")}
      onFocus={onFocus}
      />
    </div>
  );
};

export default SliderInput;

/*
const SliderInput = ({maintext,setMaintext,updateProperty,label}) => {
  return (
  
        <div className='m-1'>
    <label className="block m-2 text-sm font-bold text-gray-700">
      {label}
    </label>
    <input
      className="bg-info appearance-none w-full py-2 px-3 leading-tight rounded-lg shadow-md focus:outline-none focus:shadow-outline"
      onChange={(e) => {
        setMaintext(e.target.value);
        updateProperty("maintext", e.target.value);
      }}
      placeholder="Cím"
      value={maintext}
    />
 </div>

  )
}

export default SliderInput*/
