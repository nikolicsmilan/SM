import React, { useState, useEffect } from "react";
import DataUploadForm from "./DataUploadForm";
import Fileupload from "./Fileupload";
import { myAddGeneral } from "../../../firebase/Firestore";

const Upload = ({ item }) => {
  const [localItem, setLocalItem] = useState({
    name: "",
    englishName: "",
    price: "",
    description: "",
    category: "Konyha",
    url: "",
  });
  const handleInputChange = (konretertek, property) => {
    //const { value } = event.target;
    setLocalItem((prevState) => ({
      ...prevState,
      [property]: konretertek,
    }));
  };

  const sendHandler = () => {
    myAddGeneral(localItem?.category, localItem?.name, localItem);
    console.log("ez a category a myAddGeneral ban: ", localItem?.category);
    setLocalItem({
      name: "",
      price: "",
      description: "",
      category: "Konyha",
      url: "",
    });
  };

  useEffect(() => {
    if(item){
      setLocalItem(item)
    }
  },[]);

  return (
    <div className="card-container border-0 border-red-400 flex flex-col md:flex-row bg-success ">
      <DataUploadForm
        handleInputChange={handleInputChange}
        item={localItem}
        setItem={setLocalItem}
        sendHandler={sendHandler}
      />
      <div className="border-0  lg:w-1/2  m-1 mx-5 justify-center items-center flex shadow-xl h-48 lg:h-auto">
        <Fileupload
          handleInputChange={handleInputChange}
          url={localItem?.url}
        />
      </div>
    </div>
  );
};

export default Upload;
