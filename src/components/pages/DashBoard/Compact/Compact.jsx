import React, { useState } from "react";
import EditItem from "./EditItem";
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import { myDeleteElement, deleteImage } from "../../../../firebase/Firestore";


const Compact = ({ newimages }) => {
  const [edit, setEdit] = useState(false);
  const [actualItem, setActualItem] = useState(false);

  const handleDeleteItem = async (category, name, url) => {
    try {
      await myDeleteElement(category, name);
      //await deleteImage(url);
      console.log("List handleDeleteItem run")
    } catch (error) {
      console.error("Error deleting item in handleDeleteItem function:", error);
    }
  };

  const handleEdit = (item) => {
    console.log("ez lefut??");
    setEdit((prevState) => !prevState);
    setActualItem(item);
  };
 
  return (
    <>
      {edit ? (
        <EditItem item={actualItem} />
      ) : (
        <div className="border-0 flex flex-wrap justify-center lg:justify-start my-10">
          {newimages.map((item) => (
            <div
              key={item.name}
              className="flex flex-col w-40 h-40 border-0 border-stone-400 m-2  rounded-xl shadow-2xl"
            >
              <div className="flex flex-row justify-between m-2 ">
                <FaTrashAlt
                  className="text-info cursor-pointer"
                  onClick={() =>
                    handleDeleteItem(item?.category, item?.name, item?.url)
                  }
                  alt="törlés"
                />
                <FaEdit
                  className="text-info cursor-pointer"
                  onClick={() => {
                    handleEdit(item);
                  }}
                  alt="szerkesztés"
                />
              </div>
              <div className="flex justify-center items-center border-0 h-32 ">
                <img
                  className="w-20 h-20 items-center"
                  src={item?.url}
                  alt={item?.name}
                />
              </div>
              <div className="text-center  text-info text-xs"> {item?.name} </div>
              <div className="text-center  text-info text-xs"> {item?.price} </div>
              

            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Compact;

/*import React from "react";
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import { myDeleteElement } from "../../../firebase/Firestore";

const Compact = ({ newimages }) => {

const handleDeleteItem = (category,name)=>{
  myDeleteElement(category,name)
}

  return (
    <div className="border-0 flex flex-wrap justify-center lg:justify-start my-10">
      {newimages.map((item) => (
        <div className="flex flex-col w-40 h-40 border-0 border-stone-400 m-2  rounded-xl shadow-2xl">
          <div className="flex flex-row justify-between m-2 ">
            <FaTrashAlt className="text-info cursor-pointer" onClick={()=>{handleDeleteItem(item.category,item.name)}} />
            <FaEdit className="text-info cursor-pointer" />
          </div>
          <div className="flex justify-center items-center border-0 h-32 ">
            <img className="w-20 h-20 items-center" src={item.url} alt={item.name}/>
          </div>
          <div className="text-center my-1 text-info"> {item.name} </div>
        </div>
      ))}
    </div>
  );
};

export default Compact;*/
