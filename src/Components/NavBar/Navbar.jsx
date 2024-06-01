import { useState, useEffect, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CgMenuGridR } from "react-icons/cg";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
import { HiHome } from "react-icons/hi";
import { HiInformationCircle } from "react-icons/hi";

import { HiGlobeAlt } from "react-icons/hi";
import { HiBriefcase } from "react-icons/hi";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import dp from "/pic.jpg";

import DarkModeContext from "../../contexts/darkMode";
import Container from "../../Layout/Container";
import { DarkModeSwitch } from "../DarkModeBtn/DarkModeSwitch";
import UserNameAndDP from "../Profile/UserNameAndDP";
import NavbarLinks from "./NavbarLinks";

const Navbar = () => {
  const { dark } = useContext(DarkModeContext);

  return (
    <>
      <Container>
        <div className="flex items-center py-2.5 w-full justify-between px-[10px] md:px-[150px]  2xl:px-[350px] shadow-sm bg-lightModeMain dark:bg-Main">
          <div className="flex-1">
            <UserNameAndDP />
          </div>
          <div className="flex md:flex-1  items-center justify-between gap-20">
            <NavbarLinks />
            <DarkModeSwitch />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Navbar;
