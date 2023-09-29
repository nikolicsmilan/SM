import React from "react";
import {FaPlus } from "react-icons/fa";
import useGeneralModel from "../../../../hooks/useGeneralModal"

import { MyDataContext } from "../../../../context/DataContext";

import Upload from "../Upload/Upload";
const SliderImageConf = () => {
  const{handleConfig} = MyDataContext()
 const {showGeneralModal}= useGeneralModel()

  return (
    <div className="flex flex-row border-0">
    
      <div className="flex flex-col justify-center items-center border-0 m-2">
        <FaPlus
          className={`hover:text-primary cursor-pointer text-info w-6 h-6`}
          onClick={() => handleConfig("gallery")}
        />
      </div>
    </div>
  );
};

export default SliderImageConf;
