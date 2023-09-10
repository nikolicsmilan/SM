import React from 'react'

const ButtonAdv = ({onClick,text}) => {
  return (
<button  className=" border-0 border-red-400 w-8 z-20 bg-transparent text-info text-3xl font-bold px-1" onClick={onClick} >{text}


</button>
  )
}

export default ButtonAdv