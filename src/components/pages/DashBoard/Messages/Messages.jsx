import React, { useState, useEffect } from "react";
import { myOnSnapshotGeneral } from "../../../../firebase/Firestore";

const Messages = () => {
  const [messages, setMessages] = useState("");
  const header = [
    "Név",
    "Kép",
    "Ár",
    "Kategória",
    "Leírás",
    "Szerkesztés",
    "Törlés",
  ];
  useEffect(() => {
    //Bath
    const unsubscribe = myOnSnapshotGeneral(setMessages, "message");
    return () => {
      unsubscribe();
    };
  }, []);

  // console.log("messages", messages);
  //console.log("messages2", messages[0]?.formData[0]);
  return (
    <div className="w-full flex justify-center border-0 border-red-400 my-10">
      <div className="overflow-x-auto max-w-full rounded-2xl">
        <div className=" overflow-y-auto max-h-[400px]">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              {header?.map((item) => (
                <th key={item} scope="col" className="px-6 py-3 text-center ">
                  {item}
                </th>
              ))}
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {messages?.map((message, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {message.formData[0]?.stage}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {message.formData[1]?.minAmmount}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Messages;

/*
{messages?.map((message, index) => (
  <tr key={index}>
    <td className="px-6 py-4 whitespace-nowrap">
      {message.formData[0]?.stage}
    </td>
    <td className="px-6 py-4 whitespace-nowrap">
      {message.formData[1]?.minAmmount}
    </td>
    
  </tr>
))}*/

/*
 <div className="overflow-x-auto max-w-full rounded-2xl">
        <div className=" overflow-y-auto max-h-[400px]">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              {header?.map((item) => (
                <th key={item} scope="col" className="px-6 py-3 text-center ">
                  {item}
                </th>
              ))}
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {messages?.map((obj, index) => (
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">{obj.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <img className="w-10 h-10" src={obj.url} alt={obj.name} />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{obj.price}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {obj.category}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap truncate overflow-hidden max-w-xs border-0 border-red-300">
                    {obj.description}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
*/
