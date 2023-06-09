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
  console.log('ez mi? 0',activeAside)
  return (
    <>
      { width < 1024|| width < height || 300 > height? (
        <div className="flex flex-col w-full border-0 border-lime-400">
          <div className="bg-white">
            <NavBar />
          </div>

          {activeAside && (
            <div className="w-full fixed  bg-secondary z-50 h-screen opacity-95 ">
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
        <div className="flex flex-col w-full border-0 border-lime-400">
          <div className="bg-white">
          <NavBar />
          </div>
        
          <div className="flex flex-grow">
            <div className=" flex w-1/6 bg-secondary">
              <Aside />
            </div>
            <div className="w-5/6 bg-success ">
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

/*

   <div className="bg-white">
            <NavBar />
          </div>

          {!activeAside && (
            <div className="w-full h-full fixed  bg-secondary z-50 opacity-95">
              <Aside />
            </div>
          )}
          <div className="meret flex-1 flex items-center justify-center border-2 border-red-400 ">
            <Outlet
              onClick={() => {
                console.log("hozé");
              }}
            />
          </div>

*/
