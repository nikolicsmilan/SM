import React from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";

const FormBody = ({
  step,
  formData,

  onFormChange,
  setStep,


  handleCheckChange,
}) => {
  return (
    <form>
      {step.num === 1 && (
        <Step1 formData={formData} onFormChange={onFormChange} step={step} />
      )}
      {step.num === 2 && (
        <Step2 formData={formData} onFormChange={onFormChange} />
      )}
      {step.num === 3 && (
        <Step3 formData={formData} onFormChange={onFormChange} />
      )}
      {step.num === 4 && (
        <Step4
          formData={formData}
          onFormChange={onFormChange}
          handleCheckChange={handleCheckChange}
        />
      )}
      {step.num === 5 && (
        <Step5 formData={formData} setStep={setStep}  />
      )}
    </form>
  );
};

export default FormBody;
