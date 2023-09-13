import React from "react";
import { SketchPicker } from "react-color";
const SliderColorConf = ({buttonColor, handleColorChange,config}) => {


  // itt ahogy váltom a configot úgy fog változni az inputja a rádiógomboknak
  //de ez enm teljesen igaz mert lesz egy image is
  // ezt át kell gondolni
  return (
    <>
    <div className="flex">
     <h1>Rádió gombok</h1>
      <SketchPicker
        className=""
        color={buttonColor}
        onChangeComplete={(color) => handleColorChange(color)}
      />
    </div>
    </>
  );
};

export default SliderColorConf;
