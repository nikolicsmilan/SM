import React from "react";
import UserLogin from "./UserLogin";
import { Link } from "react-router-dom";
import { useStyleContext } from "../../context/StyleContext";
import { UserAuth } from "../../context/AuthContext";
import { MyDataContext } from "../../context/DataContext";

const DesktopNavBar = ({ Logo, NavButton, Search, UserIcon }) => {
  const { style, setAppearUser, appearUser } = useStyleContext();
  const { user, logOut, currentRole, setCurrentRole } = UserAuth();
  const { config, setConfig, setChoosenIcon } = MyDataContext();
  return (
    // why opacity-95 affect the UserLogin.jsx opacity, not override inline and important
    <div
      className={`z-40 relative flex border-0 border-red-400 bg-secondary w-full p-2 items-center h-14 ${
        style === "narancs" ? "bg-stone-100" : "bg-secondary"
      }`}
    >
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
      <div className="w-1/12 flex justify-end border-0 p-2 ">
        {user ? (
          <img
            onClick={() => setAppearUser((prevState) => !prevState)}
            className="rounded-full border-1 w-12 z-40 cursor-pointer"
            src={`${user.photoURL}`}
            title={user.displayName}
            alt="ne világítsá má sárgán azt írok amit akarok"
          />
        ) : (
          <UserIcon
            onClick={() => setAppearUser((prevState) => !prevState)}
            className=" text-2xl text-info bg-secondary rounded cursor-pointer"
            title="User"
          />
        )}
      </div>
      {appearUser && (
        <div
          style={{ opacity: 1 }}
          className="my-opacity-1 w-80 top-10 right-0 h-96 z-40 shadow-xl absolute m-5 border-0 border-sky-400 rounded-2xl bg-red-400"
        >
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

export default DesktopNavBar;
/*
    {appearUser && (
        <div className="user-login-modal-container top-10 right-0 absolute z-50 shadow-xl m-5 border-0 border-sky-400">
          <UserLogin setAppearUser={setAppearUser} />
        </div>
      )}
*/
