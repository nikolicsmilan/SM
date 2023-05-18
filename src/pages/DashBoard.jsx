import React from "react";
//import Fileupload from '../components/dashboard/Fileupload';
import { FaHome } from "react-icons/fa";
import { FaComments } from "react-icons/fa";
import { FaChartArea } from "react-icons/fa";
import { FaCubes } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaTools } from "react-icons/fa";
import { FaThLarge } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaRegImages } from "react-icons/fa";
import Graphicon from "../components/dashboard/graphicon/Graphicon";

const DashBoard = () => {
  return (
    <div className="">
      DashBoard
      <div className="flex">
      <div className="bg-white flex">
        <FaHome
          className=" text-6xl text-info rounded hover:text-success p-2"
          title="Lakat Zárt"
        />

        <FaTools
          className=" text-6xl text-primary rounded hover:text-success p-2"
          title="Lakat Zárt"
        />
      </div>
      <FaThLarge
        className=" text-6xl text-info rounded hover:text-success p-2"
        title="Lakat Zárt"
      />
      <FaComments
        className=" text-6xl text-info rounded hover:text-success p-2"
        title="Lakat Zárt"
      />
      <FaCubes
        className=" text-6xl text-info rounded hover:text-primary p-2"
        title="Lakat Zárt"
      />
      <FaChartArea
        className=" text-6xl text-primary rounded hover:text-primary p-2"
        title="Lakat Zárt"
      />
      <FaRegCalendarAlt
        className=" text-6xl text-info rounded hover:text-primary p-2"
        title="Lakat Zárt"
      />
      <FaUsers
        className=" text-6xl text-info rounded hover:text-primary p-2"
        title="Lakat Zárt"
      />
      <FaRegImages
        className=" text-6xl text-info rounded hover:text-primary p-2"
        title="Lakat Zárt"
      />
    </div>
    <div>
      <Graphicon/>
    </div>
    </div>
  );
};

export default DashBoard;

//<Fileupload/>
