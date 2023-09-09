import React from "react";
import { useNavigate } from "react-router-dom";
import { MdOutlineLogin, MdLogout, MdSettings } from "react-icons/md";

const UserLogin = ({
  appear,
  setAppearUser,
  user,
  logOut,
  config,
  setConfig,
  setChoosenIcon,
}) => {
  const navigate = useNavigate();

  const handleLogin = () => {
    console.log("erz le fog futni");
    navigate("/Login");
  };

  const handleConfig = (property, akarmi) => {
    /*setConfig((prevConfig) => ({
   ...prevConfig,
   [property]: !prevConfig[property],
   [property]: akarmi,
 }));*/
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
  const handleSettings = () => {
    navigate("/dashboard");
    handleConfig("users");
  };

  return (
    <div
      onClick={() => setAppearUser(false)}
      //block
      className={`opacity-100 z-40 relative rounded-2xl border-0 border-red-400 w-full h-full bg-white px-2 py-5 `}
    >
      {user ? (
        <div className=" z-50 relative flex items-center border-b border-solid border-gray-300">
          <img
            onClick={() => setAppearUser((prevState) => !prevState)}
            className="rounded-full border-1 w-12 z-50 cursor-pointer m-2"
            src={`${user.photoURL}`}
            title={user.displayName}
            alt="ne világítsá má sárgán azt írok amit akarok"
          />
          <p className="font-bold"> {user.displayName}</p>
        </div>
      ) : (
        ""
      )}
      <p
        className="z-40 relative border-0 text-info font-bold z-11 cursor-pointer my-2"
        onClick={() => {
          handleLogin();
        }}
      >
        <MdOutlineLogin className="inline m-2  text-2xl my-2" />
        Bejelentkezés
      </p>
      <p
        className=" border-0 text-info font-bold cursor-pointer"
        onClick={() => {
          logOut();
        }}
      >
        <MdLogout className="inline m-2 text-2xl" />
        Kijelentkezés
      </p>
      <p
        className=" border-0 text-info font-bold cursor-pointer"
        onClick={() => {
          handleSettings();
        }}
      >
        <MdSettings className="inline m-2 text-2xl" />
        Beállítások
      </p>
    </div>
  );
};

export default UserLogin;
