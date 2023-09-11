import React from 'react'

const SliderPagination = ({sliderAdv,currentIndex,numberHandler}) => {
  return (
    <div className="border-0 flex border-sky-400 w-full justify-center">
          {sliderAdv.map((item, index) => (
            <div
              className={`px-2 text-dark cursor-pointer ${
                currentIndex === index ? "bg-primary rounded-full" : ""
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