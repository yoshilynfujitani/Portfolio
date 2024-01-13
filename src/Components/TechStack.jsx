import React from "react";

import StackIcons from "./StackIcons";

const TechStack = () => {
  const data = [
    {
      title: "Visual Studio Code",
      subtitle: "Integrated Development Environment",
      image: "/StackIcons/vscode.png",
    },
    {
      title: "JavaScript",
      subtitle: "Programming Language",
      image: "/StackIcons/js.png",
    },
    {
      title: "React Query",
      subtitle: "Data Fetching and State Management Library",
      image: "/StackIcons/rq.svg",
    },
    {
      title: "Vue.js",
      subtitle: "JavaScript Library",
      image: "/StackIcons/vue.svg",
    },
    {
      title: "Laravel",
      subtitle: "PHP Framework",
      image: "/StackIcons/laravel.svg",
    },
    {
      title: "Figma",
      subtitle: "Design Tool",
      image: "/StackIcons/figma.svg",
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

      <div className="text-center bg-Main rounded-md border border-borderColor py-2 text-main font-semibold hover:cursor-pointer">
        View All
      </div>
    </div>
  );
};

export default TechStack;
