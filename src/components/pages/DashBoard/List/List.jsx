import React, { useState } from "react";
import { myDeleteElement, deleteImage } from "../../../../firebase/Firestore";
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import EditItem from "../Compact/EditItem";
const List = ({ newimages }) => {
  const [edit, setEdit] = useState(false);
  const [actualItem, setActualItem] = useState(false);
  const header = [
    "Név",
    "Kép",
    "Ár",
    "Kategória",
    "Leírás",
    "Szerkesztés",
    "Törlés",
  ];
  const handleDeleteItem = async (category, name, url) => {
    try {
      await myDeleteElement(category, name);
     // await deleteImage(url);
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
        <EditItem item={actualItem} setEdit={setEdit} edit={edit}/>
      ) : (
        <div className="w-full flex justify-center border-0 border-red-400 my-10">
          <div className="overflow-x-auto max-w-full rounded-2xl">
            <div className=" overflow-y-auto max-h-[400px]">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  {header.map((item) => (
                    <th
                      key={item}
                      scope="col"
                      className="px-6 py-3 text-center "
                    >
                      {item}
                    </th>
                  ))}
                </thead>

                <tbody className="bg-white divide-y divide-gray-200">
                  {newimages.map((obj, index) => (
                    <tr className=""  >
                      <td className="px-6 py-4 whitespace-nowrap">
                        {obj.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <img
                          className="w-10 h-10"
                          src={obj.url}
                          alt={obj.name}
                        />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {obj.price}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {obj.category}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap truncate overflow-hidden max-w-xs border-0 border-red-300">
                        {obj.description}
                      </td>

                      <td className="px-6 py-7 whitespace-nowrap   flex justify-center border-0 border-sky-400">
                        <FaEdit
                          className="text-info cursor-pointer "
                          onClick={() => {
                            handleEdit(obj);
                          }}
                          alt="szerkesztés"
                        />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap ">
                        <FaTrashAlt
                          className="text-info cursor-pointer "
                          onClick={() =>
                            handleDeleteItem(obj.category, obj.name, obj.url)
                          }
                          alt="törlés"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>

              </table>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default List;
/* <div className="rounded-2xl w-full  flex justify-center border-0 border-red-400 my-10">
          <div className=" overflow-x-auto  overflow-y-auto max-h-[400px] ">
           <div className="rounded-2xl">
         
            </div>
          </div>
        </div> */

/*
   <table className="min-w-full divide-y divide-gray-200 ">
              <thead className="bg-gray-50">
                {header.map((item) => (
                  <th key={item} scope="col" className="px-6 py-3 text-center ">
                    {item}
                  </th>
                ))}
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {newimages.map((obj, index) => (
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">{obj.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <img className="w-10 h-10" src={obj.url} alt={obj.name}/>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">{obj.price}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {obj.category}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap truncate overflow-hidden max-w-xs border-0 border-red-300">
                      {obj.description}
                    </td>

                    <td className="px-6 py-7 whitespace-nowrap   flex justify-center border-0 border-sky-400">
                      <FaEdit
                        className="text-info cursor-pointer "
                        onClick={() => {
                          handleEdit(obj);
                        }}
                        alt="szerkesztés"
                      />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap ">
                      <FaTrashAlt
                        className="text-info cursor-pointer "
                        onClick={() =>
                          handleDeleteItem(obj.category, obj.name, obj.url)
                        }
                        alt="törlés"
                      />
                    </td>
                  </tr>
                ))}
              
              </tbody>
            </table>
 */
