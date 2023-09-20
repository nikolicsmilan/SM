import React from 'react'

const SliderPagination = ({sliderAdv,sliderCurrentIndex,numberHandler}) => {
  return (
    <div className="border-0 flex border-sky-400 w-full justify-center m-1">
          {sliderAdv.map((item, index) => (
            <div
            key={index}
              className={`px-2 text-dark cursor-pointer ${
                sliderCurrentIndex === index ? "bg-primary rounded-full" : ""
              }`}
              onClick={() => numberHandler(index)}
            >
              {index + 1}
            </div>
          ))}
          
        </div>
  )
}

export default SliderPagination