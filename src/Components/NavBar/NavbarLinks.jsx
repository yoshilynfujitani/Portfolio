import React from "react";
import { Link } from "react-router-dom";

const NavbarLinks = () => {
  return (
    <div className="hidden md:flex flex-1">
      {" "}
      <div className="flex flex-1 items-center justify-around ">
        <Link to="/Portfolio">
          <h1 className="text-sm font-semibold hover:text-white transition ease-in duration-100 space-x-2">
            <span className="px-2 rounded-md border border-subtext">1</span>{" "}
            Home
          </h1>
        </Link>
        <Link to="/Portfolio/about">
          <h1 className="text-sm font-semibold hover:text-white transition ease-in duration-100 space-x-2">
            <span className="px-2 rounded-md border border-subtext">2</span>
            About
          </h1>
        </Link>
        <Link to="/Portfolio/stack">
          <h1 className="text-sm font-semibold hover:text-white transition ease-in duration-100 space-x-2">
            <span className="px-2 rounded-md border border-subtext">3</span>{" "}
            Tools
          </h1>
        </Link>
        <Link to="/Portfolio/projects">
          <h1 className="text-sm font-semibold hover:text-white transition ease-in duration-100 space-x-5">
            <span className="px-2 rounded-md border border-subtext">4</span>
            Projects
          </h1>
        </Link>
      </div>
    </div>
  );
};

export default NavbarLinks;
