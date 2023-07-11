import React, { useState } from "react";
import Intro from "../components/pages/pricemaker/Intro";
import Formnavigation from "../components/pages/pricemaker/FormNavigation/Formnavigation";
import NavButtons from "../components/pages/pricemaker/FormNavigation/NavButtons";
import FormBody from "../components/pages/pricemaker/FormBody/FormBody";

//HERE NEEDS A SEPARATE SELECTION OF MOBILE AND DESKTOP

const PriceMaker = () => {
  const [step, setStep] = useState({
    num: 1,
    isClicked: false,
  });
  const [formData, setFormData] = useState([
    { furnituretype: "", stage: "Bútortípus" },
    { address: "", city: "", state: "", zip: "", stage: "Termék" },
    { cardNumber: "", expDate: "", cvv: "", stage: "Elérhetőség" },
    { homedelivery: "", stage: "Összegzés" },
  ]);

  const handleFormChange = (stepindex, data) => {
    setFormData((prevFormData) => {
      const updatedFormData = [...prevFormData];
      console.log("prevFormData", prevFormData);
      console.log(" updatedFormData[stepindex]", updatedFormData[stepindex]);
      updatedFormData[stepindex] = { ...updatedFormData[stepindex], ...data };
      return updatedFormData;
    });
  };


  return (
    <div className="border-0 border-red-400 my-2 text-center font-montserrat">
      <Intro />
      <Formnavigation
        formData={formData}
        step={step}
        setStep={setStep}
        max={Object.keys(formData).length}
      />
      <div className="flex justify-center border-0 my-5">
        <div className="bg-white rounded-md shadow-md p-6 w-1/2 my-10">
          <FormBody
            step={step}
            setStep={setStep}
            formData={formData}
            onFormChange={handleFormChange}
          />
          <NavButtons
            step={step}
            setStep={setStep}
            max={Object.keys(formData).length}
          />
          <p className="text-center text-xl">
            step: {step.num} max: {Object.keys(formData).length}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PriceMaker;

