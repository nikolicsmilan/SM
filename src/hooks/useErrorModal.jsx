import { useState } from "react";
import { useStyleContext } from "../context/StyleContext";

const useErrorModal = () => {
  const {errorModel,setErrorModel} =useStyleContext()
  const [error, setError] = useState(true);

  const showErrorModal = (errorModel) => {
    console.log('ez az error',errorModel)
   // setError(error);
   setErrorModel(errorModel)
  };

  const hideErrorModal = () => {
    console.log('lefut a hide error is')
    //setError(null);
    setErrorModel(null)
  };

  return { error, showErrorModal, hideErrorModal };
};

export default useErrorModal;
