import React from 'react';
import SliderInput from './SliderInput';

const SliderText = ({setSelectedText,maintext,subtext,buttontext,updateText}) => {
  return (
    <div>
    <SliderInput
      onFocus={() => setSelectedText("maintext")}
      value={maintext}
      label="Cím"
      updateText={updateText}
    />
    <SliderInput
      onFocus={() => setSelectedText("subtext")}
      value={subtext}
      label="Alcím"
      updateText={updateText}
    />
    <SliderInput
      onFocus={() => setSelectedText("buttontext")}
      value={buttontext}
      label="Gomb"
      updateText={updateText}
    />
    </div>
  )
}

export default SliderText