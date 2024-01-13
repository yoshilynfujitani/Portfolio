import { useState, useEffect } from "react";
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
import Typewriter from "typewriter-effect";

const Navbar = () => {
  const Menulist = `transition flex items-center text-gray-700 dark:text-subtext hover:bg-gray-200 dark:hover:bg-Background mx-5 py-2 rounded-md dark:hover:text-white gap-1`;
  const [open, setmenu] = useState(true);
  const [isRendered, setIsRendered] = useState(false);

  useEffect(() => {
    setIsRendered(true);
  }, []);
  return (
    <>
      <AnimatePresence>
        {open ? (
          <div
            className="bg-Main py-6 px-6 shadow-md static top-0 w-full z-10 lg:hidden"
            initial={{ x: -300 }} // Initial position off-screen
            animate={{ x: 0 }} // Move back to off-screen when open is false
            transition={{ type: "spring", duration: 0.5 }}
          >
            <div className="container flex justify-between items-center text-white lg:hidden">
              {/* Logo and Name */}
              <div className="flex items-center space-x-2">
                <img src={dp} alt="" className="w-9 h-9 rounded-full" />
                <div className="leading-tight">
                  <h1 className="inline-flex animate-text-gradient bg-gradient-to-r from-[#b2a8fd] via-[#8678f9] to-[#c7d2fe] bg-[200%_auto] bg-clip-text text-md text-transparent">
                    Yoshilyn Fujitani
                  </h1>
                  <div className="text-subtext  text-sm  ">
                    <Typewriter
                      options={{
                        strings: [
                          "UI/UX Designer",
                          "Web Developer",
                          "Tech Enthusiast",
                        ],
                        autoStart: true,
                        loop: true,
                        deleteSpeed: 50,
                        delay: 50,
                      }}
                    />
                  </div>
                </div>
              </div>
              {/* Menu */}
              <div className="">
                <button
                  onClick={() => setmenu((open) => !open)}
                  className="text-[28px] "
                >
                  {
                    <CgMenuGridR className="text-slate-700 dark:text-slate-50" />
                  }
                </button>
              </div>
            </div>
          </div>
        ) : (
          <motion.div
            className=" z-10 lg:hidden"
            key="sidebar"
            initial={{ x: 300 }} // Initial position off-screen
            animate={{ x: 0 }} // Move back to off-screen when open is false
            transition={{ type: "spring", duration: 0.25 }}
            exit={{ x: 300 }}
          >
            <div className="bg-[#1C1C1C] w-64 h-screen fixed top-0 right-0 flex flex-col  items-center shadow-2xl">
              <button
                onClick={() => setmenu((open) => !open)}
                className="text-[28px] self-end py-4 px-9"
              >
                <BiArrowBack className="transition text-white hover:text-subtext" />
              </button>
              {/* Logo and Name */}
              <div className="flex items-center w-full justify-center gap-4">
                <img src={dp} alt="" className="w-9 h-9 rounded-full" />
                <div className="leading-none">
                  <h1 className=" animate-text-gradient bg-gradient-to-r from-[#b2a8fd] via-[#8678f9] to-[#c7d2fe] bg-[200%_auto] bg-clip-text text-lg text-transparent">
                    Yoshilyn Fujitani
                  </h1>
                  <div className="text-subtext  text-sm  ">
                    <Typewriter
                      options={{
                        strings: [
                          "Web Designer",
                          "Web Developer",
                          "Tech Enthusiast",
                        ],
                        autoStart: true,
                        loop: true,
                        deleteSpeed: 50,
                        delay: 50,
                      }}
                    />
                  </div>
                </div>
              </div>
              {/* Menu Options */}
              <div className="py-5 w-full">
                <ul className="flex flex-col float-left px-9 text-white space-y-2 w-full">
                  <Link
                    to="/Portfolio"
                    onClick={() => setmenu((open) => !open)}
                  >
                    <li className={Menulist}>
                      <HiHome />
                      Home
                    </li>
                  </Link>
                  <Link
                    to="/Portfolio/about"
                    onClick={() => setmenu((open) => !open)}
                  >
                    <li className={Menulist}>
                      <HiInformationCircle />
                      About Me
                    </li>
                  </Link>

                  <Link
                    to="/Portfolio/contact"
                    onClick={() => setmenu((open) => !open)}
                  >
                    <li className={Menulist}>
                      <HiGlobeAlt />
                      Contact
                    </li>
                  </Link>
                  <Link
                    to="/Portfolio/projects"
                    onClick={() => setmenu((open) => !open)}
                  >
                    <li className={Menulist}>
                      <HiBriefcase />
                      Projects
                    </li>
                  </Link>
                </ul>
              </div>
              <h1 className="text-sm font-semibold self-start px-9 py-2 text-slate-700 dark:text-white ">
                Follow Me
              </h1>
              <ul className="flex flex-col float-left px-9 text-white space-y-2 w-full">
                <li onClick={() => setmenu((open) => !open)}>
                  <a
                    href="https://www.linkedin.com/in/yoshilyn-fujitani-b3ab72232/"
                    target="_blank"
                    className={Menulist}
                    rel="noreferrer"
                  >
                    <AiFillLinkedin />
                    LinkedIn
                  </a>
                </li>
                <li onClick={() => setmenu((open) => !open)}>
                  <a
                    href="https://github.com/yoshilynfujitani"
                    target="_blank"
                    className={Menulist}
                    rel="noreferrer"
                  >
                    <AiFillGithub />
                    Github
                  </a>
                </li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Desktop */}
      <div className="hidden lg:block">
        <div className="bg-slate-50 dark:bg-[#1C1C1C] w-60  h-screen  fixed top-0 flex flex-col  items-center shadow-xl z-10 border-r border-r-borderColor">
          {/* Logo and Name */}
          <div className="flex  space-x-2 py-6 self-start px-5 ">
            <img src={dp} alt="" className="w-9 h-9 rounded-full" />
            <div className="leading-none">
              <h1 className=" text-white">Yoshilyn Fujitani</h1>
              <div className="text-subtext  text-sm  ">
                {" "}
                <Typewriter
                  options={{
                    strings: [
                      "Web Designer",
                      "Web Developer",
                      "Tech Enthusiast",
                    ],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 50,
                    delay: 50,
                  }}
                />
              </div>
            </div>
          </div>
          {/* Menu Options */}
          <div className="py-5 w-full mx-10 ">
            <ul className="flex flex-col float-left  text-white space-y-2 w-full">
              <Link to="/Portfolio" onClick={() => setmenu((open) => !open)}>
                <li className={Menulist}>
                  <HiHome />
                  Explore
                </li>
              </Link>
              <Link
                to="/Portfolio/about"
                onClick={() => setmenu((open) => !open)}
              >
                <li className={Menulist}>
                  <HiInformationCircle />
                  About Mess
                </li>
              </Link>

              <Link
                to="/Portfolio/contact"
                onClick={() => setmenu((open) => !open)}
              >
                <li className={Menulist}>
                  <HiGlobeAlt />
                  Contact
                </li>
              </Link>
              <Link
                to="/Portfolio/projects"
                onClick={() => setmenu((open) => !open)}
              >
                <li className={Menulist}>
                  <HiBriefcase />
                  Projects
                </li>
              </Link>
            </ul>
          </div>
          <>
            <h1 className="text-sm font-semibold self-start px-5 py-2 text-slate-700 dark:text-white ">
              Follow Me
            </h1>
            <ul className="flex flex-col float-left  text-white space-y-2 w-full">
              <li onClick={() => setmenu((open) => !open)}>
                <a
                  href="https://www.linkedin.com/in/yoshilyn-fujitani-b3ab72232/"
                  target="_blank"
                  className={Menulist}
                  rel="noreferrer"
                >
                  <AiFillLinkedin />
                  LinkedIn
                </a>
              </li>
              <li onClick={() => setmenu((open) => !open)}>
                <a
                  href="https://github.com/yoshilynfujitani"
                  target="_blank"
                  className={Menulist}
                  rel="noreferrer"
                >
                  <AiFillGithub />
                  Github
                </a>
              </li>
            </ul>
          </>
        </div>
      </div>
    </>
  );
};

export default Navbar;
