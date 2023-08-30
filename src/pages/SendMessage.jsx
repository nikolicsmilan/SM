import React, { useState } from "react";
import Intro from "../components/pages/pricemaker/Intro";
import Formnavigation from "../components/pages/pricemaker/FormNavigation/Formnavigation";
import NavButtons from "../components/pages/pricemaker/FormNavigation/NavButtons";
import FormBody from "../components/pages/pricemaker/FormBody/FormBody";
import useErrorModal from "../hooks/useErrorModal";
//HERE NEEDS A SEPARATE SELECTION OF MOBILE AND DESKTOP

const SendMessage = () => {
  const {  showErrorModal } = useErrorModal();
  const [step, setStep] = useState({
    num: 1,
    isClicked: false,
  });
  const [formData, setFormData] = useState([
    { furnituretype: "", stage: "Bútortípus" },
    { maxAmmount: "", description: "", deadline: "", stage: "Termék" },
    { address: "", city: "", state: "", zip: "", stage: "Szálítási adatok" },
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
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
   minHeight: "100vh", // Set minimum height to 100% of the viewport height
  };

  return (

    <div   className="z-1 h-auto lg:bg-success border-0 border-stone-900 my-10  text-center font-montserrat rounded-2xl">
      <Intro />
      <Formnavigation
        formData={formData}
        step={step}
        setStep={setStep}
        max={Object.keys(formData).length}
      />
      <div className="flex justify-center border-0 border-lime-400 my-5">
        <div className="bg-secondary rounded-md lg:shadow-md p-2 w-full lg:w-1/2 m-2 my-10  lg:h-auto bodrer-4 border-sky-400">
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
            formData={formData}
            showErrorModal={showErrorModal}
          />
          
        </div>
      </div>
     
    </div>

  );
};

export default SendMessage;

/*
<p className="text-center text-xl">
            step: {step.num} max: {Object.keys(formData).length}
          </p>
*/