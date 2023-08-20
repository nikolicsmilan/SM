import React, { useState } from "react";
import Fileupload from "../components/dashboard/Fileupload";
import { buttons } from "../data/dashboard";
import DashboardMenu from "../components/pages/DashBoard/DashboardMenu";
import DataUploadForm from "../components/pages/DashBoard/DataUploadForm";
const DashBoard = () => {
  const [item, setItem] = useState({
    name: "",
    englishName: "",
    price: "",
    description: "",
    category: "Kitchen",
    url: "",
  });

  const handleInputChange = (konretertek, property) => {
    //const { value } = event.target;
    setItem((prevState) => ({
      ...prevState,
      [property]: konretertek,
    }));
  };

  return (
    <div className="border-0 border-lime-400">
      <DashboardMenu buttons={buttons} />
      <div className="card-container border-0 border-red-400 flex flex-col md:flex-row bg-success ">
        <DataUploadForm
          handleInputChange={handleInputChange}
          item={item}
          setItem={setItem}
        />
        <div className="border-0  lg:w-1/2  m-1 mx-5 justify-center items-center flex shadow-xl ">
          <Fileupload handleInputChange={handleInputChange} url={item.url}/>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
/*
  <h1>
        Lesz egy lista
        és egy csoport nézet a listában minden elem látható lesz táblázatba
        rendezve. A csoport nézet gombokkal való választgatást jelenti.  valamint a kiválasztott elem szerkesztése és törlése ( nem
        a csoporté hanem az adott elemé) Új csoportott nem tervezek egyenlőre
        megvalósítani az statikusan az adatbázisból fog eredni hogy milyen
        kategóriák vagy msánéven csoportok vannak. Egyenlőre ennyit erre a
        projektre.
      </h1>
      <h1>
        Először a feltöltő részét kell megvalósítani, nem kellenek az
        alcsoportok mert az ügyfél képtelen őket meghatározni és én sem vagyok
        gondolatolvasó szóval
      </h1>
*/
