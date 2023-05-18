import React from "react";
import { Link } from "react-router-dom";
import { links } from "../../data/aside";
import { MyDataContext } from "../../context/DataContext";
import { useStyleContext } from "../../context/StyleContext";
import { useNavigate } from "react-router-dom";
import CustomNav from "./CustomNav";
const Aside = () => {
  const { setSearch, setSliderPosition } = MyDataContext();
  const { setStyle } = useStyleContext();
  const navigate = useNavigate();
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
                <Link className="flex items-center m-1 " activeClassName="active" to={link.to}>
                  <span className="text-2xl text-info">{link.icon}</span>
                  <span className="capitalize m-1 text-info">{link.name}</span>
                </Link>
              ) : link.type === "style" ? (
                <CustomNav
                activeClassName="active"
                  ownstyle={link.ownstyle}
                  icon={link.icon}
                  onClick={handleStyle}
                  name={link.name}
                />
              ) : link.type === "search" ? (
                <CustomNav
                activeClassName="active"
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

/*
  <NavLink  className="flex items-center m-1 "  to={link.to}   >
                  <span className="text-2xl text-info">{link.icon}</span>
                  <span className="capitalize m-1 text-info">{link.name}</span>
                </NavLink >
*/