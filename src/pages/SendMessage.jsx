import React, { useState } from "react";
import Intro from "../components/pages/pricemaker/Intro";
import Formnavigation from "../components/pages/pricemaker/FormNavigation/Formnavigation";
import NavButtons from "../components/pages/pricemaker/FormNavigation/NavButtons";
import FormBody from "../components/pages/pricemaker/FormBody/FormBody";
import useErrorModal from "../hooks/useErrorModal";
import { addMessage } from "../components/firebase/Firestore";

const SendMessage = () => {
  const { showErrorModal } = useErrorModal();
  const [step, setStep] = useState({
    num: 1,
    isClicked: false,
  });
  const [formData, setFormData] = useState([
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
      same: false,
      name: "",
      address: "",
      tel: "",
      email: "",
      stage: "Szállítási adatok",
    },
    { homedelivery: "", stage: "Összegzés" },
  ]);

  const handleFormChange = (stepindex, data) => {
    setFormData((prevFormData) => {
      const updatedFormData = [...prevFormData];

      updatedFormData[stepindex] = { ...updatedFormData[stepindex], ...data };
      return updatedFormData;
    });
  };
  const handleSendData = () => {
    if (step.isClicked) {
      alert("Elküldve! Jó még nem mert ez csak teszt!");
      addMessage("message","",formData)
    } else {
      showErrorModal("Küldéshez fogad el az adatvédelmi tájékotatónkat! ");
    }
  };

  return (
    <div className="z-1 h-auto lg:bg-success  my-0 lg:my-10  text-center font-montserrat rounded-2xl">
      <Intro />
      <Formnavigation
        formData={formData}
        step={step}
        setStep={setStep}
        max={Object.keys(formData).length}
      />
      <div className="flex justify-center  my-5">
        <div className="bg-secondary rounded-md lg:shadow-md p-2 w-full lg:w-1/2 m-2 my-0 lg:my-10  lg:h-auto">
          <FormBody
            step={step}
            setStep={setStep}
            formData={formData}
            setFormData={setFormData}
            onFormChange={handleFormChange}
          />
          <NavButtons
            step={step}
            setStep={setStep}
            max={Object.keys(formData).length}
            formData={formData}
            showErrorModal={showErrorModal}
            handleSendData={handleSendData}
          />
        </div>
      </div>
    </div>
  );
};

export default SendMessage;
