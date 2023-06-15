import React from "react";
import { useNavigate } from "react-router-dom";

const NotReady = () => {
  const navigate = useNavigate();
  const navigateHandler = () => {
    navigate("/");
  };
  return (
    <div className="flex flex-col justify-center items-center  text-center h-screen ">
      <div>
        <h1 className="text-2xl"> Az oldal ezen része fejlesztés alatt áll. </h1>
        <p>Jelenleg csak a Főoldalt tudod használni</p>
        <button className="text-primary" onClick={navigateHandler}>
          Vissza a Főoldalra
        </button>
      </div>
    </div>
  );
};

export default NotReady;
