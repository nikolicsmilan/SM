import React, { useState } from "react";

// Define a custom hook that takes an array of button ids as an argument using an arrow function
export const useClickedButton = (buttonIds) => {
  // Declare one state variable for a map of button ids and boolean values
  const [buttonsMap, setButtonsMap] = useState({});

  // Define a function that toggles the boolean value in the map
  function handleButtonClick(buttonIds) {
    console.log(buttonIds)
   /* setButtonsMap((prevState) => ({
      ...prevState,
      [`${buttonId}`]: !prevState[`${buttonId}`],
    }));*/
  }

  // Return the state variable and the click handler function
  return [buttonsMap, handleButtonClick];
};



/*


  const myElementButtonhandle = (item) => {
    const mainGroupButtonhandle = (item) => {
      setSelectedMainGroup(item);
      setSelectedSubGroup(null);
      // setSelectedMainButton(item.id);
    };
    const subGroupButtonhandle = (item) => {
      // setSelectedSubButton(item.id);
      setSelectedSubGroup(item);
    };

    const myElementButtonhandle = (item) => {
      elementButtonhandle(item, setSelectedId);
      //  setSelectedSecondSub(item.id);
      // console.log("setSelectedSecondSubbbbbbbbbb:", item.id);
    };

    if (item.grouptype === "Fő csoport") {
      console.log('lefuttttttttttttttt?', item.id)
      mainGroupButtonhandle(item);
      setSelectedMainButton(item.id)
    } else if (item.grouptype === "Al csoport") {
      subGroupButtonhandle(item);
      selectedSubButton(item.id)
    } else if (item.grouptype === "2.Al csoport") {
      myElementButtonhandle(item);
      setSelectedSecondSub(item.id)
      console.log()
    }

    //fel kell írni melyikcsoport eesteében mit csinálon
    //elementButtonhandle(item, setSelectedId);
    console.log("ezzzzz   az", item);
    //  setSelectedSecondSub(item.id);
    // console.log("setSelectedSecondSubbbbbbbbbb:", item.id);
  };
*/