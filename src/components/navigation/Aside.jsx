import React from "react";
import { Link } from "react-router-dom";
import { links } from "../../data/aside";
import { MyDataContext } from "../../context/DataContext";
import { useStyleContext } from "../../context/StyleContext";
import { useNavigate } from "react-router-dom";
import CustomNav from "./CustomNav";
import { NavLink, useMatch } from "react-router-dom";

const MyNavLink = ({ link }) => {
  const { setActiveAside } = useStyleContext();
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
  const { setSearch, setSliderPosition } = MyDataContext();
  const { setStyle } = useStyleContext();
  const navigate = useNavigate();
  // const match = useMatch(path);
  const handleSearch = (category) => {
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
          <div className=" border-0 m-3 mt-4  text-info ">
            {item.links.map((link) =>
              link.type === "route" ? (
                <MyNavLink key={link.name} link={link} />
              ) : link.type === "style" ? (
                <CustomNav
                  ownstyle={link.ownstyle}
                  icon={link.icon}
                  onClick={handleStyle}
                  name={link.name}
                />
              ) : link.type === "search" ? (
                <CustomNav
                  ownstyle={link.ownstyle}
                  icon={link.icon}
                  onClick={handleSearch}
                  name={link.name}
                />
              ) : null
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Aside;
