import React from "react";
import GeneralInput from "./Generalnput";

const Step4 = ({ formData, onFormChange, index }) => {
  const handleInputChange = (e) => {
    const { name, checked } = e.target;
    onFormChange(index, { ...formData, [name]: checked });
  };
  return (
    <div className="flex flex-col gap-4">
      <GeneralInput
        id="homedelivery"
        name="homedelivery"
        label="Homedelivery"
        type="checkbox"
        value={formData?.homedelivery}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default Step4;
