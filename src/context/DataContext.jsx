import { useContext, createContext, useEffect, useState } from "react";
import { images } from "../data/image2";
import Scarlet from "../assets/konyhabutor/Scarlet.jpg";
const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
  const [sliderPosition, setSliderPosition] = useState(0);
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
  const [search, setSearch] = useState("");
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [basket, setBasket] = useState({
    fill: false,
    items: [],
  });
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
    images.forEach((thing) => {
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
    });

    // kiszűri hogy a keresett kiejezés megtalálható valemlyik  propertyben
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
          post?.color?.toLowerCase().includes(term.toLowerCase()) ||
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
  }, [search]);

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
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const MyDataContext = () => {
  return useContext(DataContext);
};

/* const filteredResults = newDataArray.filter(
      (post) =>
        post?.name?.toLowerCase().includes(search?.toLowerCase()) ||
        post?.category?.toLowerCase().includes(search?.toLowerCase()) ||
        post?.color?.toLowerCase().includes(search?.toLowerCase()) ||
        post?.description?.toLowerCase().includes(search?.toLowerCase())
    );*/
/*  const filteredResults = newDataArray.filter(
      (post, index, arr) => {
        const searchTerms = search.split(' ');
        const matchingProps = searchTerms.filter(term =>
          (post?.name?.toLowerCase().includes(term.toLowerCase()) ||
           post?.category?.toLowerCase().includes(term.toLowerCase()) ||
           post?.color?.toLowerCase().includes(term.toLowerCase()) ||
           post?.description?.toLowerCase().includes(term.toLowerCase()))
        );
        return (
          matchingProps.length > 0 &&
          arr.findIndex(p => p.name === post.name) === index
        );
      }
    );*/
//felesleges nem jó
/*
    newDataArray = images.reduce((acc, category) => {
      const categoryItems = category.data.map((item) => ({
        ...item,
        category: category.name,
      }));
      return [...acc, ...categoryItems];
    }, []);*/
