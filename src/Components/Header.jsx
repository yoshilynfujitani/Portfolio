import React from "react";
import { motion } from "framer-motion";
import BadgeText from "./BadgeText";
import CopyEmailBtn from "./CopyEmailBtn";
import { Link } from "react-router-dom";

import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io";

const Header = () => {
  return (
    <div
      className="container  text-main   flex  justify-center "
      // initial={{ y: -100 }} // Initial position off-screen
      // animate={{ y: 0 }} // Final position on-screen
      // transition={{ type: "spring", duration: 1 }}
    >
      <div className="flex flex-col items-center justify-center w-fit">
        <p className="self-start text-md text-secondary opacity-80 dark:text-darkModeMainText">
          Hey, my name is,
        </p>
        <h1 className="text-3xl   text-lightModeMainText  dark:text-darkModeMainText leading-[50px] lg:text-4xl lg:font-semibold  ">
          Yoshilyn Pablo Fujitani
        </h1>
        <p className="self-end text-secondary opacity-80 dark:text-darkModeMainText">
          Fullstack Developer.
        </p>

        <div className="flex space-x-2 text-3xl self-end">
          <a
            rel="noreferrer"
            href="https://www.linkedin.com/in/yoshilyn-fujitani-b3ab72232/"
            target="_blank"
          >
            <IoLogoLinkedin />
          </a>
          <a
            rel="noreferrer"
            href="https://github.com/yoshilynfujitani"
            target="_blank"
          >
            <IoLogoGithub />
          </a>

          <CopyEmailBtn />
        </div>
      </div>
    </div>
  );
};

export default Header;
