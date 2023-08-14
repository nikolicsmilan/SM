import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/navigation/Layout";
import Unauthorized from "./pages/Unathorized";
import { UserAuth } from "./context/AuthContext";
import { useStyleContext } from "./context/StyleContext";
import ProgresBar from "./utility/ProgressBar"
import "./App.css";

// Lazy loaded components
const Login = lazy(() => import("./pages/Login"));
const Signup = lazy(() => import("./pages/Signup"));

const Home = lazy(() => import("./pages/Home"));
const PriceMaker = lazy(() => import("./pages/PriceMaker"));
const DashBoard = lazy(() => import("./pages/DashBoard"));
const Contact = lazy(() => import("./pages/Contact"));
const NotReady = lazy(() => import("./pages/NotReady"));
const ThreeD = lazy(() => import("./pages/ThreeD"));

function App() {
  const { style } = useStyleContext();

  return (
    <div className={`flex font-sans text-base ${style} w-full border-0 lg:h-screen  border-red-400 `}>
    
    dwedqw
   

    <input
  type="file"

  className="bg-info appearance-none w-full py-2 px-3 leading-tight rounded-lg shadow-md focus:outline-none focus:shadow-outline"
/>sss
    
      <Suspense fallback={<ProgresBar/>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/unauthorized" element={<Unauthorized />} /> 
            <Route path="/pricemaker" element={<NotReady />} />
            <Route path="/calculator" element={<ThreeD />} />
            <Route path="/dashboard" element={<DashBoard />} />
            <Route path="/contact" element={<NotReady />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;


