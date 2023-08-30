import { useContext, createContext, useEffect, useState } from "react";
import Scarlet from "../assets/konyhabutor/Scarlet.jpg";
import { myOnSnapshotGeneral } from "../components/firebase/Firestore";
const DataContext = createContext();
const baseState = [
  {
    name: "",
    price: "",
    description: "",
    category: "Konyha",
    url: "",
  },
];
export const DataContextProvider = ({ children }) => {
  const [sliderPosition, setSliderPosition] = useState(0);
  const [kitchen, setKitchen] = useState(baseState);
  const [hall, setHall] = useState(baseState);
  const [wardrobe, setWardrobe] = useState(baseState);
  const [slidingDoor, setSlidingDoor] = useState(baseState);
  const [bath, setBath] = useState(baseState);
  const [newimages, setNewImages] = useState(baseState);
  const [config, setConfig] = useState({
    compact: true,
    list: false,
    upload: false,
    users: false,
  });
  const [choosenIcon, setChoosenIcon] = useState("compact");
  const [search, setSearch] = useState("");
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  console.log("ez a kitchen", kitchen);
  useEffect(() => {
    //Kitchen
    const unsubscribe = myOnSnapshotGeneral(setKitchen, "Konyha");
    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    //Wardrobe
    const unsubscribe = myOnSnapshotGeneral(setWardrobe, "Gardrób");
    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    //Hall
    const unsubscribe = myOnSnapshotGeneral(setHall, "Előszoba");
    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    //Slidingdoor
    const unsubscribe = myOnSnapshotGeneral(setSlidingDoor, "Tolóajtó");
    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    //Bath
    const unsubscribe = myOnSnapshotGeneral(setBath, "Fürdő");
    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    let newDataArray = [];
    newDataArray = [...kitchen, ...hall, ...bath, ...wardrobe, ...slidingDoor];
    // kiszűri hogy a keresett kifejezés megtalálható valemlyik  propertyben
    const filteredResults = newDataArray.filter((post, index, arr) => {
      //A trim fut le először eltávolítja a leading és trailing karaktereket
      //és a szavak között megmaradó szóközöket a split távolítja el
      //amikor egy tömbe darabolja őket
      //tehát a searchTerms egy tömb lesz
      const searchTerms = search.trim().split(/\s+/);
      //Minden searchTerms elementen le fog futni
      //minden egyes post al össze fogja hasonlítani.
      //ha egyzeést talál mentődik a matchingProps ba
      const matchingProps = searchTerms.filter(
        (term) =>
          post?.name?.toLowerCase().includes(term.toLowerCase()) ||
          post?.category?.toLowerCase().includes(term.toLowerCase()) ||
          // post?.color?.toLowerCase().includes(term.toLowerCase()) ||
          post?.description?.toLowerCase().includes(term.toLowerCase())
      );
      // Ha van matchingProps visszatér
      return (
        matchingProps.length > 0 &&
        //filter out duplicates in the resulting
        //mivel többször visszatérhet ugyanaz az element
        arr.findIndex((p) => p.name === post.name) === index
      );
    });

    // set the newImages state to the array of furniture items
    setNewImages(filteredResults);
  }, [search, kitchen, hall, wardrobe, bath, slidingDoor]);

  return (
    <DataContext.Provider
      value={{
        newimages,
        search,
        setSearch,
        sliderPosition,
        setSliderPosition,
        size,
        config,
        setConfig,
        choosenIcon,
        setChoosenIcon,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const MyDataContext = () => {
  return useContext(DataContext);
};
