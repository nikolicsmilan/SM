import React, { useState, useEffect } from "react";
import { myOnSnapshotGeneral } from "../../../../firebase/Firestore";
const Gallery = () => {
  const [all, setAll] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);



const imageHandler = (url)=>{
setSelectedImage(url)
//handleInputChange(selectedImage, "url");
}

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
      <div className="flex justify-center">
        <button className="p-2 m-2 border-2 border-info rounded-xl text-info  hover:text-primary hover:border-primary ">
          Beállítás Reklámként
        </button>
      </div>

      <div className="flex justify-center flex-wrap">
        {all.map((item) => (
          <div className="w-80 h-80 border-0 m-2">
            <img
              className={`w-80 h-80 hover:border-4 border-primary rounded-xl   ${
                selectedImage === item.url ? "border-4" : "border-0"
              }`}
              src={item.url}
              alt={item.name}
              onClick={() => imageHandler(item.url)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
