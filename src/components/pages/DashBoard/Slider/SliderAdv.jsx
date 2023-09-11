import React, { useState } from 'react';
import Slider from '../../home/Desktop/Advertise/Slider';
import SliderConf from './SliderConf';

const SliderAdv = () => {
  const [advConf, setAdvConf] = useState();

  return (
    <div className='flex flex-col'>
      <Slider />
      <div className='flex-grow '>
        <SliderConf />
      </div>
    </div>
  );
};

export default SliderAdv;