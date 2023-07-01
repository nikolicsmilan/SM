import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useStyleContext } from "../../context/StyleContext";
const MobileNavBar = ({
  Logo,
  NavButton,
  Search,
  UserIcon,
  GiHamburgerMenu,
  AiOutlineClose,
}) => {
  const { activeAside, setActiveAside } = useStyleContext();
  return (
    <div className="flex flex-col">
      <div className="flex border-0 bg-white w-full px-2 items-center h-14">
        <div className=" border-0 ">
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <div className="w-full justify-center flex bg-white border-0">
          <NavButton />
        </div>

        <div className=" flex justify-end border-0 p-2">
          {activeAside ? (
            <GiHamburgerMenu
              onClick={() => setActiveAside((prevState) => !prevState)}
            />
          ) : (
          ""
          )}
        </div>
      </div>
      <div>
        <div className="w-full mx-2 flex justify-center border-0 bg-white">
          <Search />
        </div>
      </div>
    </div>
  );
};

export default MobileNavBar;

/* <div className="w-full mx-2 flex">
        <Search />
      </div>*/
