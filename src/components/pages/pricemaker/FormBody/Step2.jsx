import React, { useEffect } from "react";
import GeneralInput from "./Generalnput";
import RangeInput from "./RangeInput";
const Step2 = ({ formData, onFormChange, index, setStep }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    onFormChange(index, { ...formData, [name]: value });
    setStep((prevState) => ({ ...prevState, isClicked: true }));
  };

  return (
    <div className="flex flex-col gap-4">
      <RangeInput  id="maxAmmount"
        name="maxAmmount"
        label={`A minimum összeg amit rászánsz`}
        type="range"
        value={formData?.maxAmmount}
        onChange={handleInputChange}
        min={50}
        max={1000}/>
      <GeneralInput
        id="city"
        name="city"
        label="City"
        type="text"
        value={formData?.city}
        onChange={handleInputChange}
      />
      <GeneralInput
        id="state"
        name="state"
        label="State"
        type="text"
        value={formData?.state}
        onChange={handleInputChange}
      />
      <GeneralInput
        id="zip"
        name="zip"
        label="Zip"
        type="text"
        value={formData?.zip}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default Step2;
/*
  <GeneralInput
        id="maxAmmount"
        name="maxAmmount"
        label={`A legmagasabb összeg, amit ráfordítanál 1000 Ft ban: ${formData?.maxAmmount} 000`}
        type="range"
        value={formData?.maxAmmount}
        onChange={handleInputChange}
        min={50}
        max={300}
      />

*/
