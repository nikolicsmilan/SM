import React,{useEffect} from "react";
import GeneralInput from "./Generalnput";
const Step2 = ({ formData, onFormChange, index,setStep }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    onFormChange(index, { ...formData, [name]: value });
    setStep(prevState => ({ ...prevState, isClicked: true }));
  };

  return (
    <div className="flex flex-col gap-4">
      <GeneralInput
        id="address"
        name="address"
        label="Address"
        type="text"
        value={formData?.address}
        onChange={handleInputChange}
      />
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
