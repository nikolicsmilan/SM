import React, { useState } from "react";
import {
  getDownloadURL,
  ref,
  uploadBytesResumable,
  deleteObject,
} from "@firebase/storage";
import { storage } from "../../../../firebase";
import { FaCloudUploadAlt } from "react-icons/fa";
import ProgressBar2 from "../../../../utility/ProgressBar2";

const Fileupload = ({ handleInputChange, url }) => {
  const [progress, setProgress] = useState(0);

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
    if (!file) {
      console.log("Nincs kiválasztott fájl");
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
            handleInputChange(url, "url");
          });
        }
      );
    }
  };

  const deleteImage = () => {
    if (url) {
      const imageRef = ref(storage, url);

      deleteObject(imageRef)
        .then(() => {
          console.log("Kép sikeresen törölve");

          handleInputChange("", "url");
          setProgress(0);
        })
        .catch((error) => {
          console.error("Hiba a kép törlésekor:", error);
        });
    }
  };

  return (
    <div className="flex flex-col justify-center items-center border-0 border-red-400 w-100 h-100">
      {!url ? (
        <form
          onSubmit={formHandler}
          className="justify-center items-center flex flex-col border-0"
        >
          <label className="cursor-pointer ">
            <FaCloudUploadAlt className="w-12 h-12 text-primary" />
            <input
              type="file"
              className="hidden"
              onChange={handleImageUpload}
            />
          </label>
          <span>Kép feltöltése</span>
        </form>
      ) : (
        <div className="flex flex-col justify-center items-center m-2 my-10 ">
          <img className="w-96 h-96" src={url} alt="Uploaded" />
          <button
            className="m-2 p-1 px-4 rounded border-0 border-stone-400 text-white bg-red-700"
            onClick={deleteImage}
          >
            Törlés
          </button>

          <ProgressBar2  className="border-4 border-red-400 h-32" progress={progress} />
       </div>
      )}
    </div>
  );
};

export default Fileupload;
