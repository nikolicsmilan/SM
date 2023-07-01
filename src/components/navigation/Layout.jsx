import React from "react";
import NavBar from "../navigation/NavBar";
import Aside from "./Aside";
import BottomNavBar from "./BottomNavBar";
import { Outlet } from "react-router-dom";
import useWindowSize from "../../hooks/use-windowsize";
import { useStyleContext } from "../../context/StyleContext";

const Layout = () => {
  const { width,height } = useWindowSize();
  const { activeAside, setActiveAside } = useStyleContext();
  return (
    <>
      { width < 667 || width < height || 300 > height? (
        <div className="flex flex-col w-full h-screen border-0 border-red-400 m-0 p-0">
          <div className="bg-white">
            <NavBar />
          </div>

          {!activeAside && (
            <div className="w-full h-full fixed  bg-secondary z-50 opacity-95">
              <Aside />
            </div>
          )}
          <div className="w-full h-full border-0 flex flex-col justify-center">
            <Outlet
              onClick={() => {
                console.log("hozé");
              }}
            />
          </div>

          <footer class=" bg-secondary fixed bottom-0 w-full ">
              <BottomNavBar />
            </footer>
        </div>
      ) : (
        <div className="flex flex-col w-full ">
          <div className="bg-white">
          <NavBar />
          </div>
        
          <div className="flex">
            <div className=" flex w-1/6 bg-secondary  ">
              <Aside />
            </div>
            <div className="w-5/6 bg-success">
              <Outlet />
            </div>
          
          </div>
        </div>
      )}
    </>
  );
};

export default Layout;
//h-screen overflow-x-hidden overflow-y-hidden ha végeztem