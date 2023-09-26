import React, { useEffect } from "react";
import useWindowSize from "../hooks/use-windowsize";
import Advertise from "../components/pages/home/Desktop/Slider/Advertise";
import MobileHome from "../components/pages/home/Mobil/MobileHome";
import DesktopHome from "../components/pages/home/Desktop/DesktopHome";
import DesktopImageViewer from "../components/pages/home/Desktop/DesktopImageViewer/DesktopImageViewer";
import MobileImageViewer from "../components/pages/home/Mobil/MobileImageViewer/MobileImageViewer";
import { MyDataContext } from "../context/DataContext";
const Home = () => {
  const { width } = useWindowSize();
  const { setConfig, setChoosenIcon } = MyDataContext();

  console.log(width);

  useEffect(() => {
    setChoosenIcon("");
    setConfig((prevConfig) => {
      const updatedConfig = { ...prevConfig };
      // Set all other properties to false
      for (const prop in updatedConfig) {
        updatedConfig[prop] = false;
      }
      return updatedConfig;
    });
  }, []);
  return (
    <div className=" flex flex-col ">
      {width < 1024 ? (
        <MobileHome
          //  Advertise={Advertise}
          MobileImageViewer={MobileImageViewer}
        />
      ) : (
        <DesktopHome
          Advertise={Advertise}
          DesktopImageViewer={DesktopImageViewer}
        />
      )}
    </div>
  );
};

export default Home;
//lg 1024
// h-screen overflow-x-hidden overflow-y-hidden
