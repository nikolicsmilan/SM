import React from "react";
import GeneralInput from "./Generalnput";
import { links } from "../../../../data/aside";

const Step1 = ({ formData, onFormChange, index }) => {
  const handleInputChange = (name, value) => {
    onFormChange(index, { ...formData, [name]: value });
  };

  const newarray = links.filter((item) => item.title === "Bútortípsuok")[0]
    .links;

  return (
    <>
      <div className="flex flex-col gap-4">
        <div>
          <h1 className="text-2xl text-info ">Milyen bútortípust szeretne?</h1>
        </div>

        <div className="flex flex-row border-0 w-full my-5">
          {newarray.map((item) => (
            <div className="flex flex-row w-full justify-center text-2xl">
              <div
                className={` ${
                  formData.furnituretype === item.name ? "text-primary" : ""
                } flex flex-col items-center text-info border-0`}
                onClick={() => {
                  handleInputChange("furnituretype", item.name);
                }}
              >
                {item?.icon}
                <p className="text-base text-center">{item.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Step1;
