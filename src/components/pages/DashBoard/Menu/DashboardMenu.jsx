import React from "react";

const DashboardMenu = ({
  buttons,
  config,
  setConfig,
  choosenIcon,
  setChoosenIcon,
}) => {
  const handleConfig = (property, akarmi) => {
       /*setConfig((prevConfig) => ({
      ...prevConfig,
      [property]: !prevConfig[property],
      [property]: akarmi,
    }));*/
    if (!config[property]) { // Check if the property is not already true
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


  return (
    <div className="border-0 flex flex-wrap ">
      {buttons.map((item, index) => (
        <div
          key={index}
          className=" p-5 shadow-xl m-1 mt-0  text-dark border-0 flex flex-col border-sky-400"
        >
          {item.title !== "Pages" ? (
            <p className="font-bold text-sm lg:text-md">{item.title}</p>
          ) : (
            ""
          )}
          <div className="flex">
            {item.items.map((link) => (
              <div
                onClick={() => handleConfig(link.name)}
                key={link.name}
                className={`flex w-8 lg:w-16 flex-row border-0 text-xl lg:text-2xl text-info rounded hover:text-primary p-0 m-1 cursor-pointer ${
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
  );
};

export default DashboardMenu;
