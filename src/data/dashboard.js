import { GrRotateLeft } from "react-icons/gr";
import { IoMdColorFill } from "react-icons/io";
import { GiWoodPile } from "react-icons/gi";
import { MdRoofing } from "react-icons/md";
import {
  BsFill1CircleFill,
  BsFill2CircleFill,
  BsFill3CircleFill,
  BsFill4CircleFill,
  BsBarChartFill,
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
  FaThLarge,
  FaClipboardList,
  FaPlus,
  FaCodeBranch,
  FaEnvelope,
  FaArrowsAlt,
  FaImage

} from "react-icons/fa";
import { AiFillDatabase, AiOutlineFontColors,AiOutlineBgColors } from "react-icons/ai";
import { TfiLayoutSlider } from "react-icons/tfi";

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
        to: "/sendmessages",
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
        name: "messages",
        icon: <FaEnvelope />,
        type: "route",
        to: "/",
      },
    ],
  },
  {
    title: "Naptár",
    items: [
      {
        name: "calendar",
        icon: <FaRegCalendarAlt />,
        type: "route",
        to: "/",
      },
    ],
  },
  {
    title: "Reklám",
    items: [
      {
        name: "slider",
        icon: <TfiLayoutSlider />,
        type: "route",
        to: "/",
      },
      {
        name: "gallery",
        icon: <FaImage />,
        type: "route",
        to: "/",
      },
    ],
  },
];

export const sliderSubmenu = [
  {
    title: "Szín",
    items: [
      {
        name: "color",
        icon: <AiOutlineFontColors />,
        type: "route",
        to: "/",
      },
    ],
  },
  {
    title: "Háttér Szín",
    items: [
      {
        name: "bgcolor",
        icon: <AiOutlineBgColors />,
        type: "route",
        to: "/",
      },
    ],
  },
  {
    title: "Tájolás",
    items: [
      {
        name: "orientation",
        icon: <FaArrowsAlt />,
        type: "route",
        to: "/",
      },
    ],
  },
  {
    title: "Kép",
    items: [
      {
        name: "image",
        icon: <FaRegImages />,
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
