import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { DiJavascript } from "react-icons/di";
import { DiPhp } from "react-icons/di";
import { DiReact } from "react-icons/di";
import { DiSass } from "react-icons/di";
import { DiNodejsSmall } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiFigma } from "react-icons/si";
import { SiCanva } from "react-icons/si";
import { TbBrandRedux } from "react-icons/tb";
import { SiAdobexd } from "react-icons/si";
import { DiPython } from "react-icons/di";

const TechStack = () => {
  const gradienttext = `inline-flex animate-text-gradient bg-gradient-to-r from-[#b2a8fd] via-[#8678f9] to-[#c7d2fe] bg-[200%_auto] bg-clip-text text-lg text-transparent font-semibold lg:text-xl`;
  const used = [
    AiFillGithub,
    AiFillHtml5,
    DiCss3,
    DiJavascript,
    SiTailwindcss,
    DiSass,
    DiPhp,
    SiMysql,
    DiReact,
    TbBrandRedux,
    DiPython,
  ];
  const designused = [SiFigma, SiAdobexd];

  return (
    <div className="px-6 my-10 lg:px-0">
      <h1 className={gradienttext}>Development Tools</h1>
      <div className="grid grid-cols-4 place-items-center place-content-center gap-4 py-2 lg:grid-cols-6 ">
        {used.map((item, index) => {
          const IconComponent = item;

          const iconClass = `transition py-2 cursor-pointer px-4 text-[50px] lg:text-[60px] text-gray-600 hover:text-gray-800 dark:text-subtext hover:scale-105 dark:hover:text-slate-50`;

          return (
            <span key={index} className={iconClass}>
              <IconComponent />
            </span>
          );
        })}
      </div>
      <h1 className={gradienttext}>Design Tools</h1>
      <div className="grid grid-cols-4 place-items-center place-content-center gap-4 py-2 lg:grid-cols-6 ">
        {designused.map((item, index) => {
          const IconComponent = item;

          const iconClass = `transition py-2 cursor-pointer px-4 text-[50px] lg:text-[60px] text-gray-600  hover:text-gray-800 dark:text-subtext hover:scale-105 dark:hover:text-slate-50`;

          return (
            <span key={index} className={iconClass}>
              <IconComponent />
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default TechStack;
