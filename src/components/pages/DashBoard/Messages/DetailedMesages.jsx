import React from "react";

const DetailedMesages = ({ detail, setDetail }) => {
  return (
    <div className="border-0 border-red-400 w-full flex flex-col justify-center items-center">
      <h1 className="font-bold py-5">Rendelés részletei:</h1>
      <div className=" w-full lg:w-1/2 border-0 bg-white rounded">
        <div className="flex p-2 overflow-y-auto max-h-[400px]">
          <div className="w-1/2 mx-5 border-b-2">
            <p className="text-info"> Név</p>
            <p> {detail.name}</p>
          </div>
          <div className="  w-1/2 mx-5 border-b-2">
            <p className="text-info"> Típus</p>
            <p> {detail.furnituretype}</p>
          </div>
        </div>
        <div className="flex p-2 overflow-y-auto max-h-[400px]">
          <div className="w-1/2 mx-5 border-b-2">
            <p className="text-info"> Határidő</p>
            <p> {detail.deadline}</p>
          </div>
          <div className="  w-1/2 mx-5 border-b-2">
            <p className="text-info">Telefonszám </p>
            <p> {detail.tel}</p>
          </div>
        </div>
        <div className="flex p-2 overflow-y-auto max-h-[400px]">
          <div className="w-1/2 m-5 border-b-2">
            <p className="text-info"> Email</p>
            <p> {detail.email}</p>
          </div>
          <div className="  w-1/2 m-5 border-b-2">
            <p className="text-info">Cím </p>
            <p> {detail.address}</p>
          </div>
        </div>
        <div className="flex p-2 overflow-y-auto max-h-[400px]">
          <div className="  w-full mx-5 border-b-2">
            <p className="text-info text-center"> Leírás</p>
            <p className="text-center"> {detail.description}</p>
          </div>
        </div>
        <div className="flex p-2 overflow-y-auto max-h-[400px]">
          <div className="w-full mx-5 border-b-2">
            <p className="text-info text-center"> Szálítási adatok</p>
            <p className="text-center">
              {" "}
              {detail.same ? "Ugyanaz" : "Külünbözik"}
            </p>
          </div>
        </div>
        {detail.same ? (
          ""
        ) : (
          <>
            <div className="flex p-2 overflow-y-auto max-h-[400px]">
              <div className="w-1/2 mx-5 border-b-2">
                <p className="text-info"> Név</p>
                <p> {detail.name}</p>
              </div>
              <div className="  w-1/2 mx-5 border-b-2">
                <p className="text-info">Telefonszám </p>
                <p> {detail.tel}</p>
              </div>
            </div>
            <div className="flex p-2 overflow-y-auto max-h-[400px]">
              <div className="w-1/2 m-5 border-b-2">
                <p className="text-info"> Email</p>
                <p> {detail.email}</p>
              </div>
              <div className="  w-1/2 m-5 border-b-2">
                <p className="text-info">Cím </p>
                <p> {detail.address}</p>
              </div>
            </div>
          </>
        )}
      </div>
      <button className="rounded-lg p-2 m-5 border-2 border-info text-info hover:border-primary hover:text-primary" onClick={()=>setDetail(false)}> Vissza a listához</button>
    </div>
  );
};

export default DetailedMesages;
