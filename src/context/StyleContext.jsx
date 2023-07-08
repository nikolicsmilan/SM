import { useContext, createContext, useState } from "react";

// Create the AuthContext
const StyleContext = createContext();

export const StyleContextProvider = ({ children }) => {
  // Csak azokat itt amik globálisan egyformán
  //hatnak mindenhol ahol felhasználásra kerülnek.
  const [style, setStyle] = useState("dio");
  const [activeAside, setActiveAside] = useState(false);
  const [snap, setSnap] = useState({
    intro: true,
    color: "#EFBD48",
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: "./threejs.png",
    fullDecal: "./threejs.png",
  });

  const [menu3D, setMenu3D] = useState({
    size: 1.8,
    color: "/tv_unit__furniture/textures/Material_5_baseColor.jpeg",
    material: "fenyo",
    roof: "serepes",
    animation: "right",
    rotate:0.01
  });

  return (
    <StyleContext.Provider
      value={{
        style,
        setStyle,
        activeAside,
        setActiveAside,
        snap,
        setSnap,
        menu3D,
        setMenu3D,
      }}
    >
      {children}
    </StyleContext.Provider>
  );
};

export const useStyleContext = () => {
  return useContext(StyleContext);
};
