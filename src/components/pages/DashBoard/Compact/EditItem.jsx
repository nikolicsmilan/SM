import React from "react";
import Upload from "../Upload/Upload";
import { MyDataContext } from "../../../../context/DataContext";

const EditItem = ({ item }) => {
   const {  setConfig, } = MyDataContext();
  return (
    <>
      <Upload item={item} setConfig={setConfig}/>
    </>
  );
};

export default EditItem;
