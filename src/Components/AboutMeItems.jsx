import React from "react";

const AboutMeItems = ({ image, Course, Year }) => {
  return (
    <>
      <div className="transition-all px-4 flex items-center min-h-[100px] py-2 gap-2  rounded-md  hover:bg-Main hover:cursor-pointer">
        <img src={image} alt="" className="w-8 h-8" />
        <p className="text-main leading-0 text-md font-semibold flex flex-col">
          {Course}
          <span className="font-normal text-subtext">{Year}</span>
        </p>
      </div>
    </>
  );
};

export default AboutMeItems;
