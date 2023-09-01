import React from "react";

const NavButtons = ({ step, setStep, max, formData, showErrorModal }) => {
  // const telPattern = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;
  const telPattern =
    /^(\+\d{1,4})?[- .()/]*\d{1,4}[- .()/]*\d{1,4}[- .()/]*\d{1,4}[- .()/]*\d{1,9}[- .()/]*\d{0,9}$/;

  const handleIncrease = () => {
    if (!formData[0].furnituretype && step.num === 1) {
      showErrorModal("Válasz bútortípust!");
      return;
    } else if (!formData[1].minAmmount && step.num === 2) {
      showErrorModal("Add meg a címed!");
      return;
    } else if (!formData[2].name && step.num === 3) {
      showErrorModal("Add meg a teljes neved!");
      return;
    } else if (!formData[2].address && step.num === 3) {
      showErrorModal("Add meg a lakcímed!");
      return;
    } else if (!formData[2].tel && step.num === 3) {
      showErrorModal("Add meg a telefonszámod!");
      return;
    } else if (!telPattern.test(formData[2].tel) && step.num === 3) {
      showErrorModal("Érvénytelen a telefonszám!");
      return;
    }

    if (step.num < max) {
      //setStep((prevState) => prevState + 1);
      setStep((prevState) => ({ ...prevState, num: prevState.num + 1 }));
    } else {
      alert("Kész ki van töltve!");
    }
  };

  const handleDecrease = () => {
    console.log("step visszafelé");
    setStep((prevState) => ({ ...prevState, num: prevState.num - 1 }));
  };

  return (
    <div className="flex my-10 justify-between">
      {step.num >= 2 ? (
        <button
          className="p-2 border-0 rounded-2xl bg-primary w-24 text-gray-900 cursor-pointer"
          onClick={handleDecrease}
          //disabled={!step.isClicked}
        >
          Előző
        </button>
      ) : (
        <div></div>
      )}

      <button
        className="p-2 border-0 rounded-2xl bg-primary w-24 text-gray-900 cursor-pointer"
        onClick={handleIncrease}
        // disabled={!step.isClicked}
      >
        Következő
      </button>
    </div>
  );
};

export default NavButtons;
