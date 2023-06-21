import React from "react";
import logommsu from "/logommsu.png";
import glogo from "/glogo.webp"

const About = () => {
  const gradienttext = `inline-flex animate-text-gradient bg-gradient-to-r from-[#b2a8fd] via-[#8678f9] to-[#c7d2fe] bg-[200%_auto] bg-clip-text text-xl text-transparent font-semibold lg:text-2xl `;
  return (
    <div className="min-h-screen bg-Background px-6 py-10">
      <div className="container">
        <div className="lg:pl-[320px] lg:pr-[200px] lg:pt-20">
          <h1 className={gradienttext}>About Me</h1>
          <p className="text-white py-5">
            I'm Yoshilyn Fujitani, a third-year computer science student at Mariano Marcos State University. I specialize in web design using React and Tailwind CSS to create modern user interfaces. My goal is to create impactful digital experiences that leave a positive impact on users.
          </p>
          <h1 className={gradienttext}>Education</h1>


          {/* College */}
          <div className="">
            <h1 className="text-white font-semibold">College</h1>
            <div className="px-6 flex items-center py-5 gap-1">
              <img src={logommsu} alt="" className="w-12 h-12" />
              <p className="text-white text-lg font-semibold flex flex-col">
                Bachelor of Science in Computer Science
                <span className="font-thin text-sm">2021-Present</span>
              </p>
            </div>
          </div>

          <h1 className={gradienttext}>Licenses & Certifications</h1>
          <div className="px-6 flex items-center py-5 gap-1">
            <img src={glogo} alt="" className="w-12 h-12" />
            <p className="text-white text-lg font-semibold flex flex-col">
              Google UX Design Specializaion
              <span className="font-thin text-sm">2022-Present</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
