import React from "react";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const NavButton = () => {
  const navigate = useNavigate();

  function handleGoBack() {
    navigate(-1);
  }

  function handleGoForward() {
    navigate(+1);
  }
  return (
    <>
      <FaAngleLeft
        onClick={handleGoBack}
        className=" text-2xl text-info bg-white lg:bg-secondary rounded cursor-pointer"
        title="left button"
      />
      <FaAngleRight
        onClick={handleGoForward}
        className=" text-2xl text-info bg-white lg:bg-secondary  rounded cursor-pointer"
        title="right button"
      />
    </>
  );
};

export default NavButton;
