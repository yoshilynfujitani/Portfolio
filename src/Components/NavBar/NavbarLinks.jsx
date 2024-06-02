import React, { useContext } from "react";
import { Link } from "react-router-dom";
import NavbarContext from "../../contexts/navbarContext";

const LinkItems = ({ index, text }) => {
  return (
    <div className="flex items-center">
      <span className="px-2 mr-2 rounded-md border border-subtext">
        {index}
      </span>
      <h1 className="text-sm font-semibold dark:hover:text-white transition ease-in duration-100">
        {text}
      </h1>
    </div>
  );
};

const NavbarLinks = () => {
  const { handleNavbarStatus } = useContext(NavbarContext);

  const handleLinkClick = () => {
    if (window.innerWidth < 768) {
      handleNavbarStatus((value) => !value);
    }
  };

  return (
    <div className="flex flex-col space-y-5 pb-5 md:pb-0 md:flex-row md:space-y-0 md:space-x-5 md:items-center">
      <Link to="/Portfolio" onClick={handleLinkClick}>
        <LinkItems index={1} text="Home" />
      </Link>
      <Link to="/Portfolio/about" onClick={handleLinkClick}>
        <LinkItems index={2} text="About" />
      </Link>
      <Link to="/Portfolio/stack" onClick={handleLinkClick}>
        <LinkItems index={3} text="Tools" />
      </Link>
      <Link to="/Portfolio/projects" onClick={handleLinkClick}>
        <LinkItems index={4} text="Projects" />
      </Link>
    </div>
  );
};

export default NavbarLinks;
