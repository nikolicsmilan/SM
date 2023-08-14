/*import React from "react";

const Input = ({ label, placeholder, value, onChange }) => {
  return (
    <div className="mb-4">
      <label className="block mb-2 text-sm font-bold text-gray-700">
        {label}
      </label>
      <input
        className="appearance-none w-full py-2 px-3 leading-tight rounded-lg shadow-md focus:outline-none focus:shadow-outline"
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
      <div>{value}</div> 
    </div>
  );
};

export default Input;*/

import React from "react";

const Input = ({ label, placeholder, value, onChange, type, options }) => {
  if (type === "dropdown") {
    return (
      <div className="mb-4">
        <label className="block mb-2 text-sm font-bold text-gray-700">
          {label}
        </label>
        <select
          className="bg-info  appearance-none w-full py-2 px-3 leading-tight rounded-lg shadow-md focus:outline-none focus:shadow-outline"
          value={value}
          onChange={(event) => onChange(event.target.value)}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
       
      </div>
    );
  }

  return (
    <div className="mb-4">
      <label className="block mb-2 text-sm font-bold text-gray-700">
        {label}
      </label>
      <input
        className="  bg-info appearance-none w-full py-2 px-3 leading-tight rounded-lg shadow-md focus:outline-none focus:shadow-outline"
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />

    </div>
  );
};

export default Input;
//az kell hogy price csak számot lehhesen beírni
