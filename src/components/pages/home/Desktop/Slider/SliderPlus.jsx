import React from 'react';
import { FaPlus } from "react-icons/fa";

const SliderPlus = ({config,plusHandler}) => {
  return (
    <div> {config.slider ? (
        <FaPlus
          className="mx-2 m-1 cursor-pointer hover:text-primary"
          onClick={() => {
            plusHandler();
          }}
        />
      ) : (
        ""
      )}</div>
  )
}

export default SliderPlus