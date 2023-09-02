import React from "react";
import { links } from "../../../../data/aside";

const Step1 = ({ formData, onFormChange, index, setStep }) => {
  const handleInputChange = (name, value) => {
    onFormChange(index, { ...formData, [name]: value });
   // setStep((prevState) => ({ ...prevState, isClicked: true }));
  };

  const newarray = links.filter((item) => item.title === "Bútortípsuok")[0]
    .links;

  return (
    <>
      <div className="flex flex-col gap-4 border-0 border-lime-400">
        <div>
          <h1 className="text-2xl text-info py-5">
            Milyen bútortípust szeretne?
          </h1>
        </div>

        <div className="flex flex-row border-0 w-full my-5">
          {newarray.map((item) => (
            <div className="flex flex-row w-full justify-center text-2xl">
              <label
                className={`${
                  formData.furnituretype === item.name ? "text-primary" : ""
                } flex flex-col items-center text-info border-0 cursor-pointer`}
              >
                <input
                  type="radio"
                  name="furnituretype"
                  value={item.name}
                  checked={formData.furnituretype === item.name}
                  onChange={(event) => {
                    handleInputChange("furnituretype", event.target.value);
                  }}
                  style={{ display: "none" }}
                />
                {item?.icon}
                <p className="text-base text-center">{item.name}</p>
              </label>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Step1;
