import { useContext, createContext, useEffect, useState } from "react";
import { myOnSnapshotGeneral } from "../components/firebase/Firestore";
const GroupContext = createContext();

export const GroupContextProvider = ({ children }) => {
  //These are all of Data
  const [main, setMain] = useState("");
  const [sub, setSub] = useState([]);
  const [secondsub, setSecondSub] = useState([]);

  //These are filtered data
  const [subgroup, setSubgroup] = useState([]);
  const [secondsubgroup, setSecondSubgroup] = useState("");

  //These are clicked Button

  const [activeMainButton, setActiveMainButton] = useState(null);
  const [activeSubButton, setActiveSubButton] = useState(null);
  const [activeSecondSubButton, setActiveSecondSubButton] = useState(null);

  // ez az alcsoportok betöltődésért felelős
  useEffect(() => {
    setActiveSubButton(null);
    const group = sub?.find((item) => {
      return main.some(() => activeMainButton?.id === item.mainid);
    });

    const newArray = [];
    if (group) {
      newArray.push(group);
    }

    setSubgroup(newArray);
  }, [activeMainButton, sub]);

  // ez 2. alcsoportok betöltődésért felelős
  useEffect(() => {
    setActiveSecondSubButton(null);
    const group = secondsub?.find((item) =>
      subgroup.some(() => activeSubButton?.id === item.subid)
    );
    const newArray = [];
    if (group) {
      newArray.push(group);
    }

    setSecondSubgroup(newArray);
  }, [activeSubButton, subgroup]);

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

  return (
    <GroupContext.Provider
      value={{
        main,
        setMain,
        sub,
        setSub,
        secondsub,
        setSecondSub,
        subgroup,
        setSubgroup,
        secondsubgroup,
        setSecondSubgroup,
        activeMainButton,
        setActiveMainButton,
        activeSubButton,
        setActiveSubButton,
        activeSecondSubButton,
        setActiveSecondSubButton,
      }}
    >
      {children}
    </GroupContext.Provider>
  );
};

export const MyGroupContext = () => {
  return useContext(GroupContext);
};
