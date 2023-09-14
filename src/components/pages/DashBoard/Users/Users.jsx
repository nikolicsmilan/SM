import React, { useState, useEffect } from 'react';
import { myOnSnapshotGeneral } from '../../../../firebase/Firestore';
import { FaTrashAlt, FaEdit } from 'react-icons/fa';
import { myDeleteElement } from '../../../../firebase/Firestore';

const Users = () => {
  const [users, setUsers] = useState([]);
  const header = [
    'Név',
    'Aktív',
    'Email',
    'Feliratkozva',
    'Utolsó bejelentkezés',
    'Kép'
    
  ];

  useEffect(() => {
    const unsubscribe = myOnSnapshotGeneral(setUsers, 'Users');
    return () => {
      unsubscribe();
    };
  }, []);

  const formatDate = (timestamp) => {
    if (timestamp) {
      const date = new Date(timestamp);
      return date.toLocaleString(); // Format the timestamp as desired
    }
    return 'N/A'; // Handle cases where the timestamp is not available
  };

  const handleDeleteUser = (id) => {
    if (window.confirm('Biztosan törölni szeretnéd ezt a felhasználót?')) {
      myDeleteElement('Users', id)
        .then(() => {
          // User deleted successfully, you can add additional logic here if needed
        })
        .catch((error) => {
          console.error('Error deleting user:', error);
        });
    }
  };

  return (
    <div className="w-full flex justify-center border-0 border-red-400 my-10">
      <div className="overflow-x-auto max-w-full rounded-2xl">
        <div className=" overflow-y-auto max-h-[400px]">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              {header?.map((item) => (
                <th key={item} scope="col" className="px-6 py-3 text-center">
                  {item}
                </th>
              ))}
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {users?.map((user) => (
                <tr key={user.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {user.displayName}
                  </td>
                  <td className='flex justify-center items-center h-16'>
                    <div className={`border-4 w-4 h-4 rounded-full ${user.active?"bg-lime-400 border-lime-400":"bg-red-400 border-red-400"}`}></div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {formatDate(user.creationTime)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {formatDate(user.lastSignInTime)}
                  </td>
                  <td className="px-10 py-0 whitespace-nowrap truncate overflow-hidden max-w-xs border-0  border-red-300">
                    <img src={user.photoURL} alt="User" className="rounded-full border-1 w-8 z-40" />
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

export default Users;
