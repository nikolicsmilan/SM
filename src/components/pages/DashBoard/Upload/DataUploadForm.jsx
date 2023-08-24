import React from 'react';
import Input from '../../../shared/Input';
import { myAddGeneral } from '../../../firebase/Firestore';

const DataUploadForm = ({handleInputChange,item,setItem}) => {

    const sendHandler = () => {
        myAddGeneral(item.category, item.name, item);
    console.log('ez a category a myAddGeneral ban: ',item.category)
        setItem({
          name: "",
          price: "",
          description: "",
          category: "Konyha",
          url: "",
        });
      };
  /*  const categoryOptions = [
        { value: "Kitchen", label: "Konyha" },
        { value: "Wardrobe", label: "Gardrób" },
        { value: "Hall", label: "Előszoba" },
        { value: "Slidingdoor", label: "Tolóajtó" },
        { value: "Bath", label: "Fürdő" },
      ];*/

      const categoryOptions = [
        { value: "Konyha", label: "Konyha" },
        { value: "Gardrób", label: "Gardrób" },
        { value: "Előszoba", label: "Előszoba" },
        { value: "Tolóajtó", label: "Tolóajtó" },
        { value: "Fürdő", label: "Fürdő" },
      ];


  return (
    <div className="lg:w-1/2  m-1 mx-5 p-5 shadow-xl  ">
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
    <div className="border-0 flex justify-center">
      <button
        className="m-5 p-1 px-4 rounded border-2 border-stone-400 text-stone-400 hover:text-primary hover:border-primary cursor-pointer"
        onClick={sendHandler}
      >
        Küld
      </button>
    </div>
  </div>
  
  )
}

export default DataUploadForm