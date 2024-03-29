import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useStyleContext } from "../../context/StyleContext";
import { UserAuth } from "../../context/AuthContext";
import { MyDataContext } from "../../context/DataContext";
import UserLogin from "./UserLogin";
const MobileNavBar = ({
  Logo,
  NavButton,
  Search,
  UserIcon,
  GiHamburgerMenu,
  AiOutlineClose,
}) => {
  const {style, activeAside, setActiveAside,setAppearUser, appearUser } = useStyleContext();
  const { user, logOut, currentRole, setCurrentRole } = UserAuth();
  const { config, setConfig, setChoosenIcon } = MyDataContext();

  return (
    <div className="flex flex-col relative z-49 border-sky-400">
      {" "}
      {/* Added relative class */}
      <div className="flex border-0 bg-white w-full px-2 items-center relative z-49">
        <div className=" border-0 relative z-49">
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <div className="flex-grow justify-center flex bg-white border-0 relative z-49">
          <NavButton />
        </div>

        <div className="w-8 flex justify-end border-0 p-2">
          {!activeAside ? (
            <GiHamburgerMenu
              onClick={() => setActiveAside((prevState) => !prevState)}
            />
          ) : (
            ""
          )}
        </div>
        <div className=" flex justify-end border-0 p-2 ">
          <UserIcon
            onClick={() => setAppearUser((prevState) => !prevState)}
            className="text-2xl text-info bg-secondary rounded cursor-pointer "
          />
        </div>
      </div>
      <div>
        <div className="my-2 mx-2 flex justify-center border-0 bg-white h-8 ">
          <Search />
        </div>
      </div>
      {appearUser && (
        <div className="fixed top-10 h-96 w-80 rounded-2xl z-40 shadow-xl  m-5 border-0 border-sky-400">
          <UserLogin
            user={user}
            setAppearUser={setAppearUser}
            logOut={logOut}
            config={config}
            setConfig={setConfig}
            setChoosenIcon={setChoosenIcon}
          />
        </div>
      )}
    </div>
  );
};

export default MobileNavBar;
/*
  <div className="flex flex-col">
      
      <div className="flex border-0 bg-white w-full px-2 items-center ">
        <div className=" border-0 ">
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <div className="flex-grow justify-center flex bg-white border-0 ">
          <NavButton />
        </div>

        <div className="w-8 flex justify-end border-0 p-2">
          {!activeAside ? (
            <GiHamburgerMenu
              onClick={() => setActiveAside((prevState) => !prevState)}
            />
          ) : (
            ""
          )}
        </div>
        <div className=" flex justify-end border-0 p-2 ">
          <UserIcon onClick={()=>{
            setAppear((prevState)=>!prevState)
          }} className=" text-2xl text-info bg-secondary rounded cursor-pointer " />
        </div>
      </div>
      <div>
        <div className="my-2 mx-2 flex justify-center border-0 bg-white h-8">
          <Search />
        </div>
      </div>
      {appear?<UserLogin/>:""}
    </div>

*/

/*For some reason, if w-full is on the outer div of search, it causes a problem in the BottomNavbar. It is not fixed at the bottom but moves slightly lower.*/

/* <div className="w-full mx-2 flex">
        <Search />
      </div>*/
/*
          <div className=" flex justify-end border-2 p-0 m-1 border-red-400 h-80 w-80">
        <UserIcon className=" bg-primary text-4xl h-80 w-80" />

        </div>*/
