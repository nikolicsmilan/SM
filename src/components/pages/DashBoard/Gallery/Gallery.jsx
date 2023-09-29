import React, { useState, useEffect } from "react";
import { myOnSnapshotGeneral } from "../../../../firebase/Firestore";
import { MyDataContext } from "../../../../context/DataContext";
import { FaCheck } from "react-icons/fa";

const Gallery = () => {
  //Itt én már nem a currentSlidert fogom frissíteni
  //mert az csak a létrehozásra való
  //és egyből íródik az adatbázisba létrehozáskor
  //Ha képet vagy bármi mást módosíatni szeretnél
  //akkor a teljesSliderAdv on lévő megfelelő index property -t
  //kell frissíteni
  const { sliderAdv, setSliderAdv, sliderCurrentIndex, sliderPosition } =
    MyDataContext();
  const [all, setAll] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  const imageHandler = (url) => {
    setSelectedImage(url);
    //handleInputChange(selectedImage, "url");
  };

  const handleSetAdv = (url) => {
    // Check if currentSlider exists and selectedImage is not null
    if (sliderAdv && url !== null) {
      // Create a copy of the currentSlider object
      const updatedSlider = [...sliderAdv];

      // Update the 'image' property with the new selectedImage value
      updatedSlider[sliderCurrentIndex].image = url;

      // Set the updatedSlider as the new currentSlider
      setSliderAdv(updatedSlider);
    }
  };

  useEffect(() => {
    //Kitchen
    const unsubscribe = myOnSnapshotGeneral(setAll, "all");
    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <div className="flex flex-col">
      <h1 className="text-center text-2xl text-info m-5 font-bold">Galéria</h1>
      <div className="flex justify-center"></div>

      <div className="flex justify-center flex-wrap">
        {all.map((item) => (
          <div className="w-96 h-96 border-0 m-2">
            <img
              className={`w-80 h-80 hover:border-4 border-primary rounded-xl   ${
                selectedImage === item.url ? "border-4" : "border-0"
              }`}
              src={item.url}
              alt={item.name}
              //  onClick={() => imageHandler(item.url)}
              onClick={() => {
                handleSetAdv(item.url);
              }}
            />
            <FaCheck />
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
/*  <h2>currentSlider: {sliderAdv[sliderCurrentIndex].id}</h2>
        <h2>sliderCurrentIndex: {sliderCurrentIndex}</h2>
        <h2>sliderPosition: {sliderPosition}</h2> */
