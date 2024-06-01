import React from "react";
import AboutMeItems from "./AboutMeItems";
import logommsu from "/logommsu.png";

const WorkExperience = () => {
  return (
    <div className="border border-borderColorLight dark:border-borderColorDark p-5 rounded-md">
      <h1 className="text-main font-semibold">Work Experience</h1>
      <div className=" grid gap-1 lg:gap-4  grid-cols-1 md:grid-cols-2">
        {/* College */}
        <div
          className=""
          // initial={{ x: -50 }} // Initial position off-screen
          // animate={{ x: 0 }} // Final position on-screen
          // transition={{ type: "spring", duration: 1 }}
        >
          <AboutMeItems
            image={logommsu}
            Course={"Student Assistant - Programmer"}
            Year={"2023-Present"}
          />
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
