import React from 'react'
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
import { SiAdobexd } from "react-icons/si";

const TechStack = () => {
    const gradienttext = `inline-flex animate-text-gradient bg-gradient-to-r from-[#b2a8fd] via-[#8678f9] to-[#c7d2fe] bg-[200%_auto] bg-clip-text text-lg text-transparent font-semibold lg:text-xl`
    const used = [AiFillGithub, AiFillHtml5, DiCss3, DiJavascript, DiPhp, SiTailwindcss, SiMysql, DiReact, SiExpress, SiMongodb,DiSass,DiNodejsSmall];
    const designused = [SiFigma, SiCanva, SiAdobexd]
    function getHoverColor(componentName) {
        switch (componentName) {
            case "AiFillGithub":
                return "hover:text-slate-50"; // Replace with your desired hover color class
            case "AiFillHtml5":
                return "hover:text-orange-500"; // Replace with your desired hover color class
            case "DiCss3":
                return "hover:text-blue-700"; // Replace with your desired hover color class
            case "SiTailwindcss":
                return "hover:text-sky-400"; // Replace with your desired hover color class
            case "DiJavascript":
                return "hover:text-yellow-300"; // Replace with your desired hover color class
            case "DiPhp":
                return "hover:text-slate-400"; // Replace with your desired hover color class
            case "SiMysql":
                return "hover:text-sky-800";
            case "DiReact":
                return "hover:text-sky-400";
            case "SiExpress":
                return "hover:text-slate-50";
            case "SiMongodb":
                return "hover:text-green-400";
                case "DiSass":
                return "hover:text-pink-400";
                case "DiNodejsSmall":
                return "hover:text-green-900";
                case "SiFigma":
                return "hover:text-";
                case "SiCanva":
                return "hover:text-sky-300";
                case "SiAdobexd":
                return "hover:text-pink-400";

            default:
                return "hover:text-slate-50"; // Replace with a default hover color class   
        }
    }
    return (
        <div className="px-6 my-10 lg:px-0">
            <h1 className={gradienttext}>Development Tools</h1>
            <div className="grid grid-cols-4 place-items-center place-content-center gap-4 py-2 lg:grid-cols-6 ">
                {used.map((item, index) => {
                    const IconComponent = item;
                    const hoverColor = getHoverColor(IconComponent.name); // Assuming you have a function to determine the hover color based on the item's id
                    const iconClass = `transition py-2 cursor-pointer px-4 text-[50px] lg:text-[60px] text-subtext hover:scale-105 ${hoverColor}`;
                    console.log(iconClass)

                    return <span key={index} className={iconClass}><IconComponent /></span>;
                })}
            </div>
            <h1 className={gradienttext}>Design Tools</h1>
            <div className="grid grid-cols-4 place-items-center place-content-center gap-4 py-2 lg:grid-cols-6 ">
                {designused.map((item, index) => {
                    const IconComponent = item;
                    const hoverColor = getHoverColor(IconComponent.name); // Assuming you have a function to determine the hover color based on the item's id
                    const iconClass = `transition py-2 cursor-pointer px-4 text-[50px] lg:text-[60px] text-subtext hover:scale-105 ${hoverColor}`;
                    console.log(iconClass)

                    return <span key={index} className={iconClass}><IconComponent /></span>;
                })}
            </div>
        </div>
    )
}

export default TechStack