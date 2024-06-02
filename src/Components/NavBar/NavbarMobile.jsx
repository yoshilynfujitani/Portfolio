import React from "react";
import Container from "../../Layout/Container";
import { AnimatePresence, motion } from "framer-motion";
import NavbarLinks from "./NavbarLinks";
import { DarkModeSwitch } from "../DarkModeBtn/DarkModeSwitch";

const NavbarMobile = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="z-0 w-full absolute bg-lightModeMain dark:bg-secondary shadow-md"
    >
      <div className="w-full px-5 py-5 ">
        <NavbarLinks />
        <DarkModeSwitch />
      </div>
    </motion.div>
  );
};

export default NavbarMobile;
