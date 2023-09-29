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
  FaEnvelope
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
        name: "Üzenetküldés",
        icon: <FaEnvelope />,
        type: "route",
        to: "/sendmessage",
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
        name: "Beállítások",
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
        englishName:"Kitchen",
        type: "search",
        icon: <FaUtensils />,
      },
      {
        name: "Gardrób",
        englishName:"Kitchen",
        type: "search",
        icon: <FaTshirt />,
      },
      {
        name: "Előszoba",
        englishName:"Hall",
        type: "search",
        icon: <GiMirrorMirror />,
      },
      {
        name: "Tolóajtó",
        englishName:"Kitchen",
        type: "search",
        icon: <IoHandLeftOutline />,
      },
      {
        name: "Fürdő",
        englishName:"Kitchen",
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
        englishName:"narancs",
        type: "style",
        icon: <GiOrangeSlice />,
        ownstyle: "text-orange-400 ",
      },

      {
        name: "dio",
        englishName:"dio",
        type: "style",
        icon: <GiCoconuts />,
        ownstyle:"diob",
      },
    ],
  },
];

