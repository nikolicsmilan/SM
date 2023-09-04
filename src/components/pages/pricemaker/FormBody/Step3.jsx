import React from "react";
import GeneralInput from "./Generalnput";
const Step3 = ({ formData, onFormChange }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    onFormChange(name, value);
  };
  return (
    <div className="flex flex-col gap-4">
      <GeneralInput
        id="name"
        name="name"
        label="Teljes Név"
        type="text"
        value={formData?.name}
        onChange={handleInputChange}
      />
      <GeneralInput
        id="address"
        name="address"
        label="Lakcím"
        type="text"
        value={formData?.address}
        onChange={handleInputChange}
      />
      <GeneralInput
        id="tel"
        name="tel"
        label="Telefonszám"
        type="tel"
        value={formData?.tel}
        onChange={handleInputChange}
      />
      <GeneralInput
        id="email"
        name="email"
        label="Email"
        type="email"
        value={formData?.email}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default Step3;
