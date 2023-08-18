import React, { useState } from "react";
import { getDownloadURL, ref, uploadBytesResumable } from "@firebase/storage";
import { storage } from "../../firebase";

const Fileupload = ({handleInputChange}) => {
  const [progress, setProgress] = useState(0);
  const formHandler = (e) => {
    e.preventDefault();
    const file = e.target[0].files[0];
    console.log(file);
    uploadfiles(file);
  };

  const uploadfiles = (file) => {
    //
    if (!file) {
      console.log(`ez a probléma`);
      return;
    } else {
      //ref paraméterei: storage,path in firebase storage,
      const storageref = ref(storage, `/files/${file.name}`);
      const uploadTask = uploadBytesResumable(storageref, file);
      // on paraméterei: kötött szó,snapshot,error,success
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const prog = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgress(prog);
        },
        (err) => console.log(err),
        () => {
          //getDownloadURL paraméterei: path
          getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            console.log('ez a then ááááááááááááááááááááááááááááááág')
            console.log("ez az url",url);
            handleInputChange(url,"url")
            console.log('ez a then ááááááááááááááááááááááááááááááág22222222')
          });
        }
      );
    }
  };

  return (
    <div className="border-2 border-red-400 w-full h-full justify-center items-center flex">
      <form onSubmit={formHandler} className="justify-center items-center flex  flex-col border-2">
      <label className="  cursor-pointer">
   www
      <input
        type="file"
        className="hidden"
       
      />
    </label>

        <button
          type="submit"
          className="m-5 p-1 px-4 rounded border-4 border-stone-400 text-stone-400"
        >
          Fájl feltöltése
        </button>
      </form>

      <h3 className="text-center">Uploaded: {progress}%</h3>
    </div>
  );
};

export default Fileupload;

/*
   <label className="bg-info w-full py-2 px-3 leading-tight rounded-lg shadow-md focus:outline-none focus:shadow-outline text-white cursor-pointer">
    Jó háttér inputnak
      <input
        type="file"
        className="hidden"
       
      />
    </label>
*/

/*import React, { useState } from "react";
import { getDownloadURL, ref, uploadBytesResumable } from "@firebase/storage";
import { storage } from "../../firebase";

const Fileupload = () => {
  const [progress, setProgress] = useState(0);

  const formHandler = (e) => {
    e.preventDefault();
    const file = e.target[0].files[0];
    console.log(file);
    uploadfiles(file);
  };

  const uploadfiles = (file) => {
    if (!file) {
      console.log(`ez a probléma`)
      return;
    } else {
      const storageref = ref(storage, `/files/${file.name}`);
      const uploadTask = uploadBytesResumable(storageref, file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const prog = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgress(prog);
        },
        (err) => console.log(err),
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            console.log(url);
          });
        }
      );
    }
  };

  return (
    <div>
      <form onSubmit={formHandler}>
        <input
          type="file"
          onChange={(e) => {
            const file = e.target.files[0];
            console.log(file);
          }}
          className=" bg-info appearance-none w-full py-2 px-3 leading-tight rounded-lg shadow-md focus:outline-none focus:shadow-outline"
        />

        <button
          type="submit"
          className="m-5 p-1 px-4 rounded border-4 border-stone-400 text-stone-400"
        >
         Fájl feltöltése
        </button>
      </form>

      <h3>Uploaded: {progress}</h3>
    </div>
  );
};

export default Fileupload;*/
