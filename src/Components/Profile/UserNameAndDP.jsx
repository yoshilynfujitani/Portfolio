import React from "react";
import { MY_IMAGES } from "../../Constants/Images/MyImages";
import Typewriter from "typewriter-effect";

const UserNameAndDP = () => {
  return (
    <div className="flex items-center space-x-2.5">
      <img
        src={MY_IMAGES.displayPicture.src}
        className="w-10 h-10 rounded-full"
      />
      <div className="">
        {" "}
        <h1 className="">Yoshilyn Fujitani</h1>
        <span className=" text-xs opacity-60 text-lightModeMainText dark:text-darkModeMainText">
          <Typewriter
            options={{
              strings: ["Web Developer", "Web Designer", "UI/UX Developer"],
              autoStart: true,
              loop: true,
            }}
          />
        </span>
      </div>
    </div>
  );
};

export default UserNameAndDP;
