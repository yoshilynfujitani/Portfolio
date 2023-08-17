import { AiFillGithub } from "react-icons/ai";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { DiJavascript } from "react-icons/di";
import { DiPhp } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { DiNodejsSmall } from "react-icons/di";
import { DiReact } from "react-icons/di";
import Habiya from "/Habiya.png";
import Weather from "/Weather.png";
import Worldwise from "/Worldwise.png";
import TodoAppV2 from "/TodoAppV2.png";
import BlogStack from "/BlogStack.png";

const works = [
  {
    id: 1,
    title: "Habiya",
    desc: "An Ilocano E-Commerce Project",
    img: Habiya,
    stack: [
      AiFillGithub,
      AiFillHtml5,
      DiCss3,
      SiTailwindcss,
      DiJavascript,
      DiPhp,
      SiMysql,
    ],
    purpose: "CmpSc 117 Project",
    link: "https://github.com/yoshilynfujitani/E-Commerce-Sample-PHP",
  },
  {
    id: 4,
    title: "BlogStack",
    desc: "A Blog Website",
    img: BlogStack,
    stack: [
      AiFillGithub,
      AiFillHtml5,
      DiCss3,
      SiTailwindcss,
      DiJavascript,
      DiReact,
      DiNodejsSmall,
      SiExpress,
      SiMysql,
    ],
    purpose: "Fullstack Project",
    link: "https://github.com/yoshilynfujitani/BlogStack",
  },

  {
    id: 2,
    title: "Weather App",
    desc: "API integrated project",
    img: Weather,
    stack: [
      AiFillGithub,
      AiFillHtml5,
      DiCss3,
      SiTailwindcss,
      DiJavascript,
      DiReact,
    ],
    purpose: "Learning",
    link: "https://github.com/yoshilynfujitani/Weather-App",
  },
  {
    id: 3,
    title: "ToDoApp V2.0",
    desc: "A Task Monitoring Website",
    img: TodoAppV2,
    stack: [
      AiFillGithub,
      AiFillHtml5,
      DiCss3,
      SiTailwindcss,
      DiJavascript,
      DiReact,
    ],
    purpose: "Learning",
    link: "https://github.com/yoshilynfujitani/TodoAppV2",
  },
];

export default works;
