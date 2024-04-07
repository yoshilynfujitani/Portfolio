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
  const Menulist = `transition flex items-center justify-between text-[14px] font-medium text-subtext  mx-5 py-2 rounded-md hover:text-white gap-2 `;
  const [open, setmenu] = useState(true);
  const [isRendered, setIsRendered] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    setIsRendered(true);
  }, []);
  return (
    <>
      <AnimatePresence>
        {open ? (
          <div
            className="bg-secondary py-6 px-6 shadow-md font- static top-0 w-full z-10 lg:hidden"
            initial={{ x: -300 }} // Initial position off-screen
            animate={{ x: 0 }} // Move back to off-screen when open is false
            transition={{ type: "spring", duration: 0.5 }}
          >
            <div className=" flex justify-between items-center text-white lg:hidden">
              {/* Logo and Name */}
              <div className="flex items-center space-x-2">
                <img src={dp} alt="" className="w-9 h-9 rounded-full" />
                <div className="leading-tight">
                  <h1 className="inline-flex animate-text-gradient text-main">
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
          <div>
            <div className="bg-Main opacity-70 w-screen h-screen fixed lg:hidden "></div>{" "}
            <motion.div
              className="z-10 lg:hidden w-screen  "
              key="sidebar"
              initial={{ x: 400 }} // Initial position off-screen
              animate={{ x: 0 }} // Move back to off-screen when open is false
              transition={{ type: "spring", duration: 0.25 }}
              exit={{ x: 400 }}
            >
              <div className="bg-secondary w-64 h-screen fixed top-0 right-0 flex flex-col  items-center shadow-2xl">
                <button
                  onClick={() => setmenu((open) => !open)}
                  className="text-[28px] self-end py-4 px-9"
                >
                  <BiArrowBack className="transition text-white hover:text-subtext" />
                </button>
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
                    <Link
                      to="/Portfolio"
                      onClick={() => setmenu((open) => !open)}
                    >
                      <li className={Menulist}>
                        <div className="flex items-center gap-2">
                          <HiHome />
                          Explore
                        </div>
                        <div className="px-2 rounded-md border border-subtext">
                          1
                        </div>
                      </li>
                    </Link>
                    <Link
                      to="/Portfolio/about"
                      onClick={() => setmenu((open) => !open)}
                    >
                      <li className={Menulist}>
                        <div className="flex items-center gap-2">
                          <HiInformationCircle />
                          About
                        </div>
                        <div className="px-2 rounded-md border border-subtext">
                          2
                        </div>
                      </li>
                    </Link>

                    <Link
                      to="/Portfolio/projects"
                      onClick={() => setmenu((open) => !open)}
                    >
                      <li className={Menulist}>
                        <div className="flex items-center gap-2">
                          <HiBriefcase />
                          Work
                        </div>
                        <div className="px-2 rounded-md border border-subtext">
                          3
                        </div>
                      </li>
                    </Link>
                  </ul>
                </div>
                <>
                  <h1 className="text-xs font-medium self-start px-5 py-2 text-subtext  ">
                    Resources
                  </h1>
                  <ul className="flex flex-col float-left  text-white space-y-2 w-full">
                    <Link
                      to="/Portfolio/stack"
                      onClick={() => setmenu((open) => !open)}
                    >
                      <li className={Menulist}>
                        <div className="flex items-center gap-2">
                          <HiGlobeAlt />
                          Stack
                        </div>
                        <div className="px-2 rounded-md border border-subtext">
                          4
                        </div>
                      </li>
                    </Link>
                  </ul>
                </>
                <>
                  <h1 className="text-xs font-medium self-start px-5 py-2 text-subtext  ">
                    Connect
                  </h1>
                  <ul className="flex flex-col float-left  text-white space-y-2 w-full">
                    <Link
                      to="/Portfolio/contact"
                      onClick={() => setmenu((open) => !open)}
                    >
                      <li className={Menulist}>
                        <div className="flex items-center gap-2">
                          <HiGlobeAlt />
                          Contact
                        </div>
                        <div className="px-2 rounded-md border border-subtext">
                          5
                        </div>
                      </li>
                    </Link>
                    <li onClick={() => setmenu((open) => !open)}>
                      <a
                        href="https://www.linkedin.com/in/yoshilyn-fujitani-b3ab72232/"
                        target="_blank"
                        className={Menulist}
                        rel="noreferrer"
                      >
                        <div className="flex items-center gap-2">
                          <AiFillLinkedin />
                          LinkedIn
                        </div>
                        <div className="px-2 rounded-md border border-subtext">
                          6
                        </div>
                      </a>
                    </li>
                    <li onClick={() => setmenu((open) => !open)}>
                      <a
                        href="https://github.com/yoshilynfujitani"
                        target="_blank"
                        className={Menulist}
                        rel="noreferrer"
                      >
                        <div className="flex items-center gap-2">
                          <AiFillGithub />
                          Github
                        </div>
                        <div className="px-2 rounded-md border border-subtext">
                          7
                        </div>
                      </a>
                    </li>
                  </ul>
                </>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      {/* Desktop */}
      <div className="hidden lg:block">
        <div className="bg-[#1C1C1C] w-60  h-screen  fixed top-0 flex flex-col  items-center shadow-xl z-10 border-r border-r-borderColor">
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
                  <div className="flex items-center gap-2">
                    <HiHome />
                    Explore
                  </div>
                  <div className="px-2 rounded-md border border-subtext">1</div>
                </li>
              </Link>
              <Link
                to="/Portfolio/about"
                onClick={() => setmenu((open) => !open)}
              >
                <li className={Menulist}>
                  <div className="flex items-center gap-2">
                    <HiInformationCircle />
                    About
                  </div>
                  <div className="px-2 rounded-md border border-subtext">2</div>
                </li>
              </Link>

              <Link
                to="/Portfolio/projects"
                onClick={() => setmenu((open) => !open)}
              >
                <li className={Menulist}>
                  <div className="flex items-center gap-2">
                    <HiBriefcase />
                    Work
                  </div>
                  <div className="px-2 rounded-md border border-subtext">3</div>
                </li>
              </Link>
            </ul>
          </div>
          <>
            <h1 className="text-xs font-medium self-start px-5 py-2 text-subtext  ">
              Resources
            </h1>
            <ul className="flex flex-col float-left  text-white space-y-2 w-full">
              <Link
                to="/Portfolio/stack"
                onClick={() => setmenu((open) => !open)}
              >
                <li className={Menulist}>
                  <div className="flex items-center gap-2">
                    <HiGlobeAlt />
                    Stack
                  </div>
                  <div className="px-2 rounded-md border border-subtext">4</div>
                </li>
              </Link>
            </ul>
          </>
          <>
            <h1 className="text-xs font-medium self-start px-5 py-2 text-subtext  ">
              Connect
            </h1>
            <ul className="flex flex-col float-left  text-white space-y-2 w-full">
              <Link
                to="/Portfolio/contact"
                onClick={() => setmenu((open) => !open)}
              >
                <li className={Menulist}>
                  <div className="flex items-center gap-2">
                    <HiGlobeAlt />
                    Contact
                  </div>
                  <div className="px-2 rounded-md border border-subtext">5</div>
                </li>
              </Link>
              <li onClick={() => setmenu((open) => !open)}>
                <a
                  href="https://www.linkedin.com/in/yoshilyn-fujitani-b3ab72232/"
                  target="_blank"
                  className={Menulist}
                  rel="noreferrer"
                >
                  <div className="flex items-center gap-2">
                    <AiFillLinkedin />
                    LinkedIn
                  </div>
                  <div className="px-2 rounded-md border border-subtext">6</div>
                </a>
              </li>
              <li onClick={() => setmenu((open) => !open)}>
                <a
                  href="https://github.com/yoshilynfujitani"
                  target="_blank"
                  className={Menulist}
                  rel="noreferrer"
                >
                  <div className="flex items-center gap-2">
                    <AiFillGithub />
                    Github
                  </div>
                  <div className="px-2 rounded-md border border-subtext">7</div>
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
