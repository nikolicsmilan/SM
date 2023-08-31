

  import React from 'react';

  const RangeInput = ({ label, placeholder, value, onChange, ...rest }) => {
    return (
      <div className="mb-4 border-0">
        <label className="block mb-2 text-sm font-bold text-gray-900">{label}</label>
        <input
          className=" h-2 appearance-none w-96 py-2 px-3 leading-tight rounded-lg shadow-md focus:outline-none focus:shadow-outline bg-info text-primary"
          type="range"
          min="0"
          max="360"
          placeholder={placeholder}
          value={value}
          onChange={(event) => onChange(event)}
          style={{ '--thumb-size': '20px', '--thumb-color': 'rgb(253, 224, 71)' }}
          {...rest}
        />
        <style>
          {`
            input[type='range'] {
              --thumb-size: 20px; /* Set the thumb size */
              --thumb-color: #ff9900; /* Set the thumb color */
            }
  
            input[type='range']::-webkit-slider-thumb {
              appearance: none;
              width: var(--thumb-size);
              height: var(--thumb-size);
              background-color: var(--thumb-color);
              border: none;
              border-radius: 50%;
              cursor: pointer;
            }
          `}
        </style>
        <div className='text-xl font-bold'>{value} 000 Ft</div> {/* Display the value */}
      </div>
    );
  };
  
  export default RangeInput;
  


/*
import React, { useState } from 'react';

const RangeInput = ({ label, placeholder, value, onChange, ...rest }) => {
  const [thumbColor, setThumbColor] = useState('#3490dc'); // Initial color

  const updateThumbColor = (event) => {
    const newValue = event.target.value;
    // Calculate the hue value for HSL color based on the range input value
    const hue = (newValue / 360) * 100; // Convert to percentage
    setThumbColor(`hsl(${hue}, 100%, 50%)`);
    onChange(event);
  };

  return (
    <div className="mb-4 border-0">
      <label className="block mb-2 font-medium fs-2 text-gray-900">{label}</label>
      <input
        className="h-2 appearance-none w-96 py-2 px-3 leading-tight rounded-lg shadow-md focus:outline-none focus:shadow-outline bg-info text-primary"
        type="range"
        min="0"
        max="360"
        placeholder={placeholder}
        value={value}
        onChange={updateThumbColor}
        style={{ background: `linear-gradient(to right, ${thumbColor}, ${thumbColor}), transparent` }}
        {...rest}
      />
      <div>{value} 000 Ft</div> 
      </div>
      );
    };
    
    export default RangeInput;

*/

