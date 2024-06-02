import React from "react";
import StackIcons from "../Components/Experience/StackIcons";
import { Link } from "react-router-dom";
import vscode from "/StackIcons/vscode.png";
import js from "/StackIcons/js.png";
import ts from "/StackIcons/ts.png";
import rq from "/StackIcons/rq.svg";
import vue from "/StackIcons/vue.svg";
import react from "/StackIcons/react.svg";
import laravel from "/StackIcons/laravel.svg";
import figma from "/StackIcons/figma.svg";
import tw from "/StackIcons/tw.svg";
import sass from "/StackIcons/sass.svg";
import redux from "/StackIcons/redux.svg";
import mysql from "/StackIcons/mysql.svg";
import csharp from "/StackIcons/csharp.svg";
import sb from "/StackIcons/supabase.png";
import canva from "/StackIcons/canva.webp";
import Container from "../Layout/Container";
import appwrite from "/StackIcons/appwrite.png";
import pinia from "/StackIcons/pinia.png";

const Stacks = () => {
  const Development = [
    {
      title: "Visual Studio Code",
      subtitle: "Integrated Development Environment",
      image: vscode,
    },
    {
      title: "React.js",
      subtitle: "JavaScript Library",
      image: react,
    },
    {
      title: "JavaScript",
      subtitle: "Programming Language",
      image: js,
    },

    {
      title: "TypeScript",
      subtitle: "JavaScript Superset",
      image: ts,
    },
    {
      title: "Tanstack Query",
      subtitle: "Data Fetching and State Management Library",
      image: rq,
    },
    {
      title: "Pinia",
      subtitle: "Client Side State Management Library",
      image: pinia,
    },
    {
      title: "Vue.js",
      subtitle: "JavaScript Library",
      image: vue,
    },
    {
      title: "Laravel",
      subtitle: "PHP Framework",
      image: laravel,
    },
    {
      title: "Tailwind CSS",
      subtitle: "CSS Framework",
      image: tw,
    },
    // {
    //   title: "Redux Toolkit",
    //   subtitle: "State Management Library",
    //   image: redux,
    // },
    {
      title: "SASS(Syntactically Awesome Stylesheet)",
      subtitle: "CSS Extension",
      image: sass,
    },
    {
      title: "MySQL",
      subtitle: "Database",
      image: mysql,
    },
    {
      title: "Supabase",
      subtitle: "Open-source Firebase alternative database",
      image: sb,
    },
    {
      title: "Appwrite",
      subtitle: "Open-source Firebase alternative database",
      image: appwrite,
    },
    // {
    //   title: "C#",
    //   subtitle: "Programming Language",
    //   image: csharp,
    // },
  ];
  const design = [
    {
      title: "Figma",
      subtitle: "Design Tool",
      image: figma,
    },
    {
      title: "Canva",
      subtitle: "Design Tool",
      image: canva,
    },
  ];

  return (
    <Container>
      <div className="bg-lightModeMain dark:bg-secondary py-10 px-5 md:px-[200px]  2xl:px-[350px] min-h-screen">
        <h1 className="font-semibold text-main text-2xl">Stack</h1>
        <h1 className="text-subtext">Softwares and Libraries I use at work</h1>
        <div className="border rounded-md  border-borderColorLight dark:border-borderColorDark p-5 my-5">
          <h1 className="font-semibold text-main">Development</h1>

          <div className="my-5 grid grid-cols-1 lg:grid-cols-2 gap-x-1">
            {Development.map((icon, index) => (
              <StackIcons props={icon} key={index} />
            ))}
          </div>
        </div>

        <div className="border rounded-md border-borderColorLight dark:border-borderColorDark p-5 my-5">
          <h1 className="font-semibold text-main">Design</h1>

          <div className="my-5 grid grid-cols-1 lg:grid-cols-2 gap-x-1">
            {design.map((icon, index) => (
              <StackIcons props={icon} key={index} />
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Stacks;
