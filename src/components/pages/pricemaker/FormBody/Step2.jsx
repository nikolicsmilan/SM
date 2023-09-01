import React, { useEffect } from "react";
import GeneralInput from "./Generalnput";
import RangeInput from "./RangeInput";
const Step2 = ({ formData, onFormChange, index, setStep }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    onFormChange(index, { ...formData, [name]: value });
   // setStep((prevState) => ({ ...prevState, isClicked: true }));
  };

  return (
    <div className="flex flex-col gap-4">
      <RangeInput  id="minAmmount"
        name="minAmmount"
        label={`Minimum összeg`}
        type="range"
        value={formData?.minAmmount}
        onChange={handleInputChange}
        min={50}
        max={1000}/>
      <GeneralInput
        id="description"
        name="description"
        label="Egyedi elképzelések"
        type="textarea"
        rows={5}
        value={formData?.city}
        onChange={handleInputChange}
      />
     <GeneralInput
        id="deadline"
        name="deadline"
        label="Határidő (ha van)"
        type="date"
        value={formData?.expDate}
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
