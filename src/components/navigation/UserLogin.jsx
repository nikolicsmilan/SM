import React from "react";
import { useNavigate } from "react-router-dom";
import { MdOutlineLogin, MdLogout, MdSettings } from "react-icons/md";

const UserLogin = ({ appear, setAppearUser, user }) => {
  const navigate = useNavigate();

  const handleLogin = () => {
    console.log("erz le fog futni");
    navigate("/Login");
  };
  return (
    <div
      onClick={() => setAppearUser(false)}
      //block 
      className={`z-100 relative rounded-2xl border-0 w-full h-96 bg-white px-2 py-5`}
    >
      {user ? (
        <div className="flex items-center border-b border-solid border-gray-300">
          <img
            onClick={() => setAppearUser((prevState) => !prevState)}
            className="rounded-full border-1 w-12 z-500 cursor-pointer m-2"
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
        className=" border-0 text-info font-bold z-11 cursor-pointer my-2"
        onClick={() => {
          handleLogin();
        }}
      >
        <MdOutlineLogin className="inline m-2  text-2xl my-2" />
        Bejelentkezés
      </p>
      <p className=" border-0 text-info font-bold cursor-pointer">
        <MdLogout className="inline m-2 text-2xl" />
        Kijelentkezés
      </p>
      <p className=" border-0 text-info font-bold cursor-pointer">
        <MdSettings className="inline m-2 text-2xl" />
        Beállítások
      </p>
    </div>
  );
};

export default UserLogin;
