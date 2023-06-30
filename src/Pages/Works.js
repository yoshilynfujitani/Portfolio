import { AiFillGithub } from "react-icons/ai";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { DiJavascript } from "react-icons/di";
import { DiPhp } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { DiReact } from "react-icons/di";
import Habiya from "/Habiya.png"
import Weather from "/Weather.png"
import Pokedex from "/Pokedex.png"
import Worldwise from "/Worldwise.png"

const works = [
  {
    id: 1,
    title: "Habiya",
    desc: "An Ilocano E-Commerce Project",
    img: Habiya,
    stack: [AiFillGithub, AiFillHtml5, DiCss3, SiTailwindcss, DiJavascript, DiPhp, SiMysql],
    purpose: "CmpSc 117 Project",
  },
  {
    id: 4,
    title: "Worldwise",
    desc: "API integrated project",
    img: Worldwise,
    stack: [AiFillGithub, AiFillHtml5, DiCss3, DiJavascript, DiReact],
    purpose: "A course of Jonas Schertmad",
  },
  {
    id: 2,
    title: "Weather App",
    desc: "API integrated project",
    img: Weather,
    stack: [AiFillGithub, AiFillHtml5, DiCss3, SiTailwindcss, DiJavascript, DiReact],
    purpose: "Learning",
  },
  {
    id: 3,
    title: "Pokedex",
    desc: "API integrated project",
    img: Pokedex,
    stack: [AiFillGithub, AiFillHtml5, DiCss3, SiTailwindcss, DiJavascript, DiReact],
    purpose: "Learning",
  },

];

export default works;
