import React, { useState } from "react";
import { sliderSubmenu } from "../../../../data/dashboard";
const SliderSubMenu = ({ config, setConfig, currentStyle,setTheColors,currentColor }) => {
  const [buttons, setButtons] = useState(sliderSubmenu);
  const [choosenIcon, setChoosenIcon] = useState("slider");

  const handleConfig = (property, akarmi) => {
    //ezzel van a probléma
    setConfig((prevConfig) => ({
      ...prevConfig,
      [property]: !prevConfig[property],
      [property]: akarmi,
    }));
    setChoosenIcon(property)

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


console.log("config",config)

    if (config.bgcolor) {
      console.log("ez lefut buttonbackgroundcolor?")
      setTheColors("buttonbackgroundcolor");
    } else {
      setTheColors(currentColor);
    }

  };
  let count = 0;
  // Filter the buttons based on currentStyle
  const filteredButtons = buttons.filter((item) => {
    if (currentStyle === "stylebutton") {
      // Return only the "Háttér Szín" button for stylebutton
      return item;
    } else {
      if (item.title !== "Háttér Szín") {
        return item;
      }
      console.log("ez egy item: ", count++, item);
    }
    // Return all buttons for other styles
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
              {currentStyle === "bgcolor" || item.name !== "bgcolor"
                ? item.items.map((link) => (
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
                : null}
            </div>
          </div>
        ))}
      </div>
     
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
