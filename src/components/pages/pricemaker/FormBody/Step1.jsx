import React from "react";
import GeneralInput from "./Generalnput";
import { links } from "../../../../data/aside";

const Step1 = ({ formData, onFormChange, index,setStep }) => {
  const handleInputChange = (name, value) => {
    onFormChange(index, { ...formData, [name]: value });
    setStep(prevState => ({ ...prevState, isClicked: true }));
  };

  const newarray = links.filter((item) => item.title === "Bútortípsuok")[0]
    .links;

  return (
    <>
      <div className="flex flex-col gap-4 border-0 border-lime-400">
        <div>
          <h1 className="text-2xl text-info py-5">Milyen bútortípust szeretne?</h1>
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

/*   <>
      <div className="flex flex-col gap-4">
        <div>
          <h1>Milyen bútortípust szeretne?</h1>
        </div>

        <div className="flex flex-row border-4 w-full">
          {links.map((item) => (
            <div className="flex flex-row w-full">
              {item.links.map((link) =>
                link.type === "search" ? (
                  <div
                    key={link.label}
                    className={`text-2xl border-4 w-full ${
                      link.ownstyle ? link.ownstyle : "text-info"
                    }`}
                  >
                    {link.icon}
                  </div>
                ) : null
              )}
            </div>
          ))}
        </div>
      </div>
    </> */

/*  <>
      <div className="flex flex-col gap-4">
        <div>
          <h1>Milyen bútortípust szeretne?</h1>
        </div>

        <div className="flex flex-row border-4 w-full">
          {links.map((item) => (
            <div className="flex flex-row w-full">
              {item.links.map((link) => {
                if (link.type === "search") {
                  return (
                    <div
                      key={link.label}
                      className={`text-2xl border-4 w-full ${
                        link.ownstyle ? link.ownstyle : "text-info"
                      }`}
                    >
                      {link.icon}
                    </div>
                  );
                } else {
                  return null;
                }
              })}
            </div>
          ))}
        </div>
      </div>
    </> */

/*  <GeneralInput
          id="name"
          name="name"
          label="Name"
          type="button"
          value={formData?.name}
          onChange={handleInputChange}
        />
        <GeneralInput
          id="email"
          name="email"
          label="Email"
          type="email"
          value={formData?.email}
          onChange={handleInputChange}
        /> */

//1. Hogyan függnek össze
//2. Elkészíteni a minta formot
//3. Megcsinálni dinmaikus headerrel
//4. valós form adatok (ez lehet sőt biztos változni fog később de kb)
//5. Működjön egy pontra való átírányítás más komponensből ha kell egyáltalán
//de valószínűleg kell
