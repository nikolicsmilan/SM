import React from "react";

const GeneralInput = ({
  label,
  type,
  id,
  name,
  value,
  onChange,
  min,
  max,
  step,
  rows, // Add rows prop for textarea
}) => {
  //const inputClassName = type === "range" ? "custom-range-input" : "";
// Define the pattern and placeholder based on the type
let patternAttribute = "";
let placeholderAttribute = "";


if (type === "tel") {
  patternAttribute = "[0-9]{3}-[0-9]{3}-[0-9]{4}";
  placeholderAttribute = "e.g., (123) 456-7890";

}
  return (
    <div className="flex flex-col">
      <label for={id} className="text-lg font-bold text-gray-900 mb-2" htmlFor={id}>
        {label}
      </label>
      {type === "textarea" ? (
        <textarea
          name={name}
          id={id}
          value={value}
          onChange={onChange}
          rows={rows} // Use rows prop for textarea
          className={`border  border-gray-400 py-2 px-4 rounded-md focus:outline-none focus:border-primary bg-info h-${rows} `}
        />
      ) : (
        <input
          type={type}
          name={name}
          id={id}
          value={value}
          onChange={onChange}
          min={min}
          max={max}
          step={step}
          pattern={patternAttribute}
          placeholder={placeholderAttribute}
          required
          className={`  w-full py-2 px-4 rounded-md focus:outline-none focus:border-primary bg-info ${
            type === "textarea" ? `h-${rows}` : `h-8`
          } `}
        />
      )}
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
