import React from "react";
import { links } from "../../data/aside";
import { NavLink, useMatch } from "react-router-dom";

const newarray = links.filter((item) => item.title === "Pages")[0].links;
const MyNavLink = ({ link }) => {
  const path = link?.to || "/";
  const match = useMatch(path);
  const isActive = (match) => {
    return match ? true : false;
  };

  return (
    <NavLink
      to={path}
      key={link.name}
      onClick={(prevState) => {}}
      className={`flex  items-center mx-2 ${
        isActive(match) ? "text-primary" : ""
      }`}
    >
      <span
        className={`text-2xl text-info p-1 ${
          isActive(match) ? "text-primary" : ""
        }`}
      >
        {link.icon}
      </span>
    </NavLink>
  );
};

const BottomNavBar = () => {
  return (
    <div className="border-0">
      <div className="border-0 ">
        <div className="flex justify-center border-0 m-0 mt-0  text-info ">
          {newarray.map((link) =>
            link.type === "route" ? (
              <MyNavLink key={link.name} link={link} />
            ) : null
          )}
        </div>
      </div>
    </div>
  );
};

export default BottomNavBar;

/*
 <Link className="flex  items-center mx-2 " to={link.to}>
                <span className="text-2xl text-info p-1">{link.icon}</span>
              </Link>
*/
