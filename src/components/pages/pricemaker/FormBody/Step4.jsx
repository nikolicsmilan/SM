import React from "react";
import GeneralInput from "./Generalnput";

const Step4 = ({ formData, setFormData, onFormChange, index }) => {
  const initialFormData = [
    { furnituretype: "", stage: "Bútortípus" },
    { minAmmount: "50", description: "", deadline: "", stage: "Termék" },
    {
      name: "",
      address: "",
      tel: "",
      email: "",
      stage: "Elérhetőség",
    },
    {
      same: false, // Set 'same' to false initially
      name: "", // These fields can have initial empty values
      address: "",
      tel: "",
      email: "",
      stage: "Szálítási adatok",
    },
    { homedelivery: "", stage: "Összegzés" },
  ];
  const handleCheckChange = (e) => {
    const { checked } = e.target;

    if (checked) {
      setFormData((prevData) => {
        const updatedFormData = [...prevData];
        updatedFormData[3] = {
          ...updatedFormData[2],
          same: true,
          stage: "Szállítási adatok",
        }; // Copy data from 'Elérhetőség'
        return updatedFormData;
      });
    } else {
      setFormData((prevData) => {
        const updatedFormData = [...prevData];
        updatedFormData[3] = {
          ...initialFormData[3],
          same: false,
          stage: "Szállítási adatok",
        }; 
        return updatedFormData;
      });
    }
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    onFormChange(index, { ...formData, [name]: value });
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

export default Step4;
