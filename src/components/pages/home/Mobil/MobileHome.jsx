import React from "react";
import MainMobileButton from "./MainMobileButton";
import FurnitureTypeChoose from "./FurnitureTypeChoose";
import MobilKepnezegeto from "./MobilKepnezegeto/MobilKepnezegeto";
//import { MyDataContext } from "../../../../context/DataContext";

import MobileDragingTeszt from "../Mobil/MobilKepnezegeto/MobileDragingTeszt"
//Full Home page in Mobilview
const MobileHome = ({ DesktopKepnezegeto }) => {
 // const { size } = MyDataContext();

  return (
    <div className="border-0 border-orange-500 flex flex-col h-screen">
      <div
        className={`mt-5`}
      >
        <MainMobileButton />
      </div>
      <div className="flex-1 flex items-center justify-center">
        <FurnitureTypeChoose />
      </div>
      <div className="flex-2 flex items-center justify-center ">
        <MobilKepnezegeto />
      </div>

      <div className="flex-1 flex items-center justify-center"></div>
    
    </div>
  );
};

export default MobileHome;
/*  className={`${
          size.width < 667 || size.width < size.height || 500 > size.height
            ? "mt-5"
            : ""
        }`} */
        //  <MobileDragingTeszt/>