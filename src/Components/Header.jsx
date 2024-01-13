import React from "react";
import { motion } from "framer-motion";
import BadgeText from "./BadgeText";
import CopyEmailBtn from "./CopyEmailBtn";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <motion.div
      className="container  text-black dark:text-slate-50 overflow-clip lg:px-[450px]   lg:pr-[200px] "
      initial={{ y: -100 }} // Initial position off-screen
      animate={{ y: 0 }} // Final position on-screen
      transition={{ type: "spring", duration: 1 }}
    >
      <h1 className="text-4xl font-bold tracking-tight text-black dark:text-main leading-[50px] lg:text-[45px] lg:font-bold">
        Hey, It's Yoshilyn Fujitani <br />
        {/* <Typewriter
          options={{
            strings: [
              `I am a <span class="${gradienttext}"> Frontend </span> Developer`,
              `I <span class="${gradienttext}"> create </span> and  <span class="${gradienttext}"> develop </span> websites`,
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 50,
            delay: 50,
          }}
        /> */}
        <p className="">Fullstack Designer</p>
      </h1>

      <p className="py-5 text-subtext font-medium lg:mr-80 ">
        Welome to my virtual home! I am a passionate Computer Science student
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
