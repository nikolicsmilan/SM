import React, { useState } from "react";
import { sliderSubmenu } from "../../../../data/dashboard";
const SliderSubMenu = ({ config, setConfig, selectedText }) => {
  const [buttons, setButtons] = useState(sliderSubmenu);
  const [choosenIcon, setChoosenIcon] = useState("color");

  const handleConfig = (property) => {
    setConfig((prevConfig) => ({
      ...prevConfig,
      [property]: !prevConfig[property],
     
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
  //Only the buttontext will menü BackgroundColor
  // Filter the buttons based on selectedText
  //If buttontext equal selctedText value get back all
  //But if title equal "Háttér szín"or
  // item.items[0].name !== "bgcolor" not back
  const filteredButtons = buttons.filter((item) => {
    if (selectedText === "buttontext") {
      return item;
    } else {
      if (item.title !== "Háttér Szín") {
        return item;
      }
    }
    return false;
  });
  return (
    <>
      <div className="border-0 flex flex-wrap">
        {filteredButtons.map((item, index) => (
          <div
            key={index}
            className="p-2 shadow-xl m-1 mt-0 text-dark border-0 h-10 flex flex-col border-sky-400"
          >
            <div className="flex">
              {item.items.map((link) => (
                <div
                  onClick={() => handleConfig(link.name)}
                  key={link.name}
                  className={`flex w-8 lg-w-8 flex-row border-0 text-xl lg-text-2xl text-info rounded hover:text-primary p-0 m-0 cursor-pointer ${
                    link.name === choosenIcon ? "text-primary" : "text-info"
                  }`}
                >
                  <span className="border-0">{link.icon}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SliderSubMenu;
/*  const handleConfig = (property, akarmi) => {
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
  }; */