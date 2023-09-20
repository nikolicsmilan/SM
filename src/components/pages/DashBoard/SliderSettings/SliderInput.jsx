import React from "react";

const SliderInput = ({ onFocus, value, label, updateText }) => {
  return (
    <div className="m-1">
      <label className="block m-2 text-sm font-bold text-gray-700">
        {label}
      </label>
      <input
        className="text-primary bg-primary text-white appearance-none w-full py-2 px-3 leading-tight rounded-lg shadow-md border focus:border-primary "
        onChange={(e) => {
          updateText(e.target.value);
        }}
        placeholder={label}
        value={value}
        onFocus={onFocus}
      />
    </div>
  );
};

export default SliderInput;
