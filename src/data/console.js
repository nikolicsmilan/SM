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
    name: "material",
    displayname: "Anyag",
    icon: <GiWoodPile />,
  },
  {
    name: "roof",
    displayname: "Tető",
    icon: <MdRoofing />,
  },
  {
    name: "rotate",
    displayname: "Forgatás",
    icon: <GrRotateLeft />,
  },
];

export const sizeconsole = [
  {
    name:1.0,
    property: "size",
    displayname: "személyes",
    icon: <p className="text-xl bg-stone-300 rounded-full w-8 text-center" >6</p>
  },
  {
    name: 1.2,
    property: "size",
    displayname: "személyes",
    icon: <p className="text-xl bg-stone-300 rounded-full w-8 text-center" >8</p>
  },
  {
    name: 1.4,
    property: "size",
    displayname: "személyes",
    icon: <p className="text-xl bg-stone-300 rounded-full w-8 text-center" >10</p>
  },
  {
    name: 1.6,
    property: "size",
    displayname: "személyes",
    icon:<p className="text-xl bg-stone-300 rounded-full w-8 text-center" >12</p>}
];

export const colorconsole = [
  {
    name: "/mygazebo/textures/Material_5_baseColor.jpeg",
    property: "color",
    displayname: "Normál",
    icon: <img className="w-8 rounded-2xl" src={basecolor}/>,
  },
  {
    name: "/mygazebo/textures/pine1.jpg",
    property: "color",
    displayname: "Fenyő",
    icon:<img className="w-8 rounded-2xl" src={pine1}/>,
  },

  {
    name: "/mygazebo/textures/oak.jpg",
    property: "color",
    displayname: "Tölgy",
    icon: <img className="w-8 rounded-2xl" src={oak}/>
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
/*  {
    name: "/tv_unit__furniture/textures/pine2.jpg",
    property: "color",
    displayname: "Fenyő2",
    icon: <BsFill3CircleFill />,
  }, */