import React from "react";


const GeneralInput = ({ label, type, id, name, value, onChange, min, max, step }) => {
  const inputClassName = type === 'range' ? 'custom-range-input' : '';

  return (
    <div className="flex flex-col">
      <label className="font-medium text-gray-900 mb-2" htmlFor={id}>
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        min={min}     // Új: minimum érték
        max={max}     // Új: maximum érték
        step={step}   // Új: léptetés értéke
        className={`border font-bold border-gray-400 py-2 px-4 rounded-md focus:outline-none focus:border-primary bg-secondary ${inputClassName}`}
      />
    </div>
  );
};

export default GeneralInput;









/*
const GeneralInput = ({ label, type, id, name, value, onChange }) => {
  return (
    <div className="flex flex-col">
      <label className="font-medium text-gray-900 mb-2" htmlFor="name">
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        className="border font-bold border-gray-400 py-2 px-4 rounded-md focus:outline-none focus:border-primary bg-secondary"
      />
    </div>
  );
};

export default GeneralInput;
*/

