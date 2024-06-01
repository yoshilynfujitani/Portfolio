import React from "react";

const StackIcons = ({ props }) => {
  const { image, title, subtitle } = props;
  return (
    <div className="transition-all flex items-center space-x-4 rounded-md py-2 px-4 hover:bg-lightModeSecondary dark:hover:bg-Main hover:cursor-pointer">
      <div className="">
        <img src={image} alt="" className="w-8 h-8" />
      </div>
      <div className="flex flex-col ">
        <h1 className="text-main font-semibold">{title}</h1>
        <h1 className="text-subtext">{subtitle}</h1>
      </div>
    </div>
  );
};

export default StackIcons;
