// Step5.js
import React, { useState } from "react";

const Step5 = ({ formData, setStep }) => {
  const handleAggree = () => {
    setStep((prevState) => {
        console.log('ez a prevState',prevState)
      const update = {
        ...prevState,
        isClicked: !prevState.isClicked,
      };
      return update
    });
  };
  return (
    <div className="bg-secondary rounded-md lg:shadow-md p-4 my-5">
      <h2 className="text-2xl font-semibold mb-4">Összegzés</h2>
      <div className="mb-2">
        <strong>Bútortípus:</strong> {formData[0].furnituretype}
      </div>
      <div className="mb-2">
        <strong>Termék:</strong>
        <p>Minimum összeg: {formData[1].minAmmount} 000 Ft </p>
        <p>Egyedi elképzelések: {formData[1].description} </p>
        <p>Határidő: {formData[1].deadline} </p>
      </div>
      <div className="mb-2">
        <strong>Elérhetőség:</strong>
        <div>
          <strong>Név:</strong> {formData[2].name}
        </div>
        <div>
          <strong>Lakcím:</strong> {formData[2].address}
        </div>
        <div>
          <strong>Telefonszám:</strong> {formData[2].tel}
        </div>
        <div>
          <strong>Email:</strong> {formData[2].email}
        </div>
      </div>
      <div className="mb-2">
        <strong>Szállítási adatok:</strong>
        <div>
          <strong>Megegyezik az előzőekkel:</strong>{" "}
          {!formData[3].same ? "Igen" : "Nem"}
        </div>
        {formData[3].same && (
          <>
            <div>
              <strong>Név:</strong> {formData[3].name}
            </div>
            <div>
              <strong>Lakcím:</strong> {formData[3].address}
            </div>
            <div>
              <strong>Telefonszám:</strong> {formData[3].tel}
            </div>
            <div>
              <strong>Email:</strong> {formData[3].email}
            </div>
          </>
        )}
      </div>
      <div className="mb-2">
        <strong>Egyetértek azzal hogy az adataimat tárolják:</strong>
        <input type="checkbox" className="m-2" onClick={handleAggree} />
      </div>
    </div>
  );
};

export default Step5;
