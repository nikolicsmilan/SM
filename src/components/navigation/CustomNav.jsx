import React from "react";

const CustomNav = ({ onClick, ownstyle, icon, name,englishName }) => {
  return (
    <div>

    <p
      className={`flex items-center m-1 border-0 cursor-pointer ${
        ownstyle ? ownstyle : ""
      }`}
      onClick={() => onClick(englishName)}
    >
      <span className={`text-2xl ${ownstyle ? ownstyle : "text-info"}`}>
        {icon}
      </span>
      <span className={`capitalize m-1 ${ownstyle ? ownstyle : "text-info"}`}>
        {name}
      </span>
    </p>
    </div>
  );
};

export default CustomNav;
