import React from "react";
import { Link } from "react-router-dom";
import { links } from "../../../../data/aside";
import { MyDataContext } from "../../../../context/DataContext";
const newarray = links.filter((item) => item.title === "Bútortípsuok")[0].links;
// selection responsible
const FurnitureTypeChoose = () => {
  const { setSearch, setSliderPosition } = MyDataContext();
  const handleSearch = (category) => {
    setSearch(category);
    setSliderPosition(0);
  };

  return (
    <div className="border-0 my-2">
      <div className="border-0 ">
        <div className="flex justify-center border-0 m-0 mt-0  text-info ">
          {newarray.map((link) =>
            link.type === "search" ? (
              <div
                className="flex  items-center mx-2 border-0"
                onClick={()=>{handleSearch(link.name)}}
                to={link.to}
                key={link.name}
              >
                <div className="flex flex-col items-center">
                  <span className="text-2xl text-info p-1">{link.icon}</span>
                  <span className="text-sm text-info p-1">{link.name}</span>
                </div>
              </div>
            ) : null
          )}
        </div>
      </div>
    </div>
  );
};

export default FurnitureTypeChoose;


