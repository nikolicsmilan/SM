import { useContext, createContext, useEffect, useState } from "react";
import {
  googleSignIn,
  logOut,
  myOnAuthStateChange,
} from "../firebase/Auth";
import {
  myOnSnapshotGeneral,
  myOnSnapshotElements,
  myDeleteElement,
} from "../firebase/Firestore";
//import { elementButtonhandle } from "../components/customerhome/customer-home-helper";
//import {useClickedButton} from "../hooks/use-clickedbutton"
// Create the AuthContext
const AuthContext = createContext();
const initialFormData = {
  id: "",
  name: "",
  main: "",
  subg: "",
  secondsub: "",
  width: "",
  high: "",
  deep: "",
  highwithpedestal: "",
  netprice: "",
  grossprice: "",
  wages: "",
  elements: [],
};
// AuthContextProvider component provides the context
export const AuthContextProvider = ({ children }) => {
  const [currentRole, setCurrentRole] = useState("customer");
  // State to hold the authenticated user
  const [user, setUser] = useState({});
  // State to hold the main group data
  const [elements, setElements] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [selectedObject, setSelectedObject] = useState({});
  // State to hold the selected main group and sub group
  const [selectedMainGroup, setSelectedMainGroup] = useState(null);
  const [selectedSubGroup, setSelectedSubGroup] = useState(null);
  const [formData, setFormData] = useState(initialFormData);
  const [main, setMain] = useState("");
  const [sub, setSub] = useState("");
  const [secondsub, setSecondSub] = useState("");
  // console.log('main',main);
  //console.log('sub',sub)

 // const[buttonsMap,handleButtonClick]= useClickedButton()

  const [selectedMainButton, setSelectedMainButton] = useState("");
  const [selectedSubButton, setSelectedSubButton] = useState("");
  const [selectedSecondSub, setSelectedSecondSub] = useState("");

  const myElementButtonhandle = (item) => {
    const mainGroupButtonhandle = (item) => {
      setSelectedMainGroup(item);
      setSelectedSubGroup(null);
      // setSelectedMainButton(item.id);
    };
    const subGroupButtonhandle = (item) => {
      // setSelectedSubButton(item.id);
      setSelectedSubGroup(item);
    };

    const myElementButtonhandle = (item) => {
    //  elementButtonhandle(item, setSelectedId);
      //  setSelectedSecondSub(item.id);
      // console.log("setSelectedSecondSubbbbbbbbbb:", item.id);
    };

    if (item.grouptype === "Fő csoport") {
      console.log('lefuttttttttttttttt?', item.id)
      mainGroupButtonhandle(item);
    //  setSelectedMainButton(item.id)
    } else if (item.grouptype === "Al csoport") {
      subGroupButtonhandle(item);
    //  selectedSubButton(item.id)
    } else if (item.grouptype === "2.Al csoport") {
      myElementButtonhandle(item);
     // setSelectedSecondSub(item.id)
      
    }

    //fel kell írni melyikcsoport eesteében mit csinálon
    //elementButtonhandle(item, setSelectedId);
    console.log("ezzzzz   az", item);
    //  setSelectedSecondSub(item.id);
    // console.log("setSelectedSecondSubbbbbbbbbb:", item.id);
  };

  useEffect(() => {
    const unsubscribe = myOnSnapshotGeneral(setMain, "main");
    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    const unsubscribe = myOnSnapshotGeneral(setSub, "sub");
    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    const unsubscribe = myOnSnapshotGeneral(setSecondSub, "secondsub");
    return () => {
      unsubscribe();
    };
  }, []);
  //console.log("formData in AuthContext", formData);
  // UseEffect hook to listen to changes in authentication state in Firebase and update the user state accordingly
  useEffect(() => {
    const unsubscribe = myOnAuthStateChange(setUser);
    //lehet moziilának ezzel van gondja?
    return () => {
      unsubscribe();
    };
  }, []);

  // UseEffect hook to listen to changes in main group data in Firestore and update the maingroup state accordingly

  // UseEffect hook to listen to changes in main group data in Firestore and update the maingroup state accordingly
  useEffect(() => {
    const unsubscribe = myOnSnapshotElements(setElements);
    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    const object = elements.find((item) => item.id === selectedId);
    setSelectedObject(object);
  }, [selectedId]);

  //console.log("selectedObject in AuthContext", selectedObject);
  /* console.log("main", main);
  console.log("sub", sub);
  console.log("seondsub", secondsub);*/
  // Provide the context to the component tree
  return (
    <AuthContext.Provider
      value={{
  
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// UserAuth component is a hook that returns the current value of the context
export const UserAuth = () => {
  return useContext(AuthContext);
};
