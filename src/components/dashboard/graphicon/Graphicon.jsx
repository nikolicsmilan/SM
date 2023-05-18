import React, { useState } from "react";
import Graph4 from "./Graph4";
import Graph5 from "./Graph5";
import Graph6 from "./Graph6";

const Graphicon = () => {
  const [meredekseg, setMeredekseg] = useState(0);
  const [bela, setBela] = useState(0);
  const [miny, setMiny] = useState(-1);
  const [maxy, setMaxy] = useState(1);

  const handleMeredeksegChange = (e) => {
    setMeredekseg(e.target.value);
  };

  const handleBelaChange = (e) => {
    setBela(e.target.value);
  };

  const handleMiny = (e) => {
    setMiny(e.target.value);
  };

  const handleMaxy = (e) => {
    setMaxy(e.target.value);
  };

  return (
    <div className="w-2/3">
      <form className="flex">
        <div className="m-3">
          <label className="m-2">m</label>
          <input value={meredekseg} onChange={handleMeredeksegChange} />
        </div>

        <div className="m-3">
          <label className="m-2">b</label>
          <input value={bela} onChange={handleBelaChange} />
        </div>

        <div className="m-3">
          <label className="m-2">Min Y</label>
          <input value={miny} onChange={handleMiny} />
        </div>

        <div className="m-3">
          <label className="m-2">Max Y</label>
          <input value={maxy} onChange={handleMaxy} />
        </div>
      </form>

      <Graph4
        m={meredekseg}
        b={bela}
        xstart={0}
        xend={10}
        step={1}
        miny={miny}
        maxy={maxy}
      />
         <Graph5
        m={meredekseg}
        b={bela}
        xstart={0}
        xend={100}
        step={0.25}
        miny={miny}
        maxy={maxy}
      />
           <Graph6
        m={meredekseg}
        b={bela}
        xstart={0}
        xend={100}
        step={0.25}
        miny={miny}
        maxy={maxy}
      />
    </div>
  );
};

export default Graphicon;
/*
 <Graph4
        m={meredekseg}
        b={bela}
        start={-10}
        end={10}
        step={0.1}
        min={min}
        max={max}
      />
*/


/*

import React, { useState } from "react";
import Graph from "./Graph2";

const Graphicon = () => {
  const [meredekseg, setMeredekseg] = useState(2);
  const [bela, setBela] = useState(3);
  console.log(`meredekség: ${meredekseg}`);
  return (
    <div className="w-2/3">
      <form>
        <label>m</label>
        <input
          value={meredekseg}
          onChange={(e) => {
            setMeredekseg(e.target.value);
          }}
        />
      </form>

      <Graph m={meredekseg} b={3} start={-10} end={10} step={0.1} />
    </div>
  );
};

export default Graphicon;
*/
