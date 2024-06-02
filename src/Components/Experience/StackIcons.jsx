import React from "react";
import Container from "../../Layout/Container";

const StackIcons = ({ props }) => {
  const { image, title, subtitle } = props;
  return (
    <div className="transition-all flex items-center space-x-4 rounded-md py-2 px-4 hover:bg-lightModeSecondary dark:hover:bg-Main hover:cursor-pointer">
      <div className="">
        <img src={image} alt="" className="w-10 h-10 object-contain" />
      </div>
      <div className="flex flex-col ">
        <h1 className="text-main font-semibold">{title}</h1>
        <h1 className="text-subtext">{subtitle}</h1>
      </div>
    </div>
  );
};

export default StackIcons;
