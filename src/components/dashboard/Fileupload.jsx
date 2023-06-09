import React, { useState } from "react";
import { getDownloadURL, ref, uploadBytesResumable } from "@firebase/storage";
import { storage } from "../../firebase";

const Fileupload = () => {
  const [progress, setProgress] = useState(0);
  const formHandler = (e) => {
    e.preventDefault();
    const file = e.target[0].files[0];
    console.log(file);
    uploadfiles(file)
  };

  const uploadfiles = (file) => {
    //
    if (!file) {
      return;
    } else {
      //ref paraméterei: storage,path in firebase storage,
      const storageref = ref(storage, `/files/${file.name}`);
      const uploadTask = uploadBytesResumable(storageref, file);
      // on paraméterei: kötött szó,snapshot,error,success
      uploadTask.on("state_changed", (snapshot) => {
        const prog = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(prog);
      },(err)=>console.log(err),
      ()=>{
        //getDownloadURL paraméterei: path
        getDownloadURL(uploadTask.snapshot.ref).then(url=>{
            console.log(url)
        })
      }
     
      );
    }
  };

  return (
    <div>
      <h1 className="m-5">FileUpload</h1>
      <form onSubmit={formHandler}>
        <input type="file" className="m-5" />
        <button
          type="submit"
          className="m-5 p-1 px-4 rounded border-4 border-stone-400 text-stone-400"
        >
          Upload
        </button>
      </form>

      <h3>Uploaded: {progress}</h3>
    </div>
  );
};

export default Fileupload;
