import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/navigation/Layout";
import Unauthorized from "./pages/Unathorized";
import { UserAuth } from "./context/AuthContext";
import { useStyleContext } from "./context/StyleContext";
import ProgresBar from "./utility/ProgressBar";
import ErrorModal from "./utility/ErrorModal";
import useErrorModal from "./hooks/useErrorModal";

import "./App.css";

// Lazy loaded components
const Login = lazy(() => import("./pages/Login"));
const Signup = lazy(() => import("./pages/Signup"));

const Home = lazy(() => import("./pages/Home"));
const SendMessage = lazy(() => import("./pages/SendMessage"));
const DashBoard = lazy(() => import("./pages/DashBoard"));
const Contact = lazy(() => import("./pages/Contact"));
const NotReady = lazy(() => import("./pages/NotReady"));
const ThreeD = lazy(() => import("./pages/ThreeD"));

function App() {
  const { style, errorModel } = useStyleContext();
  const { error, showErrorModal, hideErrorModal } = useErrorModal();

  console.log("ez mi error", error);
  return (
    <div
      className={`flex font-sans text-base ${style} w-full border-0 lg:h-screen  border-orange-400 `}
    >
      <Suspense fallback={<ProgresBar />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/unauthorized" element={<Unauthorized />} />
            <Route path="/sendmessage" element={<SendMessage />} />
            <Route path="/calculator" element={<ThreeD />} />
            <Route path="/dashboard" element={<DashBoard error2={error} />} />
            <Route path="/contact" element={<NotReady />} />
          </Route>
        </Routes>
      </Suspense>

      {/* Show the ErrorModal if there's an error */}
      {errorModel && (
        <ErrorModal error={errorModel} onClose={hideErrorModal} />
      )}
    </div>
  );
}

export default App;
