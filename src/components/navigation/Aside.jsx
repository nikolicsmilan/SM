import React from "react";
import { Link } from "react-router-dom";
import { links } from "../../data/aside";
import { MyDataContext } from "../../context/DataContext";
import { useStyleContext } from "../../context/StyleContext";
import { useNavigate } from "react-router-dom";
import CustomNav from "./CustomNav";
import { NavLink, useMatch } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";

const MyNavLink = ({ link }) => {
  const { activeAside, setActiveAside } = useStyleContext();
  const path = link?.to || "/";
  const match = useMatch(path);
  const isActive = (match) => {
    return match ? true : false;
  };

  return (
    <NavLink
      to={path}
      key={link.name}
      onClick={(prevState) => {
        setActiveAside(!prevState);
        console.log("kattintottam", activeAside);
      }}
      className={`flex items-center m-0 ${
        isActive(match) ? "text-primary" : ""
      }`}
    >
      <span
        className={`text-2xl text-info ${
          isActive(match) ? "text-primary" : ""
        }`}
      >
        {link.icon}
      </span>
      <span
        className={`capitalize m-1 text-info ${
          isActive(match) ? "text-primary" : ""
        }`}
      >
        {link.name}
      </span>
    </NavLink>
  );
};

const Aside = () => {
  const { search, setSearch, setSliderPosition } = MyDataContext();

  const { style, setStyle, activeAside, setActiveAside } = useStyleContext();
  const navigate = useNavigate();
  // const match = useMatch(path);
  const handleSearch = (category) => {
    console.log("ez lesz a kategória", category);
    setSearch(category);
    setSliderPosition(0);
    navigate("/");
  };

  const handleStyle = (mystyle) => {
    setStyle(mystyle);
  };

  return (
    <div className="border-0">
      <div className="border-0 ">
        {links.map((item) => (
          <div key={item.title} className=" border-0 m-3 mt-4  text-info ">
            {item.title !== "Pages" ? (
              <p className="font-bold">{item.title}</p>
            ) : (
              ""
            )}
            {item.links.map((link) =>
              link.type === "route" ? (
                <MyNavLink key={link.name} link={link} />
              ) : link.type === "style" ? (
                <CustomNav
                  key={link.name}
                  ownstyle={
                    link.ownstyle +
                    `${style === link.name ? "" : "text-stone-400"}`
                  }
                  icon={link.icon}
                  onClick={handleStyle}
                  name={link.name}
                 englishName={link.englishName}
                />
              ) : link.type === "search" ? (
                <CustomNav
                  key={link.name}
                  ownstyle={search === link.name ? "text-primary" : ""}
                  icon={link.icon}
                  onClick={handleSearch}
                  name={link.name}
                  englishName={link.englishName}
                />
              ) : null
            )}
          </div>
        ))}
      </div>
      <AiOutlineClose
        className="text-primary absolute top-4 right-6 lg:hidden"
        onClick={() => setActiveAside((prevState) => !prevState)}
      />
    </div>
  );
};

export default Aside;
