import React, { useState, useEffect } from "react";
import DataUploadForm from "./DataUploadForm";
import Fileupload from "./Fileupload";
import { myAddGeneral } from "../../../../firebase/Firestore";
import { MyDataContext } from "../../../../context/DataContext";
import { FaBackward } from "react-icons/fa";

const Upload = ({ item, handleConfig, edit, setEdit }) => {
  /* const {  setConfig, } = MyDataContext();*/
  const [localItem, setLocalItem] = useState({
    name: "",
    englishName: "",
    price: "",
    description: "",
    category: "Konyha",
    url: "",
  });
  const [existItem, setExistItem] = useState(false);
  const handleInputChange = (konkretertek, property) => {
    //const { value } = event.target;
    setLocalItem((prevState) => ({
      ...prevState,
      [property]: konkretertek,
    }));
  };

  const sendHandler = () => {
    // el kell küldenem egy olyan collectionbe is amiből ő nem tud törölni
    // mivel tudnom kell az urleket
    //igazából az a legjobb ha minden adat meg van

    // akár meg van a fájl akkár nem kétszer küldi
    // de az egyik collectiönből nem fog tudni itt törölni.

    // a localitemnél kell eldönteni hogy ebből a meglévő
    //adatbázisból származik az url
    //vagy új képet töltök fel és onnan kapok plusz urlt

    // ha új akkor mindkét helyre megy

    // de ha meglévő akkor csak az adott collectiönbe
    myAddGeneral(localItem?.category, localItem?.name, localItem);
    myAddGeneral("all", localItem?.name, localItem);

    console.log("ez a category a myAddGeneral ban: ", localItem?.category);
    setLocalItem({
      name: "",
      price: "",
      description: "",
      category: "Konyha",
      url: "",
    });

    // ide kell a visszairányítás a compact módba
    handleConfig("compact");
  };

  const handleBack = () => {
    setEdit((prevState) => !prevState);
  };

  useEffect(() => {
    if (item) {
      setLocalItem(item);
    }
  }, []);

  return (
    <div className="flex flex-col">
      <div className="flex justify-center my-5">
        {edit ? (
          <div className="flex items-center justify-center align-items border-0 border-primary ">
            <FaBackward
              className=" text-3xl text-info hover:text-primary   bg-transparent rounded cursor-pointer  m-0 p-1 "
              title="Vissza"
              onClick={() => {
                setEdit((prevState) => !prevState);
              }}
            />{" "}
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="card-container border-0 border-red-400 flex flex-col md:flex-row bg-success ">
        <DataUploadForm
          handleInputChange={handleInputChange}
          item={localItem}
          setItem={setLocalItem}
          sendHandler={sendHandler}
        />{" "}
        <div className="border-0  lg:w-1/2 my-10 lg:my-0 m-1 mx-1 justify-center items-center flex sm:shadow-none lg:shadow-xl w-96 h-96 lg:h-auto">
          <Fileupload
            handleInputChange={handleInputChange}
            url={localItem?.url}
            submenuStyle="mainstyle"
            // setExistItem={setExistItem}
            // setConfig={setConfig}
          />
        </div>
      </div>
    </div>
  );
};

export default Upload;

/*
setConfig(prevState => (
  // JSX expression or multiline JavaScript expression
));
In this pattern, you're using an arrow function to define a callback that's passed to the setConfig function. The callback is expected to return a value that will be set as the new state using setConfig.

The second set of parentheses ( ... ) serves a dual purpose:

Arrow Function Parentheses: In JavaScript, arrow functions can have parentheses around their parameter list. In this case, you have (prevState) which indicates that you have a single parameter named prevState for your arrow function.

JSX Parentheses: The open parenthesis ( at the start of the returned value indicates the beginning of a JSX expression. The closing parenthesis ) at the end of the returned value indicates the end of the JSX expression.

So, when you write the code like this:


setConfig(prevState => (
  // JSX expression or multiline JavaScript expression
));
*/
