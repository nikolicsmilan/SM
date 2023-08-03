import React from 'react';

const Input = ({ label, placeholder, value, onChange, ...rest }) => {
  return (
    <div className="mb-4">
      Azt szeretném elérni hogy paraméterezhető legyen az input, ha nem küldöm át ne jelenjen meg
      és az értékeknél se legyen NAN
      <label className="block mb-2 text-sm font-bold text-gray-700">{label}</label>
      <input
        className="appearance-none w-full py-2 px-3 leading-tight rounded-lg shadow-md focus:outline-none focus:shadow-outline"
        type="text"
        min="0"
        max="360"
        placeholder={placeholder}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        {...rest}
      />
       <div>{value}</div> {/* Display the value */}
    </div>
  );
};

export default Input;
