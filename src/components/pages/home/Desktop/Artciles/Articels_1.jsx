import React from "react";
import kep from "../../../../../assets/Logo2.png"
import { useNavigate } from "react-router-dom";

const Articels_1 = () => {
  // const myarray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 /* const articles = [
    {
      id: 1,
      title: "Kiváló minőségű bútorok",
      content:
        "Gyártunk minőségi bútorokat, amelyek hosszú élettartamúak és stílusosak.",
    },
    {
      id: 2,
      title: "Egyedi tervezés",
      content:
        "Bútorgyártásunk során az ügyfeleink egyedi igényeire is figyelünk, és személyre szabott tervezést kínálunk.",
    },
  
    // További cikkek...
  ];*/

  const articles = [
    {
      id: 1,
      title: "Kiváló minőségű bútorok",
      content:
        "Gyártunk minőségi bútorokat, amelyek hosszú élettartamúak és stílusosak. Minőségi anyagokat és precíz gyártási folyamatot alkalmazunk, hogy bútoraink kiváló minőségűek legyenek. Ha tartósságot és stílust keres bútoraihoz, akkor a mi termékeink a legjobb választások."
    },
    {
      id: 2,
      title: "Egyedi tervezés",
      content:
        "Bútorgyártásunk során az ügyfeleink egyedi igényeire is figyelünk, és személyre szabott tervezést kínálunk. Az egyedi tervezés lehetővé teszi az Ön számára, hogy olyan bútorokat hozzon létre, amelyek tökéletesen illeszkednek otthonához vagy üzletéhez. Válassza egyedi bútorainkat, hogy kifejezze saját stílusát és igényeit."
    },
    {
      id: 3,
      title: "Fenntartható anyagok",
      content:
        "Környezettudatosan gondolkodunk, és fenntartható anyagokat használunk bútoraink gyártásához. Fontos számunkra a természet megőrzése, és ennek érdekében választjuk az olyan anyagokat, amelyek környezetbarátok és újrahasznosíthatók. Válasszon bútort, amely nem csak szép és kényelmes, hanem környezetbarát is!"
    },
    {
      id: 4,
      title: "Modern design trendek",
      content:
        "Követjük a legújabb design trendeket, hogy modern és divatos bútorokat kínáljunk Önnek. Ha szereti a letisztult vonalakat és az innovatív dizájnt, akkor bútoraink biztosan elnyerik tetszését. Frissítse otthonát a legújabb trendekkel!"
    },
    {
      id: 5,
      title: "A bútorgyártás művészete",
      content:
        "A bútorgyártás a művészet és a funkcionalitás találkozása. Hozzáértő mesterembereink szenvedéllyel dolgoznak, hogy műalkotásokat hozzanak létre, amelyek nemcsak szépek, hanem hasznosak is. Fedezze fel a bútorgyártás művészetét velünk!"
    },
    {
      id: 6,
      title: "Kényelem és funkcionalitás",
      content:
        "Bútoraink kényelmesek és funkcionálisak. Minden darabot úgy tervezünk, hogy megfeleljen mindennapi igényeinek. Élvezze a kényelmet és a funkcionalitást egyaránt az otthonában vagy az irodájában."
    },
    {
      id: 7,
      title: "Praktikus tárolók",
      content:
        "Praktikus tároló megoldásokat kínálunk, hogy rendezett és szervezett legyen otthona vagy munkahelye. A jól tervezett tárolók segítenek maximalizálni a rendet és minimalizálni a káoszt."
    },
    {
      id: 8,
      title: "Hagyományos bútorgyártás",
      content:
        "Ragyogó hagyományokra építünk bútorgyártás terén. Mestereink hosszú évek óta gyártanak minőségi bútorokat, és a hagyományos technikák mellett a modern módszereket is alkalmazzuk. Az eredmény mindig kifogástalan bútorok."
    },
    {
      id: 9,
      title: "Inspiráció az otthonhoz",
      content:
        "Fedezze fel inspirációt az otthona kialakításához a mi cikkeinkből. Tippek és ötletek, hogyan hozza ki a legjobbat otthona berendezéséből, és hogyan alakítsa át egy egyedi és kényelmes helységgé."
    },
    {
      id: 10,
      title: "Ügyfeleink elégedettsége",
      content:
        "Ügyfeleink elégedettsége a legfontosabb számunkra. Mindent megteszünk azért, hogy az igényeiknek megfelelő bútorokat szállítsunk nekik, és biztosítsuk, hogy elégedettek legyenek a választásukkal. Ügyfélszolgálatunk mindig rendelkezésre áll, hogy segítsen Önnek."
    },
    // További cikkek...
  ];
  
  return (
    <div className="flex flex-wrap justify-around">
      {articles.map((article) => (
        <div
          key={article.id}
          className="flex flex-col h-96 w-96 border-2 border-info rounded-2xl m-2"
        >
          <div>
            <img src={kep}/>
            <h2 className="text-2xl m-2">{article.title}</h2>
            <p className="m-2">{article.content}</p>
            <p className=" my-5 m-2 hover:text-primary cursor-pointer">... tovább olvasom</p>
          </div>{" "}
        </div>
      ))}
    </div>
  );
};

export default Articels_1;
