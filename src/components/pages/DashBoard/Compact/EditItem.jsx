import React from "react";
import Upload from "../Upload/Upload";
import { MyDataContext } from "../../../../context/DataContext";

const EditItem = ({ item,setEdit,edit }) => {
   const {  setConfig, } = MyDataContext();
  return (
    <>
      <Upload item={item} setConfig={setConfig} edit={edit} setEdit={setEdit}/>
    </>
  );
};

export default EditItem;
