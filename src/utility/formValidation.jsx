// formValidation.js
export const validateForm = (formData, step, telPattern, emailPattern, showErrorModal) => {
    if (!formData[0].furnituretype && step.num === 1) {
      showErrorModal("Válassz bútortípust!");
      return false;
    } else if (!formData[1].minAmmount && step.num === 2) {
      showErrorModal("Add meg a címed!");
      return false;
    } else if (!formData[2].name && step.num === 3) {
      showErrorModal("Add meg a teljes neved!");
      return false;
    } else if (!formData[2].address && step.num === 3) {
      showErrorModal("Add meg a lakcímed!");
      return false;
    } else if (!formData[2].tel && step.num === 3) {
      showErrorModal("Add meg a telefonszámod!");
      return false;
    } else if (!telPattern.test(formData[2].tel) && step.num === 3) {
      showErrorModal("Érvénytelen a telefonszám!");
      return false;
    } else if (!emailPattern.test(formData[2].email) && step.num === 3) {
      showErrorModal("Érvénytelen email!");
      return false;
    } else if (!formData[3].name && step.num === 4) {
      showErrorModal("Add meg a teljes neved!");
      return false;
    } else if (!formData[3].address && step.num === 4) {
      showErrorModal("Add meg a lakcímed!");
      return false;
    } else if (!formData[3].tel && step.num === 4) {
      showErrorModal("Add meg a telefonszámod!");
      return false;
    } else if (!telPattern.test(formData[3].tel) && step.num === 4) {
      showErrorModal("Érvénytelen a telefonszám!");
      return false;
    } else if (!emailPattern.test(formData[3].email) && step.num === 4) {
      showErrorModal("Érvénytelen email!");
      return false;
    }
    return true;
  };
  