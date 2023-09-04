// formValidation.js
export const validateForm = (formData, step, telPattern, emailPattern, showErrorModal) => {
    if (!formData.furnituretype ) {
      showErrorModal("Válassz bútortípust!");
      return false;
    } else if (!formData.minAmmount && step.num === 2) {
      showErrorModal("Add meg a címed!");
      return false;
    } else if (!formData.name && step.num === 3) {
      showErrorModal("Add meg a teljes neved!");
      return false;
    } else if (!formData.address && step.num === 3) {
      showErrorModal("Add meg a lakcímed!");
      return false;
    } else if (!formData.tel && step.num === 3) {
      showErrorModal("Add meg a telefonszámod!");
      return false;
    }else if (!formData.email && step.num === 3) {
      showErrorModal("Add meg az email címed!");
      return false;
    } else if (!telPattern.test(formData.tel) && step.num === 3) {
      showErrorModal("Érvénytelen a telefonszám!");
      return false;
    } else if (!emailPattern.test(formData.email) && step.num === 3) {
      showErrorModal("Érvénytelen email!");
      return false;
    } else if (!formData.nameDeliver && step.num === 4) {
      showErrorModal("Add meg a teljes neved!");
      return false;
    } else if (!formData.addressDeliver && step.num === 4) {
      showErrorModal("Add meg a lakcímed!");
      return false;
    } else if (!formData.telDeliver && step.num === 4) {
      showErrorModal("Add meg a telefonszámod!");
      return false;
    } else if (!formData.emailDeliver && step.num === 4) {
      showErrorModal("Add meg a email címed!");
      return false;
    }else if (!telPattern.test(formData.telDeliver) && step.num === 4) {
      showErrorModal("Érvénytelen a telefonszám!");
      return false;
    } else if (!emailPattern.test(formData.emailDeliver) && step.num === 4) {
      showErrorModal("Érvénytelen email!");
      return false;
    }
    return true;
  };



  