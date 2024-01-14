import React from "react";
import { motion } from "framer-motion";
import BadgeText from "./BadgeText";
import CopyEmailBtn from "./CopyEmailBtn";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <motion.div
      className="container  text-main  overflow-clip  "
      initial={{ y: -100 }} // Initial position off-screen
      animate={{ y: 0 }} // Final position on-screen
      transition={{ type: "spring", duration: 1 }}
    >
      <h1 className="text-4xl  font-light tracking-tighter text-main leading-[50px] lg:text-[45px] lg:font-semibold ">
        Hey, It's Yoshilyn Fujitani.
        <p className="">Fullstack Designer.</p>
        <p className="">CompSci Student.</p>
      </h1>

      <p className="py-5 text-[14px] text-subtext font-medium lg:mr-72 ">
        Welome to my virtual space. I am a passionate Computer Science student
        specializing in web design and development.
      </p>
      <div className="flex space-x-2">
        <Link to="/Portfolio/contact">
          {" "}
          <h1 className="px-6 py-2 bg-transparent border border-subtext font-medium border-1 rounded-md">
            Contact
          </h1>
        </Link>
        <CopyEmailBtn />
      </div>
    </motion.div>
  );
};

export default Header;
