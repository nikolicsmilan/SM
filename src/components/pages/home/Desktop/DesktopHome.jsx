import React from "react";
import Articels from "../Desktop/Artciles/Articels_1";

const DesktopHome = ({ Advertise, DesktopImageViewer }) => {
  return (
    <div className="flex flex-col  relative z-40">
      {/* Upper part of screen 1/2*/}
      <Advertise />
      {/* Lower part of screen 1/2*/}
      <DesktopImageViewer />
      <Articels/>ddasdas
    </div>
  );
};

export default DesktopHome;
