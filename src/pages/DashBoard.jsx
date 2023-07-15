import React from "react";
//import Fileupload from '../components/dashboard/Fileupload';
import basecolor from "../assets/material/basecolor.jpeg";

import { buttons } from "../data/dashboard";
const DashBoard = () => {
  return (
    <div className="border-0 border-lime-400">
      <div className="border-0 flex flex-wrap">
        {buttons.map((item) => (
          <div className=" m-3 mt-4  text-info border-0 flex flex-col border-sky-400">
            {item.title !== "Pages" ? (
              <p className="font-bold text-sm lg:text-lg">{item.title}</p>
            ) : (
              ""
            )}
            <div className="flex">
              {item.items.map((link) => (
                <div className="flex w-8 lg:w-16 flex-row border-0 text-xl lg:text-4xl text-info rounded hover:text-primary p-0 m-1">
                  <span className="border-0">{link.icon}</span>
                </div>
              ))}
            </div>{" "}
          </div>
        ))}
      </div>

      <div className="card-container">
        <div className="card">
          <div className="card-front w-full h-full border-2">
            {/* Előlap tartalma */}Előlap
          </div>
          <div className="card-back w-32 h-32 border-2">
            {/* Hátlap tartalma */}Hátlap
          </div>
        </div>
      </div>

      <div className="my-cube">
        <div className="top">aaaaaaaaa</div>

        <div className="cube">
          <span className="cube-span" style={{ "--i": 0 }}>
            SM
          </span>
          <span className="cube-span" style={{ "--i": 1 }}>
            design
          </span>
          <span className="cube-span" style={{ "--i": 2 }}>
            by
          </span>
          <span className="cube-span" style={{ "--i": 3 }}>
            milan
          </span>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;

/*

    <div className="card">
   
      <div className="card bg-gray-200 rounded-lg p-4 shadow-3d">
   
    </div>
    </div>

    <div className="card bg-gray-200 rounded-lg p-4 transform hover:-translate-y-1 hover:shadow-md">
     
    </div>

    <div className="card bg-gray-200 w-10 h-2 md:w-20 md:h-4 lg:w-40 lg:h-8">
    
    </div>

*/
