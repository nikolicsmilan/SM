import React from "react";

const Unauthorized = () => {
  return (
    <div>
      <h1>Unauthorized</h1>
      <p className="text-red-400">
        Sajnálom de neked nincs jogosultságod látni ezt az oldalt vagy nem is
        létezik
      </p>
      <p>Jelentkezz be hogy érvényesüljenek a jogosultságaid!</p>
    </div>
  );
};

export default Unauthorized;
