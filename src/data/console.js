import { BsBarChartFill } from "react-icons/bs";
import { GrRotateLeft } from "react-icons/gr";
import { IoMdColorFill } from "react-icons/io";
import { GiWoodPile } from "react-icons/gi";
import { MdRoofing } from "react-icons/md";
import {
  BsFill1CircleFill,
  BsFill2CircleFill,
  BsFill3CircleFill,
  BsFill4CircleFill,
} from "react-icons/bs";
import { FaArrowLeft, FaArrowRight, FaStopCircle } from "react-icons/fa";

//GiWoodBeam
import basecolor from "../assets/material/basecolor.jpeg";
import pine1 from "../assets/material/pine1.jpg";
import oak from "../assets/material/oak.jpg";
export const mainconsole = [
  {
    name: "size",
    displayname: "Méret",
    icon: <BsBarChartFill />,
  },
  {
    name: "color",
    displayname: "Szín",
    icon: <IoMdColorFill />,
  },

  {
    name: "rotate",
    displayname: "Forgatás",
    icon: <GrRotateLeft />,
  },
];
/*
  {
    name: "material",
    displayname: "Anyag",
    icon: <GiWoodPile />,
  },
  {
    name: "roof",
    displayname: "Tető",
    icon: <MdRoofing />,
  },
*/

export const sizeconsole = [
  {
    name: 1.5,
    property: "size",
    displayname: "személyes",
    icon: (
      <p className="text-xl bg-stone-300 rounded-full w-8 text-center">6</p>
    ),
  },
  {
    name: 1.8,
    property: "size",
    displayname: "személyes",
    icon: (
      <p className="text-xl bg-stone-300 rounded-full w-8 text-center">8</p>
    ),
  },
  {
    name: 2.1,
    property: "size",
    displayname: "személyes",
    icon: (
      <p className="text-xl bg-stone-300 rounded-full w-8 text-center">10</p>
    ),
  },
  {
    name: 2.5,
    property: "size",
    displayname: "személyes",
    icon: (
      <p className="text-xl bg-stone-300 rounded-full w-8 text-center">12</p>
    ),
  },
];

export const colorconsole = [
  {
    name: "/gazebo_1/textures/Material_5_baseColor.jpeg",
    property: "color",
    displayname: "Normál",
    icon: <img className="w-8 rounded-2xl" src={basecolor} />,
  },
  {
    name: "/gazebo_1/textures/pine1.jpg",
    property: "color",
    displayname: "Fenyő",
    icon: <img className="w-8 rounded-2xl" src={pine1} />,
  },

  {
    name: "/gazebo_1/textures/oak.jpg",
    property: "color",
    displayname: "Tölgy",
    icon: <img className="w-8 rounded-2xl" src={oak} />,
  },
];

export const roofconsole = [
  {
    name: "cserepes",
    property: "roof",
    displayname: "Cserepes",
    icon: <BsFill1CircleFill />,
  },
  {
    name: "lemezes",
    property: "roof",
    displayname: "Lemezes",
    icon: <BsFill2CircleFill />,
  },
];

export const rotateconsole = [
  {
    name: 0.01,
    property: "rotate",
    displayname: "Jobbra",
    icon: <FaArrowRight />,
  },
  {
    name: -0.01,
    property: "rotate",
    displayname: "Balra",
    icon: <FaArrowLeft />,
  },
  {
    name: 180,
    property: "rotate",
    displayname: "Pörögjé",
    icon: <FaStopCircle />,
  },
];
/*  {
    name: "/tv_unit__furniture/textures/pine2.jpg",
    property: "color",
    displayname: "Fenyő2",
    icon: <BsFill3CircleFill />,
  }, */

/*export const colorconsole = [
  {
    name: "/mygazebo/textures/Material_5_baseColor.jpeg",
    property: "color",
    displayname: "Normál",
    icon: <img className="w-8 rounded-2xl" src={basecolor}/>,
  },
  {
    name: "/gazebo_1/textures/pine1.jpg",
    property: "color",
    displayname: "Fenyő",
    icon:<img className="w-8 rounded-2xl" src={pine1}/>,
  },

  {
    name: "/gazebo_1/textures/oak.jpg",
    property: "color",
    displayname: "Tölgy",
    icon: <img className="w-8 rounded-2xl" src={oak}/>
  },
]; */
