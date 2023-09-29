import React from "react";
import { validateForm } from "../../../../utility/formValidation";

const NavButtons = ({
  step,
  setStep,
  max,
  formData,
  showGeneralModal,
  handleSendData,
}) => {
  const telPattern =
    /^(\+\d{1,4})?[- .()/]*\d{1,4}[- .()/]*\d{1,4}[- .()/]*\d{1,4}[- .()/]*\d{1,9}[- .()/]*\d{0,9}$/;
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  const handleIncrease = () => {
    if (
      validateForm(formData, step, telPattern, emailPattern, showGeneralModal)
    ) {
      if (step.num < max) {
        setStep((prevState) => ({ ...prevState, num: prevState.num + 1 }));
      } else {
        alert("Kész ki van töltve!");
      }
    }
  };

  const handleDecrease = () => {
    setStep((prevState) => ({
      ...prevState,
      num: prevState.num - 1,
      isClicked: false,
    }));
  };

  return (
    <div className="flex my-10 justify-between">
      {step.num >= 2 ? (
        <button
          className="p-2 border-0 rounded-2xl bg-primary w-24 text-gray-900 cursor-pointer"
          onClick={handleDecrease}
        >
          Előző
        </button>
      ) : (
        <div></div>
      )}
      {step.num !== 5 ? (
        <button
          className="p-2 border-0 rounded-2xl bg-primary w-24 text-gray-900 cursor-pointer"
          onClick={handleIncrease}
        >
          Következő
        </button>
      ) : (
        <button
          className="p-2 border-0 rounded-2xl bg-primary w-24 text-gray-900 cursor-pointer"
          onClick={handleSendData}
        >
          Küldés
        </button>
      )}
    </div>
  );
};

export default NavButtons;
