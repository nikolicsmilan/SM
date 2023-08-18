import { useContext, createContext, useEffect, useState } from "react";
import { images } from "../data/image2";
import Scarlet from "../assets/konyhabutor/Scarlet.jpg";
import { myOnSnapshotGeneral } from "../components/firebase/Firestore";
const DataContext = createContext();
const baseState=[{
  name: "",
  price: "",
  description: "",
  category: "",
  url: "",
}]
export const DataContextProvider = ({ children }) => {
  const [sliderPosition, setSliderPosition] = useState(0);
  const [kitchen, setKitchen] = useState(baseState);
  const [hall, setHall] = useState([]);
  const [wardrobe, setWardrobe] = useState([]);
  const [slidingDoor, setSlidingDoor] = useState([]);
  const [bath, setBath] = useState([]);
  const [newimages, setNewImages] = useState([
    {
      name: "Scarlet",
      image: Scarlet,
      type: "real",
      description: "Elegant and modern kitchen set with a red finish",
      price: "1200 USD",
      category: "Konyhabútor",
      color: "piros",
    },
  ]);
  const [dataNet, setDataNet] = useState([
    {
      name: "Piros konyhabútor Scarlet",
      price: "10",
      description: "ez egy bútor",
      category: "Konyhabútor",
      url: "https://firebasestorage.googleapis.com/v0/b/sm-new-8a9a7.appspot.com/o/files%2FAria.jpg?alt=media&token=916abb4a-c5bf-42fd-a543-da005247d530",
    },
    {
      name: "Piros konyhabútor Scarlet",
      price: "10",
      description: "ez egy bútor",
      category: "Konyhabútor",
      url: "https://firebasestorage.googleapis.com/v0/b/sm-new-8a9a7.appspot.com/o/files%2FAria.jpg?alt=media&token=916abb4a-c5bf-42fd-a543-da005247d530",
    },
  ]);

  const [search, setSearch] = useState("");
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
//nem tölti le
  useEffect(() => {
    const unsubscribe = myOnSnapshotGeneral(setKitchen, "Kitchen");
    return () => {
      unsubscribe();
    };
    console.log('ez a kitchen',kitchen)
  }, []);

  useEffect(() => {
    const unsubscribe = myOnSnapshotGeneral(setHall, "Hall");
    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    const unsubscribe = myOnSnapshotGeneral(setBath, "Slidingdoor");
    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    const unsubscribe = myOnSnapshotGeneral(setWardrobe, "Wardrobe");
    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    const unsubscribe = myOnSnapshotGeneral(setBath, "Bath");
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
    //leszedi a külső burkot és mindent egy arraybe rak bele
    /*  images.forEach((thing) => {
      thing.data.forEach((item) => {
        const { name, image, type, description, price, category, color } = item;
        newDataArray.push({
          name,
          image,
          type,
          description,
          price,
          category,
          color,
        });
      });
    });*/
    console.log('ez lesz a kitchen: ', kitchen)
    newDataArray = [...kitchen,...hall];

    console.log('ez az össz: ', newDataArray)
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
  }, [search,kitchen]);

  return (
    <DataContext.Provider
      value={{
        images,
        newimages,
        search,
        setSearch,
        sliderPosition,
        setSliderPosition,
        size,
        dataNet,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const MyDataContext = () => {
  return useContext(DataContext);
};
