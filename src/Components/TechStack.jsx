import React from "react";
import vscode from "/StackIcons/vscode.png";
import js from "/StackIcons/js.png";
import rq from "/StackIcons/rq.svg";
import vue from "/StackIcons/vue.svg";
import laravel from "/StackIcons/laravel.svg";
import figma from "/StackIcons/figma.svg";

import StackIcons from "./StackIcons";
import { Link } from "react-router-dom";

const TechStack = () => {
  const data = [
    {
      title: "Visual Studio Code",
      subtitle: "Integrated Development Environment",
      image: vscode,
    },
    {
      title: "JavaScript",
      subtitle: "Programming Language",
      image: js,
    },
    {
      title: "React Query",
      subtitle: "Data Fetching and State Management Library",
      image: rq,
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
      title: "Figma",
      subtitle: "Design Tool",
      image: figma,
    },
  ];
  return (
    <div className="border rounded-md border-borderColor p-5 my-5">
      <h1 className="font-semibold text-main">Stack</h1>
      <h1 className="text-subtext">
        Software and resources I use on a regular basis
      </h1>

      <div className="my-5 grid grid-cols-1 lg:grid-cols-2 gap-x-1">
        {data.map((icon, index) => (
          <StackIcons props={icon} key={index} />
        ))}
      </div>
      <Link to="/Portfolio/stack">
        <div className="text-center bg-Main rounded-md border border-borderColor py-2 text-main font-semibold hover:cursor-pointer">
          View All
        </div>
      </Link>
    </div>
  );
};

export default TechStack;
