import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
//import "./styles/main.css";
//import "./styles/tailwind.css"
import App from "./App";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import { GroupContextProvider } from "./context/GroupContext";
import { StyleContextProvider } from "./context/StyleContext";
import { DataContextProvider } from "./context/DataContext";

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <DataContextProvider>
      <GroupContextProvider>
        <StyleContextProvider>
          <Router>
            <Routes>
              <Route path="/*" element={<App />} />
            </Routes>
          </Router>
        </StyleContextProvider>
      </GroupContextProvider>
      </DataContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
/*I have a folder styles in src folder. styles folder contain main.css, tailwind.config.light.js, tailwind.config.dark.js. Outside src folder there is tailwind.config.js. My main.css is empty. The projekt run and i change something tailwind.config.js right change the UI. index.css contain  main and index.css */
