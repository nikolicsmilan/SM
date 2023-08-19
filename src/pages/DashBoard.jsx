import React, { useState } from "react";
import Input from "../components/shared/Input";
import Fileupload from "../components/dashboard/Fileupload";
import { buttons } from "../data/dashboard";
import { myAddGeneral } from "../components/firebase/Firestore";
const DashBoard = () => {
  const [item, setItem] = useState({
    name: "",
    englishName:"",
    price: "",
    description: "",
    category: "",
    url: "",
  });

  const categoryOptions = [
    { value: "Kitchen", label: "Konyha" },
    { value: "Wardrobe", label: "Gardrób" },
    { value: "Hall", label: "Előszoba" },
    { value: "Slidingdoor", label: "Tolóajtó" },
    { value: "Bath", label: "Fürdő" },
  ];

  const handleInputChange = (konretertek, property) => {
    //const { value } = event.target;
    setItem((prevState) => ({
      ...prevState,
      [property]: konretertek,
    }));
  
  };

  const sendHandler =()=>{
    myAddGeneral(item.category,item.name,item)

    setItem({
      name: "",
      price: "",
      description: "",
      category: "",
      url: "",
    })
  }

  return (
    <div  className="border-0 border-lime-400">
      <div   className="border-0 flex flex-wrap">
        {buttons.map((item,index) => (
          <div key={index} className=" m-3 mt-4  text-info border-0 flex flex-col border-sky-400">
            {item.title !== "Pages" ? (
              <p  className="font-bold text-sm lg:text-lg">{item.title}</p>
            ) : (
              ""
            )}
            <div  className="flex">
              {item.items.map((link) => (
                <div key={link.name} className="flex w-8 lg:w-16 flex-row border-0 text-xl lg:text-4xl text-info rounded hover:text-primary p-0 m-1">
                  <span className="border-0">{link.icon}</span>
                </div>
              ))}
            </div>{" "}
          </div>
        ))}
      </div>
      <div   className="card-container border-0 flex flex-row bg-success">
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
        <div className="border-0  w-1/2 m-1 mx-5 justify-center items-center flex hover:shadow-lg cursor-pointer">
          <Fileupload handleInputChange={handleInputChange} />
        </div>
      </div>
      <button
        className="m-5 p-1 px-4 rounded border-4 border-stone-400 text-stone-400"
        onClick={sendHandler}
      >
        Küld
      </button>
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
        alcsoportok mert az ügyfél képtelen őket meghatározni és én sem vagyok
        gondolatolvasó szóval
      </h1>
     
      {item.name}
      {item.url}
      <p>Megpróbálom megjeleníteni:</p>
      <img
      
        className="w-48 h-64 cursor-pointer object-cover rounded-2xl  border-0 border-primary"
        src={
          "https://firebasestorage.googleapis.com/v0/b/sm-new-8a9a7.appspot.com/o/files%2FAria.jpg?alt=media&token=916abb4a-c5bf-42fd-a543-da005247d530"
        }
      />
    </div>
  );
};

export default DashBoard;

