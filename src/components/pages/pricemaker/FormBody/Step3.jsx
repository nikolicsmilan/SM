import React from "react";
import GeneralInput from "./Generalnput";
const Step3 = ({ formData, onFormChange, index }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    onFormChange(index, { ...formData, [name]: value });
  };
  return (
    <div className="flex flex-col gap-4">
      <GeneralInput
        id="cardNumber"
        name="cardNumber"
        label="Card Number"
        type="number"
        value={formData?.cardNumber}
        onChange={handleInputChange}
      />
      <GeneralInput
        id="expDate"
        name="expDate"
        label="Experation Date"
        type="date"
        value={formData?.expDate}
        onChange={handleInputChange}
      />
      <GeneralInput
        id="cvv"
        name="cvv"
        label="Cvv"
        type="text"
        value={formData?.cvv}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default Step3;
