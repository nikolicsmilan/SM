import { FaRegWindowClose } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { FaClipboardList } from "react-icons/fa";

import { FaHome } from "react-icons/fa";
import { FaComments } from "react-icons/fa";
import { FaCalculator } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import { FaTools } from "react-icons/fa";
import { FaUtensils } from "react-icons/fa";
import { FaTshirt } from "react-icons/fa";
import { GiMirrorMirror } from "react-icons/gi";
import { IoHandLeftOutline } from "react-icons/io5";
import { FaBath } from "react-icons/fa";
import { FaLemon } from "react-icons/fa";
import { GiOrangeSlice } from "react-icons/gi";
import { GiKiwiFruit } from "react-icons/gi";
import { GiCoconuts } from "react-icons/gi";


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
        icon: <FaComments />,
        type: "route",
        to: "/pricemaker",
      },
      {
        name: "3D tervezés",
        icon: <FaCalculator />,
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
        ownstyle: "text-orange-400",
      },
   
      {
        name: "dió",
        type: "style",
        icon: <GiCoconuts />,
        ownstyle: "text-yellow-800",
      },
    ],
  },
];

/*


  links: [
      {
        name: "citrom",
        type: "style",
        icon: <FaLemon />,
        ownstyle: "text-yellow-400",
      },
      {
        name: "narancs",
        type: "style",
        icon: <GiOrangeSlice />,
        ownstyle: "text-orange-400",
      },
      {
        name: "kiwi",
        type: "style",
        icon: <GiKiwiFruit />,
        ownstyle: "text-lime-400",
      },
      {
        name: "dió",
        type: "style",
        icon: <GiCoconuts />,
        ownstyle: "text-yellow-800",
      },

Route

        links: [
      {
        name: "Főoldal",
        icon: <FaHome />,
        type: "route",
        to: "/",
      },
      {
        name: "Árajánlatkészítő",
        icon: <FaComments />,
        type: "route",
        to: "/pricemaker",
      },
      {
        name: "3D tervezés",
        icon: <FaCalculator />,
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

*/
