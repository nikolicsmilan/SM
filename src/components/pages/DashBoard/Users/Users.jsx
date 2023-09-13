import React,{useState,useEffect} from 'react'
import { myOnSnapshotGeneral } from '../../../../firebase/Firestore';
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import {

  myDeleteElement,
} from "../../../../firebase/Firestore";
const Users = () => {
  const [user, setUser] = useState([]);
  const header = [
    "Név",
    "Email",
    "Feliratkozva",
    "Utolsó bejelentkezés",
    "Kép",
   
  ];



    useEffect(() => {
    //Kitchen
    const unsubscribe = myOnSnapshotGeneral(setUser, "Users");
    return () => {
      unsubscribe();
    };
  }, []); 
  return (
    <div className="w-full flex justify-center border-0 border-red-400 my-10">
    <div className="overflow-x-auto max-w-full rounded-2xl">
      <div className=" overflow-y-auto max-h-[400px]">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            {header?.map((item) => (
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
            {user?.map((obj, index) => (
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                  {obj.displayName}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {obj.email} 
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{obj.creationTime}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {obj.lastSignInTime}
                </td>
              
                <td className="px-10 py-0 whitespace-nowrap truncate overflow-hidden max-w-xs border-0  border-red-300">
                <img src={obj.photoURL}  className="rounded-full border-1 w-8 z-40 "/>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
  )
}

export default Users