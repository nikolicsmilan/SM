import React, { useRef, useEffect } from "react";
import { MyDataContext } from "../../../../../context/DataContext";

const SliderContent = ({
  handlesSwitchUrlap,
  sliderAdv,
  sliderCurrentIndex,
  contentsize,
  handleSize,
}) => {
  const contentRef = useRef(null);
  const { size } = MyDataContext();

  useEffect(() => {
    handleSize(contentRef);
  }, [contentRef, size]);

  useEffect(() => {
    console.log("SliderContent run UseEffect for rendering css style again");
  }, [sliderAdv]);

//ENNEK ITT LENNE A HELYE ÉS AZ ADATBÁZISBÓL INICIALIÁLT ÉRTÉKEKET IS
//ITT KELL VALAHOL BEÁLLÍTANI.
  /*
    useEffect(() => {
    console.log("Useffect run")
    setSliderAdv((prevConfig) => {
      const updatedConfig = [...prevConfig];
      updatedConfig[sliderCurrentIndex][selectedAttribute] = selectedPosition;
      return updatedConfig;
    });
  }, [selectedAttribute,selectedPosition,setSliderAdv,sliderCurrentIndex]);
  
  
  */

  useEffect(() => {
   
  }, []);

  return (
    <div className="flex overflow-hidden border-0 border-red-400 h-96 w-full  lg:w-auto">
      {sliderAdv?.map((item, index) => (
        <div
          key={index}
          className="flex-shrink-0 rounded-2xl  w-full border-2 border-sky-400 m-0 overflow-hidden h-auto relative"
          style={{
            backgroundImage: `url("${item.image}")`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            transform: `translateX(-${
              sliderCurrentIndex * contentsize?.width
            }px)`,
            transition: "transform 0.3s ease-in-out",
          }}
          ref={contentRef}
        >
          {/*RÁJÖTTEM NAGYVALÓSZÍNŰSÉGGEL
     MI A PROBLÉMA CSS RENDERŐLÉDI PROBLÉMA
     IGEN? NEM: EZ LEGYEN USSEFECTES IZÉ!!!!!!!!!!!!!!!
     NEM RENDELI ÚJRA A CSS VÁLOZÓT BIZONYOS ESETKBEN
     EZT KELL KITAPASZTALNI MEGÉRTENI
     A KIÍRÁSBAN MEGVÁLTOZIK DE ITT NEM VALÓSZÍNŰ
     VAGY JOBBAN MONDVA NEM IDŐBEN VÁLTOZIK MEG
     MEG FELÜLÍRÁSI PROBLÉÁMA!!!!!!!!! 
     
      */}
          {/* ITT VALAMI TURPISÁG VAN  left-10 el nem működik left-0 val alig
righ-10 el múködik right-0 val is működik
*/}
          <div
            className={`${item.maintextPosition} absolute  my-0 border-2 border-lime-400  `}
            // style={(item.maintextPosition)}
          >
            {item.maintextPosition}
            <h1
              className={`${item.maintextSpecifiedcolor} border-2 border-lime-400 text-2xl  mx-2 mt-0 `}
              style={{
                color: item.maintextCustomColor,
              }}
            >
              {item.maintext}
            </h1>
          </div>

          <div
            className={`${item.subtexttextPosition} absolute right-0 top-10 my-10 border-0 border-red-400  `}
          >
            <p
              className={`${item.subtextSpecifiedColor}  border-0 border-red-400 font-bold text-base mx-2 mt-0 `}
              style={{
                color: item.subtextCustomColor,
              }}
            >
              {item.subtext}
            </p>
          </div>

          {item.buttontext ? (
            <div
              className={`absolute right-0 top-10  my-10 py-0 border-0  border-sky-400 ${item.buttontextPosition}`}
            >
              <button
                onClick={handlesSwitchUrlap}
                className={` ${item.buttontextSpecifiedColor}  ${item.buttonSpecifiedBackgroundcolor}   mt-10  font-bold m-2  p-2 w-36 md:w-36 max-w-sm bg-success border-0 rounded text-center cursor-pointer   border-lime-400 `}
                style={{
                  color: item.buttontextCustomColor,
                  backgroundColor: item.buttonCustomBackgroundColor,
                }}
              >
                {item.buttontext ? item.buttontext : ""}
              </button>
            </div>
          ) : (
            ""
          )}
        </div>
      ))}
    </div>
  );
};

export default SliderContent;

/*
 <div
            className={`${item.maintextPosition} absolute  my-0 border-2 border-lime-400  `}
           // style={(item.maintextPosition)}
       
          >
*/

/*
style={{
  left:item.maintextPosition
 }}*/
/*
  {item.subtext ? (
            <div
              className={`fixed my-10 border-2 w-full border-red-400  ${item.subtexttextPosition}`}
            >
              <p
                className={`${item.subtextSpecifiedColor}  py-5 font-bold text-base m-2 mx-20 `}
                style={{
                  color: item.subtextCustomColor,
                }}
              >
                {item.subtext}
              </p>
            </div>
          ) : (
            ""
          )}

*/

/*


          {item.subtext ? (
            <div
              className={`absolute my-10 border-0 border-red-400  `}
            >
              <p
                className={`${item.subtextSpecifiedColor}  ${item.subtexttextPosition} relative border-0 border-orange-400  py-5 font-bold text-base m-2 mx-20 `}
                style={{
                  color: item.subtextCustomColor,
                }}
              >
                {item.subtext}
              </p>
            </div>
          ) : (
            ""
          )}










          {item.buttontext ? (
            <div
              className={`absolute my-10 py-10 border-0 w-full border-sky-400 ${item.buttontextPosition}`}
            >
              <button
                onClick={handlesSwitchUrlap}
                className={` ${item.buttontextSpecifiedColor}  ${item.buttonSpecifiedBackgroundcolor}   my-10  font-bold m-2 mx-20 p-2 w-36 md:w-36 max-w-sm bg-success border-0 rounded text-center cursor-pointer   border-lime-400 `}
                style={{
                  color: item.buttontextCustomColor,
                  backgroundColor: item.buttonCustomBackgroundColor,
                }}
              >
                {item.buttontext ? item.buttontext : ""}
              </button>
            </div>
          ) : (
            ""
          )}


*/

/*
  <div
              className={`absolute right-0 top-10 my-0 border-2 border-lime-400  ${item.subtexttextPosition}`}
            >
              <h1
                className={`${item.maintextCustomColor}   border-2 border-lime-400   text-2xl text-gradient mx-20 mt-5 `}
                style={{
                  color: item.maintextCustomColor,
                }}
              >
                {item.maintext} {item.subtexttextPosition}B
              </h1>
            </div>



*/

/*
ezzel működött:
     <div
            className={`absolute right-0 top-10 my-0 border-2 border-red-400 ${item.subtexttextPosition} `}
          >
            <h1
              className={`${item.subtextSpecifiedColor}  border-2 border-red-400 text-2xl   mx-20 mt-5  `}
              style={{
                color: item.subtextCustomColor,
              }}
            >
              {item.subtext} 
            </h1>
          </div>

*/
