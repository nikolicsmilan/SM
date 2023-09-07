import { useState } from "react";
import useWindowSize from "../../hooks/use-windowsize";
import ScreenSize from "./ScreenSize";
import { Link } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
import { useStyleContext } from "../../context/StyleContext";
import DesktopNavBar from "./DesktopNavBar";
import TabletNavbar from "./TabletNavbar";
import MobileNavBar from "./MobileNavBar";
import Logo from "./Logo";
import Search from "./Search";
import NavButton from "./NavButton";
///import UserIcon from "./UserIcon";
import { FaUserAlt } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

export default function NavBar() {
  const [navbar, setNavbar] = useState(false);
  const { width } = useWindowSize();
  const { user, logOut, currentRole, setCurrentRole } = UserAuth();
  const { setActiveAside, appearUser, setAppearUser } = useStyleContext();



  return (
    <nav className="w-full border-0 border-sky-400">
      {width < 992 ? (
        <MobileNavBar
          Logo={Logo}
          NavButton={NavButton}
          Search={Search}
          GiHamburgerMenu={GiHamburgerMenu}
          AiOutlineClose={AiOutlineClose}
          UserIcon={FaUserAlt}
          appearUser={appearUser}
          setAppearUser={setAppearUser}
        />
      )  : (
        <DesktopNavBar
          Logo={Logo}
          NavButton={NavButton}
          Search={Search}
          UserIcon={FaUserAlt}
        />
      )}
    </nav>
  );
}


