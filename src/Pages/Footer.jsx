import React from "react";

const Footer = () => {
  var dt = new Date();
  const year = dt.getFullYear();
  return (
    <div className="bg-slate-100 dark:bg-Main py-10 lg:pl-[340px]">
      <div className="container flex flex-col justify-center items-center text-slate-700 dark:text-slate-100 text-sm space-y-2 lg:flex-row lg:space-x-4 lg:items-end lg:pr-[200px]">
        <h1>
          Proudly built by <span className="text-subtext">Yoshi</span>
        </h1>
        <h1>
          Made by <span className="text-subtext">Yoshilyn Fujitani</span>
        </h1>
        <h1>©{year}</h1>
      </div>
    </div>
  );
};

export default Footer;
