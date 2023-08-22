import React, { useState } from "react";
import { buttons } from "../data/dashboard";
import DashboardMenu from "../components/pages/DashBoard/DashboardMenu";
import Upload from "../components/pages/DashBoard/Upload/Upload";
import ListElement from "../components/pages/DashBoard/List/ListElement";
import Categories from "../components/pages/DashBoard/Categories/Categories";
import Users from "../components/pages/DashBoard/Users/Users"
import { MyDataContext } from "../context/DataContext";
const DashBoard = () => {
  const { config, setConfig } = MyDataContext();

  console.log("config értéke: ", config.upload);
  return (
    <div className="border-0 border-lime-400">
      <DashboardMenu buttons={buttons} config={config} setConfig={setConfig} />
      {config.upload && <Upload />}
      {config.list && <ListElement />}
      {config.category && <Categories />}
         {config.users && <Users />}
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
