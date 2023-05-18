import { useContext, createContext, useEffect, useState } from "react";

// Create the AuthContext
const StyleContext = createContext();

export const StyleContextProvider = ({ children }) => {
  // Csak azokat itt amik globálisan egyformán
  //hatnak mindenhol ahol felhasználásra kerülnek.
  const [style, setStyle] = useState("narancs");
  const [activeAside, setActiveAside] = useState(true);

  return (
    <StyleContext.Provider
      value={{ style, setStyle, activeAside, setActiveAside }}
    >
      {children}
    </StyleContext.Provider>
  );
};

export const useStyleContext = () => {
  return useContext(StyleContext);
};
