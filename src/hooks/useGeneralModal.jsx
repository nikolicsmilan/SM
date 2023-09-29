import { useState } from "react";
import { useStyleContext } from "../context/StyleContext";

const useGeneralModal = () => {
  const {generalModel, setGeneralModel} =useStyleContext()
  //const [error, setError] = useState(true);

  const showGeneralModal = (generalModel) => {
    console.log('ez az error',generalModel)
   // setError(error);
   setGeneralModel(generalModel)
  };

  const hideGeneralModal = () => {
    console.log('lefut a hide error is')
    //setError(null);
    setGeneralModel(null)
  };
//error
  return {  showGeneralModal, hideGeneralModal };
};

export default useGeneralModal;
