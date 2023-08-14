import React, { useState } from "react";
//import Fileupload from '../components/dashboard/Fileupload';
import basecolor from "../assets/material/basecolor.jpeg";
import Input from "../components/shared/Input";
import Fileupload from "../components/dashboard/Fileupload";
import { buttons } from "../data/dashboard";
const DashBoard = () => {
  const [item, setItem] = useState({
    name: "Piros konyhabútor Scarlet",
    price: "10",
    description: "ez egy bútor",
    category: "Konyhabútor",
  });

  const categoryOptions = [
    { value: "Konyha", label: "Konyha" },
    { value: "Gardrób", label: "Gardrób" },
    { value: "Előszoba", label: "Előszoba" },
    { value: "Tolóajtó", label: "Tolóajtó" },
    { value: "Fürdő", label: "Fürdő" },
  ];

  const handleInputChange = (konretertek, property) => {
    //const { value } = event.target;

    setItem((prevState) => ({
      ...prevState,
      [property]: konretertek,
    }));
    /*
    setSide((prevState) => ({
      ...prevState,
      [sideKey]: {
        ...prevState[sideKey],
        [coordinateKey]: parseInt(value, 10),
      },
    }));*/
  };

  return (
    <div className="border-0 border-lime-400">
      <div className="border-0 flex flex-wrap">
        {buttons.map((item) => (
          <div className=" m-3 mt-4  text-info border-0 flex flex-col border-sky-400">
            {item.title !== "Pages" ? (
              <p className="font-bold text-sm lg:text-lg">{item.title}</p>
            ) : (
              ""
            )}
            <div className="flex">
              {item.items.map((link) => (
                <div className="flex w-8 lg:w-16 flex-row border-0 text-xl lg:text-4xl text-info rounded hover:text-primary p-0 m-1">
                  <span className="border-0">{link.icon}</span>
                </div>
              ))}
            </div>{" "}
          </div>
        ))}
      </div>

      <div className="card-container border-0 flex flex-row bg-success">
        <div className="w-1/2 m-1 mx-5 ">
          <Input
            label="Név"
            value={item.name}
            onChange={(event) => handleInputChange(event, "name")}
          />
          <Input
            label="Ár"
            value={item.price}
            onChange={(event) => handleInputChange(event, "price")}
          />
          <Input
            label="Leírás"
            value={item.description}
            onChange={(event) => handleInputChange(event, "description")}
          />
          <Input
            label="Kategória"
            value={item.category}
            onChange={(event) => handleInputChange(event, "category")}
            type="dropdown"
            options={categoryOptions}
          />
        </div>
        <div className="w-1/2 m-1 mx-5 justify-center items-center flex hover:shadow-lg cursor-pointer">
          <div className=" ">
           
            <Fileupload/>
          </div>
        </div>
        A Ho<div>
      <form>
        <input
          type="file"
         
          className="bg-info appearance-none w-full py-2 px-3 leading-tight rounded-lg shadow-md focus:outline-none focus:shadow-outline"
        />

      
      </form>

     
    </div>zé
       
      </div>

      <h1>
        Az van hogy hagyom ezt a 3d dolgot mert túl sok időt elvesz a css el
        való viaskodás, helyette a react kódot fogom folytatni. Lesz egy lista
        és egy csoport nézet a listában minden elem látható lesz táblázatba
        rendezve. A csoport nézet gombokkal való választgatást jelenti. Lesz egy
        újn elem felvitelle képfeltöltéssel és alap adatok felvitelével az
        adatbázisban. valamint a kiválasztott elem szerkesztése és törlése ( nem
        a csoporté hanem az adott elemé) Új csoportott nem tervezek egyenlőre
        megvalósítani az statikusan az adatbázisból fog eredni hogy milyen
        kategóriák vagy msánéven csoportok vannak. Egyenlőre ennyit erre a
        projektre.
      </h1>

      <h1>
        Először a feltöltő részét kell megvalósítani, nem kellenek az
        alcsoportok mert az ügfél képtelen őket meghatározni és én sme vagyok
        gondolatolvasó szóval
      </h1>
    </div>
  );
};

export default DashBoard;

/*

    <div className="card">
   
      <div className="card bg-gray-200 rounded-lg p-4 shadow-3d">
   
    </div>
    </div>

    <div className="card bg-gray-200 rounded-lg p-4 transform hover:-translate-y-1 hover:shadow-md">
     
    </div>

    <div className="card bg-gray-200 w-10 h-2 md:w-20 md:h-4 lg:w-40 lg:h-8">
    
    </div>

*/
/*
  <ul>
        <li>Név</li>
        <li>Kép</li>
        <li>Ár</li>
        <li>Leírás</li>
        <li>Kategória</li>
        Plusz jel alatt, a config stateből ból fog jönni hogy mi jelenjen meg az
        admin oldalon
      </ul>
*/
