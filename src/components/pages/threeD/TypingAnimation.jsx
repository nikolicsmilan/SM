import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const TypingAnimation = () => {
  const [text, setText] = useState("");
  const [newContent, setNewContent] = useState(" fdsf  df sdf ds f sdf sd f sdf sd fsd f sdf ds fsd f dsf sd f dsf s fd s"); // Új állapot a változó szövegnek
  const [count,setCount] = useState(0);
  const arr =['nsdfnskd fsdfdsfa dfsgad  dasd asd   d asd as d asd as das d sad asd ', 'aaaaaaaaa a a aaaaaaaaaaa   aaa ','Kkkkkkk vdsvkdsvkk k k k k  k k k k k k k k k']
  const change = () => {
    setCount(count+1)
    setNewContent(arr[count]); // Beállítjuk az új szöveget
  };

  useEffect(() => {
    let timer;
    let currentIndex = 0;

    const typeNextCharacter = () => {
      timer = setTimeout(() => {
        const content = newContent || "Dynamic Content"; // Használjuk az új szöveget, ha van, különben az eredeti tartalmat
        setText(content.substring(0, currentIndex + 1));
        currentIndex++;

        if (currentIndex < content.length) {
          typeNextCharacter();
        }
      }, 50);
    };

    typeNextCharacter();

    return () => {
      clearTimeout(timer);
    };
  }, [newContent]); // Figyeljük az új szöveg változást is

  return (
    <>
      <button onClick={change}>Change</button>
     
      <div className=" max-w-sm">{text}</div>
    </>
  );
};

export default TypingAnimation;

// <motion.div className="w-96 ">{text}</motion.div>
