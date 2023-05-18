import React from "react";
import MainMobileButton from "./MainMobileButton";
import FurnitureTypeChoose from "./FurnitureTypeChoose";
import MobilKepnezegeto from "./MobilKepnezegeto/MobilKepnezegeto";
import { MyDataContext } from "../../../../context/DataContext";
//Full Home page in Mobilview
const MobileHome = ({ DesktopKepnezegeto }) => {
  const { size } = MyDataContext();

  return (
    <div>
      <div className={`${size.width < 667 || size.width < size.height || 500 > size.height? "mt-5 border-0" : ""}`}>
        <MainMobileButton />
      </div>

      <FurnitureTypeChoose />
      <MobilKepnezegeto />
    </div>
  );
};

export default MobileHome;

