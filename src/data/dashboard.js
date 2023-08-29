
import { GrRotateLeft } from "react-icons/gr";
import { IoMdColorFill } from "react-icons/io";
import { GiWoodPile } from "react-icons/gi";
import { MdRoofing } from "react-icons/md";
import {
  BsFill1CircleFill,
  BsFill2CircleFill,
  BsFill3CircleFill,
  BsFill4CircleFill,
  BsBarChartFill
} from "react-icons/bs";

//GiWoodBeam
import basecolor from "../assets/material/basecolor.jpeg";
import pine1 from "../assets/material/pine1.jpg";
import oak from "../assets/material/oak.jpg";

import {
  FaHome,
  FaUserAlt,
  FaComments,
  FaChartArea,
  FaArrowLeft,
  FaArrowRight,
  FaStopCircle,
  FaCubes,
  FaRegImages,
  FaRegCalendarAlt,
  FaUsers,
  FaTools,
  FaThLarge,FaClipboardList,FaPlus,FaCodeBranch, FaEnvelope
} from "react-icons/fa";
import { AiFillDatabase } from "react-icons/ai";



export const buttons = [
  {
    title: "Elemek",
    items: [
      {
        name: "compact",
        icon: <AiFillDatabase />,
        type: "route",
        to: "/",
      },
      {
        name: "list",
        icon: <FaClipboardList />,
        type: "route",
        to: "/",
      },
      {
        name: "upload",
        icon: <FaPlus />,
        type: "route",
        to: "/pricemaker",
      },
    ],
  },
 
  {
    title: "Felhasználók",
    items: [
      {
        name: "users",
        icon: <FaUsers />,
        type: "route",
        to: "/",
      },
     
    ],
  },
  {
    title: "Üzenetek",
    items: [
      {
        name: "users",
        icon: < FaEnvelope />,
        type: "route",
        to: "/",
      },
     
    ],
  },
];
/* {
    title: "Kategóriák",
    items: [
      {
        name: "category",
        icon: <FaThLarge />,
        type: "route",
        to: "/",
      },
     
    ],
  }, */