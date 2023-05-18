import React from 'react'

const ButtonAdv = ({onClick,text}) => {
  return (
<button  className="w-1/12 z-200 bg-transparent text-white text-4xl font-bold mx-5" onClick={onClick} >{text}


</button>
  )
}

export default ButtonAdv