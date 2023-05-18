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
        <div className="flex flex-col w-full">
          <div className="bg-white">
            <NavBar />
          </div>

          {!activeAside && (
            <div className="w-72 fixed  bg-secondary z-50 h-full">
              <Aside />
            </div>
          )}
          <div className="w-full ">
            <Outlet
              onClick={() => {
                console.log("hozé");
              }}
            />
          </div>

          <footer class="fixed bottom-0 w-full p-0 bg-secondary">
              <BottomNavBar />
            </footer>
        </div>
      ) : (
        <div className="flex flex-col w-full">
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
