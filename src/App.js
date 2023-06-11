import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/navigation/Layout";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Unauthorized from "./pages/Unathorized";
import Calendar from "./pages/Calendar";
import { UserAuth } from "./context/AuthContext";
import { useStyleContext } from "./context/StyleContext";
import Home from "./pages/Home";
import PriceMaker from "./pages/PriceMaker";
import Calculator from "./pages/Modeling";
import DashBoard from "./pages/DashBoard";
import Contact from "./pages/Contact";
import NotReady from "./pages/NotReady";
import ThreeD from "./pages/ThreeD";
import "./App.css";

function App() {
  const { style, activeAside, setActiveAside } = useStyleContext();

  return (
    <div
      className={` flex font-sans text-base ${style}  ${console.log(
        "style",
        style
      )}w-full border-0 overflow-x-hidden overflow-y-hidden`}
    >
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/pricemaker" element={<NotReady />} />
          <Route path="/calculator" element={<ThreeD />} />
          <Route path="/dashboard" element={<NotReady />} />
          <Route path="/contact" element={<NotReady />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;


/*
  <Route path="/pricemaker" element={<PriceMaker />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/contact" element={<Contact />} />
*/

/* <div className="w-72 fixed sidebar  bg-white border-0 shadow border-red-400">
        {activeAside && <SideBar />}
      </div> */
