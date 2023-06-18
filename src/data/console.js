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
    name: 1,
    property: "size",
    displayname: "6_személyes",
    icon: <BsFill1CircleFill />,
  },
  {
    name: 2,
    property: "size",
    displayname: "8_személyes",
    icon: <BsFill2CircleFill />,
  },
  {
    name: 2.5,
    property: "size",
    displayname: "10_személyes",
    icon: <BsFill3CircleFill />,
  },
  {
    name: 3,
    property: "size",
    displayname: "12_személyes",
    icon: <BsFill4CircleFill />,
  },
];

export const colorconsole = [
  {
    name: "/tv_unit__furniture/textures/Material_5_baseColor.jpeg",
    property: "color",
    displayname: "Normál",
    icon: <BsFill1CircleFill />,
  },
  {
    name: "/tv_unit__furniture/textures/pine1.jpg",
    property: "color",
    displayname: "Fenyő1",
    icon: <BsFill2CircleFill />,
  },
  {
    name: "/tv_unit__furniture/textures/pine2.jpg",
    property: "color",
    displayname: "Fenyő2",
    icon: <BsFill3CircleFill />,
  },
  {
    name: "/tv_unit__furniture/textures/oak.jpg",
    property: "color",
    displayname: "Tölgy",
    icon: <BsFill4CircleFill />,
  },
];
