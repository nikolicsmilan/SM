import React from "react";

const Step5 = ({ formData, setStep }) => {
  const handleAggree = () => {
    setStep((prevState) => {
      const update = {
        ...prevState,
        isClicked: !prevState.isClicked,
      };
      return update;
    });
  };
  return (
    <div className="bg-secondary rounded-md lg:shadow-md p-4 my-5">
      <h2 className="text-2xl font-semibold mb-4">Összegzés</h2>
      <div className="mb-2">
        <strong>Bútortípus:</strong> {formData.furnituretype}
      </div>
      <div className="mb-2">
        <strong>Termék:</strong>
        <p>Minimum összeg: {formData.minAmmount} 000 Ft </p>
        <p>Egyedi elképzelések: {formData.description} </p>
        <p>Határidő: {formData.deadline} </p>
      </div>
      <div className="mb-2">
        <strong>Elérhetőség:</strong>
        <div>
          <strong>Név:</strong> {formData.name}
        </div>
        <div>
          <strong>Lakcím:</strong> {formData.address}
        </div>
        <div>
          <strong>Telefonszám:</strong> {formData.tel}
        </div>
        <div>
          <strong>Email:</strong> {formData.email}
        </div>
      </div>
      <div className="mb-2">
        <strong>Szállítási adatok:</strong>
        <div>
          <strong>Megegyezik az előzőekkel:</strong>{" "}
          {formData.same ? "Igen" : "Nem"}
        </div>
        {!formData.same && (
          <>
            <div>
              <strong>Név:</strong> {formData.nameDeliver}
            </div>
            <div>
              <strong>Lakcím:</strong> {formData.addressDeliver}
            </div>
            <div>
              <strong>Telefonszám:</strong> {formData.telDeliver}
            </div>
            <div>
              <strong>Email:</strong> {formData.emailDeliver}
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
