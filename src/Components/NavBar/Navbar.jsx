import { useState, useEffect, useContext } from "react";
import { CgMenuGridO } from "react-icons/cg";

import DarkModeContext from "../../contexts/darkMode";
import Container from "../../Layout/Container";
import { DarkModeSwitch } from "../DarkModeBtn/DarkModeSwitch";
import UserNameAndDP from "../Profile/UserNameAndDP";
import NavbarLinks from "./NavbarLinks";
import NavbarMobile from "./NavbarMobile";
import NavbarContext from "../../contexts/navbarContext";
import { AnimatePresence } from "framer-motion";

const Navbar = () => {
  const { isOpen, handleNavbarStatus } = useContext(NavbarContext);

  return (
    <>
      <Container>
        <div className="flex items-center py-2.5 w-full justify-between px-[10px] md:px-[150px] xl:px-[275px] 2xl:px-[350px] shadow-sm bg-lightModeMain dark:bg-Main z-50">
          <div className="flex-1">
            <UserNameAndDP />
          </div>
          <div className="hidden md:flex md:flex-1  items-center justify-between gap-20">
            <NavbarLinks />
            <DarkModeSwitch />
          </div>
          <div className="md:hidden">
            <CgMenuGridO
              className="text-2xl "
              onClick={() => handleNavbarStatus((value) => !value)}
            />
          </div>
        </div>

        <AnimatePresence>
          <div className="w-full">
            {isOpen && (
              <>
                <NavbarMobile />
              </>
            )}
          </div>
        </AnimatePresence>
      </Container>
    </>
  );
};

export default Navbar;
