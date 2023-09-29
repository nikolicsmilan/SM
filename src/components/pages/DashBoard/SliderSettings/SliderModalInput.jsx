import React from 'react'

const SliderModalInput = () => {
  return (
    <div className="m-1">
    <label className="block m-2 text-sm font-bold text-gray-700">
Ez egy input
    </label>
    <input
      className=" bg-white text-info font-bold appearance-none w-full py-2 px-3 leading-tight rounded-lg shadow-md border  focus:bg-primary "
      onChange={(e) => {
     //   updateText(e.target.value);
      }}
     // placeholder={label}
     // value={value || ''}
      //onFocus={onFocus}
    />
  </div>
  )
}

export default SliderModalInput