import React from "react";
import { Link } from "react-router-dom";
import { useStyleContext } from "../../context/StyleContext";

const DesktopNavBar = ({ Logo, NavButton, Search, UserIcon }) => {
  const { style } = useStyleContext();
  return (
    <div className={`flex border-0 bg-secondary w-full p-2 items-center h-14 opacity-95 ${style==='narancs'?'bg-stone-100':'bg-secondary'}`}>
      <div className="w-1/3 border-0  ">
        <Link to="/">
        <Logo />
        </Link>
     
      </div>
      <div className="w-auto flex ">
        <NavButton />
      </div>
      <div className="w-full mx-2 flex border-0  ">
        <Search />
      </div>
      <div className="w-1/12 flex justify-end border-0 p-2">
        <UserIcon />
      </div>
    </div>
  );
};

export default DesktopNavBar;
