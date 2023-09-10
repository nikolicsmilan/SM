import React from "react";
import useWindowSize from "../hooks/use-windowsize";
import Advertise from "../components/pages/home/Desktop/Advertise/Advertise";
import MobileHome from "../components/pages/home/Mobil/MobileHome";
import DesktopHome from "../components/pages/home/Desktop/DesktopHome";
import DesktopKepnezegeto from "../components/pages/home/Desktop/DesktopKepnezegeto/DesktopKepnezegeto";
import MobilKepnezegeto from "../components/pages/home/Mobil/MobilKepnezegeto/MobilKepnezegeto";

const Home = () => {
  const { width, height } = useWindowSize();

  console.log(width);
  return (
    <div className=" flex flex-col ">
      {width < 1024  ? (
        <MobileHome
        //  Reklam={Advertise}
          MobilKepnezegeto={MobilKepnezegeto}
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
//lg 1024
// h-screen overflow-x-hidden overflow-y-hidden
