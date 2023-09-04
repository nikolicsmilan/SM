import React from "react";
import GeneralInput from "./Generalnput";

const Step4 = ({ formData, onFormChange, handleCheckChange }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    onFormChange(name, value);
  };
  return (
    <div className="flex flex-col gap-4">
      <GeneralInput
        id="same"
        name="same"
        label="Megegyezik az előzőekkel"
        type="checkbox"
        value={formData?.same}
        onChange={handleCheckChange}
      />

      <GeneralInput
        id="nameDeliver"
        name="nameDeliver"
        label="Teljes Név"
        type="text"
        value={formData?.nameDeliver}
        onChange={handleInputChange}
      />
      <GeneralInput
        id="addressDeliver"
        name="addressDeliver"
        label="Lakcím"
        type="text"
        value={formData?.addressDeliver}
        onChange={handleInputChange}
      />
      <GeneralInput
        id="telDeliver"
        name="telDeliver"
        label="Telefonszám"
        type="tel"
        value={formData?.telDeliver}
        onChange={handleInputChange}
      />
      <GeneralInput
        id="emailDeliver"
        name="emailDeliver"
        label="Email"
        type="email"
        value={formData?.emailDeliver}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default Step4;
