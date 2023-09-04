import React, { useState } from "react";
import Intro from "../components/pages/pricemaker/Intro";
import Formnavigation from "../components/pages/pricemaker/FormNavigation/Formnavigation";
import NavButtons from "../components/pages/pricemaker/FormNavigation/NavButtons";
import FormBody from "../components/pages/pricemaker/FormBody/FormBody";
import useErrorModal from "../hooks/useErrorModal";
import { addMessage2 } from "../firebase/Firestore";

const SendMessage = () => {
  const { showErrorModal } = useErrorModal();
  const [step, setStep] = useState({
    num: 1,
    isClicked: false,
  });

  const [formData, setFormData] = useState({
    id:"",
    furnituretype: "",
    minAmmount: "50",
    description: "",
    deadline: "",
    name: "",
    address: "",
    tel: "",
    email: "",
    same: false,
    nameDeliver: "",
    addressDeliver: "",
    telDeliver: "",
    emailDeliver: "",
  });

  const [formDataNavigation, setFormDataNavigation] = useState([
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

  const handleCheckChange = (e) => {
    if (!formData.same) {
      setFormData((prevData) => {
        const updatedFormData = { ...prevData };
        console.log("updatedFormData in handldeCheckChange: ", updatedFormData);
        updatedFormData.nameDeliver = updatedFormData.name;
        updatedFormData.addressDeliver = updatedFormData.address;
        updatedFormData.telDeliver = updatedFormData.tel;
        updatedFormData.emailDeliver = updatedFormData.email;
        updatedFormData.same = true;
        return updatedFormData;
      });
    } else {
      setFormData((prevData) => {
        const updatedFormData = { ...prevData };
        updatedFormData.nameDeliver = updatedFormData.nameDeliver || "";
        updatedFormData.addressDeliver = updatedFormData.addressDeliver || "";
        updatedFormData.telDeliver = updatedFormData.telDeliver || "";
        updatedFormData.emailDeliver = updatedFormData.emailDeliver || "";
        updatedFormData.same = false;
        console.log(
          "updatedFormData in handldeCheckChange false branch: ",
          updatedFormData
        );
        return updatedFormData;
      });
    }
  };

  const handleFormChange = (name, value) => {
    setFormData((prevFormData) => {
      let updatedFormData = { ...prevFormData };
      updatedFormData = { ...updatedFormData, [name]: value };
      return updatedFormData;
    });
  };

  const handleSendData = () => {
    if (step.isClicked) {
      alert("Elküldve! Jó még nem mert ez csak teszt!");
      addMessage2("messages", "", formData);
    } else {
      showErrorModal("Küldéshez fogad el az adatvédelmi tájékotatónkat! ");
    }
  };

  return (
    <div className="z-1 h-auto lg:bg-success  my-0 lg:my-10  text-center font-montserrat rounded-2xl">
      <Intro />
      <Formnavigation
        formData={formDataNavigation}
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
            onFormChange={handleFormChange}
            handleCheckChange={handleCheckChange}
          />
          <NavButtons
            step={step}
            setStep={setStep}
            max={Object.keys(formDataNavigation).length}
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
