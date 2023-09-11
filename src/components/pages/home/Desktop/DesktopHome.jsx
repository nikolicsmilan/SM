import React from "react";

const DesktopHome = ({ Advertise, DesktopImageViewer }) => {
  return (
    <div className="flex flex-col  relative z-40">
      {/* Upper part of screen 1/2*/}
      <Advertise />
      {/* Lower part of screen 1/2*/}
      <DesktopImageViewer />
    </div>
  );
};

export default DesktopHome;
