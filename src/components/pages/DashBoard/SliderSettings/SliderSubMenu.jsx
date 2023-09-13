import React, { useState } from "react";
import { sliderSubmenu } from "../../../../data/dashboard";
const SliderSubMenu = ({ config, setConfig, currentStyle }) => {
  const [buttons, setButtons] = useState(sliderSubmenu);
  const [choosenIcon, setChoosenIcon] = useState("slider");

  const handleConfig = (property, akarmi) => {
    setConfig((prevConfig) => ({
      ...prevConfig,
      [property]: !prevConfig[property],
      [property]: akarmi,
    }));
    if (!config[property]) {
      // Check if the property is not already true
      setChoosenIcon(property); // Set the chosen icon based on the property

      setConfig((prevConfig) => {
        const updatedConfig = { ...prevConfig };

        // Set the property being toggled to true
        updatedConfig[property] = true;

        // Set all other properties to false
        for (const prop in updatedConfig) {
          if (prop !== property) {
            updatedConfig[prop] = false;
          }
        }

        return updatedConfig;
      });
    }
  };

   // Filter the buttons based on currentStyle
   const filteredButtons = buttons.filter((item) => {
    if (currentStyle !== "stylebutton") {
      // Return only the "Háttér Szín" button for stylebutton
      return item;
    }
    // Return all buttons for other styles
    return true;
  });
  return (
    <>
    <div className="border-0 flex flex-wrap">
      {buttons.map((item, index) => (

        
        <div
          key={index}
          className="p-2 shadow-xl m-1 mt-0 text-dark border-0 h-10 flex flex-col border-sky-400"
        >
          <div className="flex">
            {currentStyle === "bgcolor" || item.name !== "bgcolor" ? (
              item.items.map((link) => (
                <div
                  onClick={() => handleConfig(link.name)}
                  key={link.name}
                  className={`flex w-8 lg-w-8 flex-row border-0 text-xl lg-text-2xl text-info rounded hover:text-primary p-0 m-0 cursor-pointer ${
                    link.name === choosenIcon ? "text-primary" : "text-info"
                  }`}
                >
                  <span className="border-0">{link.icon}</span>
                </div>
              ))
            ) : null}
          </div>
        </div>

      ))}
    </div>
    "currentStyle: " {currentStyle}
    </>
  );
};

export default SliderSubMenu;
// {currentStyle === "stylebutton" && link.name==="bgcolor" ? "izé" : ""}
/* {item.title  ? (
            <p className="font-bold text-sm lg:text-md">{item.title}</p>
          ) : (
            ""
          )} */
