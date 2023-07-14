import {
  FaHome,
  FaShapes,
  FaPuzzlePiece,
  FaCalculator,
  FaComments,
  FaInfoCircle,
  FaTools,
  FaUtensils,
  FaTshirt,
  FaBath,
  FaLemon,
  FaPlus,
  FaRegWindowClose,
  FaClipboardList,
} from "react-icons/fa";

import {
  GiMirrorMirror,
  GiOrangeSlice,
  GiKiwiFruit,
  GiCoconuts,GiCube
} from "react-icons/gi";
import { IoHandLeftOutline } from "react-icons/io5";

export const links = [
  {
    title: "Pages",
    links: [
      {
        name: "Főoldal",
        icon: <FaHome />,
        type: "route",
        to: "/",
      },
      {
        name: "Árajánlatkészítő",
        icon: <FaCalculator />,
        type: "route",
        to: "/pricemaker",
      },
      {
        name: "3D Kalkulátor",
        icon: <GiCube />,
        type: "route",
        to: "/calculator",
      },
      {
        name: "Kapcsolat",
        icon: <FaInfoCircle />,
        type: "route",
        to: "/Contact",
      },
      {
        name: "Admin",
        icon: <FaTools />,
        type: "route",
        to: "/dashboard",
      },
    ],
  },

  {
    title: "Bútortípsuok",
    links: [
      {
        name: "Konyha",
        type: "search",
        icon: <FaUtensils />,
      },
      {
        name: "Gardrób",
        type: "search",
        icon: <FaTshirt />,
      },
      {
        name: "Előszoba",
        type: "search",
        icon: <GiMirrorMirror />,
      },
      {
        name: "Tolóajtó",
        type: "search",
        icon: <IoHandLeftOutline />,
      },
      {
        name: "Fürdő",
        type: "search",
        icon: <FaBath />,
      },
    ],
  },
  {
    title: "Stílus",
    links: [
      {
        name: "narancs",
        type: "style",
        icon: <GiOrangeSlice />,
        ownstyle: "text-orange-400 ",
      },

      {
        name: "dio",
        type: "style",
        icon: <GiCoconuts />,
        ownstyle:"diob",
      },
    ],
  },
];

