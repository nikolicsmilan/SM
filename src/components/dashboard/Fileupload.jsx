import React, { useState } from "react";
import { getDownloadURL, ref, uploadBytesResumable } from "@firebase/storage";
import { storage } from "../../firebase";
import { FaCloudUploadAlt } from "react-icons/fa";

const Fileupload = ({ handleInputChange }) => {
  const [progress, setProgress] = useState(0);
  const [imageUrl, setImageUrl] = useState("");

  const formHandler = (e) => {
    e.preventDefault();
    const file = e.target[0].files[0];
    console.log(file);
    uploadfiles(file);
  };
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
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
            handleInputChange(url, "url");
            setImageUrl(url);
          });
        }
      );
    }
  };

  return (
    <div className=" flex flex-col justify-center items-center border-0 border-red-400 w-100 h-100">
      {!imageUrl ? (
        <form
          onSubmit={formHandler}
          className="justify-center items-center flex  flex-col border-0"
        >
          <label className="  cursor-pointer">
            <FaCloudUploadAlt className="w-12 h-12 text-primary" />
            <input
              type="file"
              className="hidden"
              // ref={fileInputRef}
              onChange={handleImageUpload}
            />
          </label>
        </form>
      ) : (
        <> <div className="flex flex-col justify-center items-center m-2">
          <img className="w-96 h-96" src={imageUrl} />
         
            <button className="m-2 p-1 px-4 rounded border-0 border-stone-400 text-white bg-red-700">
              Törlés{" "}
            </button>
            <h3 className="text-center">Feltöltve: {progress}%</h3>
          </div>
        </>
      )}
    </div>
  );
};

export default Fileupload;

/*  <button
          type="submit"
          className="m-5 p-1 px-4 rounded border-4 border-stone-400 text-stone-400"
        >
          Fájl feltöltése2 ezt kell megszüntetni
        </button>*/
