import React from 'react'
import Aeloria from "../../../../../../src/assets/eloszoba/Aeloria.jpg"
import Alveron from "../../../../../../src/assets/eloszoba/Alveron.jpg"
import Arinor from "../../../../../../src/assets/eloszoba/Arinor.jpg"
import SwipeableImages from './SwipableImages'
const MobileDragingTeszt = () => {

  const images = [
    Aeloria,Alveron,Arinor
  ]

  return (
    <div>
      <h1 className='text-center my-3'>Teszt swipera </h1>

      <SwipeableImages images={images} />
    </div>

  )
}

export default MobileDragingTeszt