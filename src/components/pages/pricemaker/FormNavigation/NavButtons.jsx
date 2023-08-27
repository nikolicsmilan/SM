import React from "react";

const NavButtons = ({ step, setStep, max }) => {
  const handleIncrease = () => {
    if (step.num < max) {
      //setStep((prevState) => prevState + 1);
      setStep(prevState => ({ ...prevState, num: prevState.num + 1 }));
    }else{
      alert('Kész ki van töltve!')
    }
  };

  const handleDecrease = () => {

    setStep(prevState => ({ ...prevState, num: prevState.num - 1 }));
  };

  return (
    <div className="flex my-10 justify-between">
      {step.num >= 2 ? (
        <button
          className="p-2 border-0 rounded-2xl bg-primary w-24 text-gray-900"
          onClick={handleDecrease}
          disabled={!step.isClicked}
        >
         Előző
        </button>
      ) : (
        <div></div>
      )}

      <button
        className="p-2 border-0 rounded-2xl bg-primary w-24 text-gray-900"
        onClick={handleIncrease}
        disabled={!step.isClicked}
      >
       Következő
      </button>
    </div>
  );
};

export default NavButtons;
