import React, { useState } from "react";
//import Fileupload from '../components/dashboard/Fileupload';
import basecolor from "../assets/material/basecolor.jpeg";
import Input from "../components/shared/Input";
import { buttons } from "../data/dashboard";
const DashBoard = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [z, setZ] = useState(0);

  const [side, setSide] = useState({
    oldal_1: { x: 0, y: 0, z: 0 },
    oldal_2: { x: 0, y: 0, z: 0 },
    oldal_3: { x: 0, y: 0, z: 0 },
    oldal_4: { x: 0, y: 0, z: 0 },
    oldal_5: { x: 0, y: 0, z: 0 },
    oldal_6: { x: 0, y: 0, z: 0 },
  });

  const handleX = (value) => {
    setX(value);
  };

  const handleY = (value) => {
    setY(value);
  };

  const handleZ = (value) => {
    setZ(value);
  };

  const handleInputChange = (value, sideKey, coordinateKey) => {
    // const { value } = event.target;

    setSide((prevState) => ({
      ...prevState,
      [sideKey]: {
        ...prevState[sideKey],
        [coordinateKey]: parseInt(value, 10),
      },
    }));
  };

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

      <div className="card-container border-2 flex">
        <div className="card">
          <div className="card-front w-full h-full border-2">
            {/* Előlap tartalma */}Előlap
          </div>
          <div className="card-back w-32 h-32 border-2">
            {/* Hátlap tartalma */}Hátlap
          </div>
        </div>
        <div className="flex border-2">
          <div className="w-16 m-1 mx-5">
            <Input
              label="side.oldal_1.x:"
              placeholder="X"
              value={side.oldal_1.x}
              onChange={(event) => handleInputChange(event, "oldal_1", "x")}
            />
            <Input
              label="side.oldal_1.y:"
              placeholder="Y"
              value={side.oldal_1.y}
              onChange={(event) => handleInputChange(event, "oldal_1", "y")}
            />
            <Input
              label="side.oldal_1.z:"
              placeholder="Z"
              value={side.oldal_1.z}
              onChange={(event) => handleInputChange(event, "oldal_1", "z")}
            />
          </div>
          <div className="w-16 m-1 mx-5">
            <Input
              label="side.oldal_2.x:"
              placeholder="X"
              value={side.oldal_2.x}
              onChange={(event) => handleInputChange(event, "oldal_2", "x")}
            />
            <Input
              label="side.oldal_2.y:"
              placeholder="Y"
              value={side.oldal_2.y}
              onChange={(event) => handleInputChange(event, "oldal_2", "y")}
            />
            <Input
              label="side.oldal_2.z:"
              placeholder="Z"
              value={side.oldal_2.z}
              onChange={(event) => handleInputChange(event, "oldal_2", "z")}
            />
          </div>

          <div className="w-16 m-1 mx-5">
            <Input
              label="side.oldal_3.x:"
              placeholder="X"
              value={side.oldal_3.x}
              onChange={(event) => handleInputChange(event, "oldal_3", "x")}
            />
            <Input
              label="side.oldal_3.y:"
              placeholder="Y"
              value={side.oldal_3.y}
              onChange={(event) => handleInputChange(event, "oldal_3", "y")}
            />
            <Input
              label="side.oldal_3.z:"
              placeholder="Z"
              value={side.oldal_3.z}
              onChange={(event) => handleInputChange(event, "oldal_3", "z")}
            />
          </div>

          <div className="w-16 m-1 mx-5">
            <Input
              label="side.oldal_4.x:"
              placeholder="X"
              value={side.oldal_4.x}
              onChange={(event) => handleInputChange(event, "oldal_4", "x")}
            />
            <Input
              label="side.oldal_4.y:"
              placeholder="Y"
              value={side.oldal_4.y}
              onChange={(event) => handleInputChange(event, "oldal_4", "y")}
            />
            <Input
              label="side.oldal_4.z:"
              placeholder="Z"
              value={side.oldal_4.z}
              onChange={(event) => handleInputChange(event, "oldal_4", "z")}
            />
          </div>
        </div>
        <div className="w-16 m-1 mx-5">
          <Input
            label="side.oldal_5.x:"
            placeholder="X"
            value={side.oldal_5.x}
            onChange={(event) => handleInputChange(event, "oldal_5", "x")}
          />
          <Input
            label="side.oldal_5.y:"
            placeholder="Y"
            value={side.oldal_5.y}
            onChange={(event) => handleInputChange(event, "oldal_5", "y")}
          />
          <Input
            label="side.oldal_5.z:"
            placeholder="Z"
            value={side.oldal_5.z}
            onChange={(event) => handleInputChange(event, "oldal_5", "z")}
          />
        </div>
        <div className="w-16 m-1 mx-5">
          <Input
            label="side.oldal_6.x:"
            placeholder="X"
            value={side.oldal_6.x}
            onChange={(event) => handleInputChange(event, "oldal_6", "x")}
          />
          <Input
            label="side.oldal_6.y:"
            placeholder="Y"
            value={side.oldal_6.y}
            onChange={(event) => handleInputChange(event, "oldal_6", "y")}
          />
          <Input
            label="side.oldal_6.z:"
            placeholder="Z"
            value={side.oldal_6.z}
            onChange={(event) => handleInputChange(event, "oldal_6", "z")}
          />
        </div>
      </div>

      <div className="my-cube">
        <div className="top">
          aaaaaaaaa bbbbbbbbbbbbbbbbbb cccccccccccccccccccc
        </div>
        <div className="cube">
          <span
            className="cube-span egy"
            style={{
              "--i": 0,
              "--y": `${side.oldal_1.y}deg`,
              "--x": `${side.oldal_1.x}deg`,
              "--z": `${side.oldal_1.z}px`,
            }}
          >
            SM
          </span>
          <span
            className="cube-span ketto"
            style={{
              "--i": 1,
              "--y": `${side.oldal_2.y}deg`,
              "--x": `${side.oldal_2.x}deg`,
              "--z": `${side.oldal_2.z}px`,
            }}
          >
            designabb
          </span>
          <span
            className="cube-span harom"
            style={{
              "--i": 2,
              "--y": `${side.oldal_3.y}deg`,
              "--x": `${side.oldal_3.x}deg`,
              "--z": `${side.oldal_3.z}px`,
            }}
          >
            by
          </span>
          <span
            className="cube-span negy"
            style={{
              "--i": 3,
              "--y": `${side.oldal_4.y}deg`,
              "--x": `${side.oldal_4.x}deg`,
              "--z": `${side.oldal_4.z}px`,
            }}
          >
            milan
          </span>

          <span
            className="cube-span ot"
            style={{
              "--i": 4,
              "--y": `${side.oldal_5.y}deg`,
              "--x": `${side.oldal_5.x}deg`,
              "--z": `${side.oldal_5.z}px`,
            }}
          >
            milan
          </span>
          <span
            className="cube-span hat"
            style={{
              "--i": 5,
              "--y": `${side.oldal_6.y}deg`,
              "--x": `${side.oldal_6.x}deg`,
              "--z": `${side.oldal_6.z}px`,
            }}
          >
            milan
          </span>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
/*  <div className="top">aaaaaaaaa bbbbbbbbbbbbbbbbbb cccccccccccccccccccc</div> */

/*
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

*/

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
