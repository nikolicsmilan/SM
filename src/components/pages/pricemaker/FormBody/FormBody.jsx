import React from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";

const FormBody = ({ step, formData, onFormChange, setStep }) => {
  return (
    <>
      {step.num === 1 && (
        <Step1
          formData={formData[0]}
          onFormChange={onFormChange}
          index={0}
          step={step}
          setStep={setStep}
        />
      )}
      {step.num === 2 && (
        <Step2
          formData={formData[1]}
          onFormChange={onFormChange}
          index={1}
          setStep={setStep}
        />
      )}
      {step.num === 3 && (
        <Step3 formData={formData[2]} onFormChange={onFormChange} index={2} />
      )}
      {step.num === 4 && (
        <Step4 formData={formData[3]} onFormChange={onFormChange} index={3} />
      )}
    </>
  );
};

export default FormBody;
