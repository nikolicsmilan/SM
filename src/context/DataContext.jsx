import { useContext, createContext, useEffect, useState } from "react";
import Scarlet from "../assets/konyhabutor/Scarlet.jpg";
import {
  myOnSnapshotGeneral,
  myOnSnapshotGeneralIndexZero,
  mySliderAdv,
  watchDataChanges,
} from "../firebase/Firestore";
import { sliderAdvsource } from "../data/reklam";
import { sliderSubmenu } from "../data/dashboard";
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
    compact: false,
    list: false,
    upload: false,
    users: false,
    messages: false,
    calendar: false,
    slider: true,
    gallery: false,
  });
  const [choosenIcon, setChoosenIcon] = useState("slider");
  const [search, setSearch] = useState("");
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const sample = [
    {
      id: 1,
      maintext: "Ön megálmodja! ",
      subtext: "Mi megvalósítjuk!",
      buttontext: "Vásárlás most!",
      maintextSpecifiedcolor: "",
      maintextCustomColor: "",
      subtextSpecifiedColor: "",
      subtextCustomColor: "",
      buttontextSpecifiedColor: " ",
      buttontextCustomColor: "",
      buttonSpecifiedBackgroundcolor: "",
      buttonCustomBackgroundColor: "",
      maintextPosition: "top-10 left-10",
      subtexttextPosition: "top-10 left-10",
      buttontextPosition: "top-10 left-10",
      image: "",
    },
  ];

  const othersample = {
    id: 1,
    maintext: "Ön nem álmodozon? ",
    subtext: "Mi megvalósítjuk!",
    buttontext: "Vásárlás most!",
    maintextSpecifiedcolor: "",
    maintextCustomColor: "",
    subtextSpecifiedColor: "",
    subtextCustomColor: "",
    buttontextSpecifiedColor: " ",
    buttontextCustomColor: "",
    buttonSpecifiedBackgroundcolor: "",
    buttonCustomBackgroundColor: "",
    maintextPosition: "top-10 left-10",
    subtexttextPosition: "top-10 left-10",
    buttontextPosition: "top-10 left-10",
    image: "",
  };
  const [currentSlider, setCurrentSlider] = useState(othersample);
  const [sliderAdv, setSliderAdv] = useState(sample);
  const [sliderCurrentIndex, setSliderCurrentIndex] = useState(0);

  console.log("DataContext sliderAdv", sliderAdv);
  console.log("DataContext currentSlider", currentSlider);

  const handleConfig = (property, akarmi) => {
    /*setConfig((prevConfig) => ({
   ...prevConfig,
   [property]: !prevConfig[property],
   [property]: akarmi,
 }));*/
    if (!config[property]) {
      // Check if the property is not already true
      setChoosenIcon(property); // Set the chosen icon based on the property

      setConfig((prevConfig) => {
        const updatedConfig = { ...prevConfig };

        // Set the property being toggled to true
        updatedConfig[property] = true;

        // Set all other properties to false
        for (const prop in updatedConfig) {
          if (prop !== property) {
            updatedConfig[prop] = false;
          }
        }

        return updatedConfig;
      });
    }
  };
  // console.log('In DataContext sliderAdv state: ',sliderAdv)
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
    //SliderAdv
    const unsubscribe = watchDataChanges("SliderAdv", setSliderAdv);
    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    setSliderAdv([]); // Clear state initially

    // Start listening for changes in the "SliderAdv" collection
    const unsubscribe = watchDataChanges("SliderAdv", setSliderAdv);

    // Clean up the listener when the component unmounts
    return () => {
      unsubscribe();
    };
  }, []); // Run this effect only once on component mount

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
  /*
  useEffect(() => {
    setCurrentSlider(sliderAdv[sliderCurrentIndex]);
  }, [sliderCurrentIndex]);*/

  useEffect(() => {
    setCurrentSlider((prevSlider) => {
      const newSlider = sliderAdv[sliderCurrentIndex];
      if (newSlider !== undefined) {
        return newSlider;
      } else {
        return prevSlider;
      }
    });
  }, [sliderCurrentIndex, sliderAdv]);

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
        sliderAdv,
        setSliderAdv,
        sliderCurrentIndex,
        setSliderCurrentIndex,
        handleConfig,
        currentSlider,
        setCurrentSlider,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const MyDataContext = () => {
  return useContext(DataContext);
};
