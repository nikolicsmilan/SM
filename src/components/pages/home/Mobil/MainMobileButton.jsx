import React from "react";
import { useNavigate } from "react-router-dom";

const MainMobileButton = () => {
  const navigate = useNavigate();
  const handleNavigate = ()=>{
    navigate('sendmessage')
  }
  return (
    <div className="flex justify-center my-0 ">
     <button className="bg-gradient w-40 rounded p-2 text-white" onClick={handleNavigate}>Vásárlás most!</button>
    </div>
  );
};

export default MainMobileButton;
