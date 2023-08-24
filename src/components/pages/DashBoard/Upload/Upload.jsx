import React, { useState } from "react";
import DataUploadForm from "./DataUploadForm";
import Fileupload from "./Fileupload";

const Upload = () => {

    const [item, setItem] = useState({
        name: "",
        englishName: "",
        price: "",
        description: "",
        category: "Konyha",
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
    <div className="card-container border-0 border-red-400 flex flex-col md:flex-row bg-success ">
    <DataUploadForm
      handleInputChange={handleInputChange}
      item={item}
      setItem={setItem}
    />
    <div className="border-0  lg:w-1/2  m-1 mx-5 justify-center items-center flex shadow-xl h-48 lg:h-auto">
      <Fileupload handleInputChange={handleInputChange} url={item.url}/>
    </div>
  </div>
  )
}

export default Upload