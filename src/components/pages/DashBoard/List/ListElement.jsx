import React from "react";

const ListElement = () => {
  return (
    <>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Role
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">John Doe</td>
              <td className="px-6 py-4 whitespace-nowrap">john@example.com</td>
              <td className="px-6 py-4 whitespace-nowrap">Developer</td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ListElement;

/*
  {header.map((item) => (
            <th key={item} scope="col" className="px-6 py-3 text-center ">
              {item}
            </th>
          ))}

*/

/*
 {data.map((obj, index) => (
          <Row
            key={index}
            index={index}
            obj={obj}
            fields={fields}
            collection={collection}
          />
        ))}

*/
