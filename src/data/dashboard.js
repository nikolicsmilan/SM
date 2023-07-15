
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
  FaThLarge,FaClipboardList,FaPlus
} from "react-icons/fa";

export const buttons = [
  {
    title: "Elemek",
    items: [
      {
        name: "Lista",
        icon: <FaClipboardList />,
        type: "route",
        to: "/",
      },
      {
        name: "Feltöltés",
        icon: <FaPlus />,
        type: "route",
        to: "/pricemaker",
      },
    ],
  },
  {
    title: "Kategóriák",
    items: [
      {
        name: "Feltöltés",
        icon: <FaThLarge />,
        type: "route",
        to: "/",
      },
     
    ],
  },
  {
    title: "Felhasználók",
    items: [
      {
        name: "Feltöltés",
        icon: <FaUsers />,
        type: "route",
        to: "/",
      },
     
    ],
  },
];
