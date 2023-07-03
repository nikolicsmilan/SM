import React from "react";
import useWindowSize from "../hooks/use-windowsize";
import Advertise from "../components/pages/home/Desktop/Advertise/Advertise";
import MobileHome from "../components/pages/home/Mobil/MobileHome";
import DesktopHome from "../components/pages/home/Desktop/DesktopHome";
import DesktopKepnezegeto from "../components/pages/home/Desktop/DesktopKepnezegeto/DesktopKepnezegeto";

const Home = () => {
  const { width } = useWindowSize();
  return (
    <div className=" flex flex-col ">
      {width < 768 ? (
        <MobileHome
          Reklam={Advertise}
          DesktopKepnezegeto={DesktopKepnezegeto}
        />
      ) : (
        <DesktopHome
          Reklam={Advertise}
          DesktopKepnezegeto={DesktopKepnezegeto}
        />
      )}
    </div>
  );
};

export default Home;

// h-screen overflow-x-hidden overflow-y-hidden