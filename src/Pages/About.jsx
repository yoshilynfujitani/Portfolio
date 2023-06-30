import React from "react";
import logommsu from "/logommsu.png";
import glogo from "/glogo.webp"
import innhslogo from "/innhslogo.png"
import { motion } from "framer-motion";


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
          <motion.div className="" initial={{ x: -50 }} // Initial position off-screen
            animate={{ x: 0 }} // Final position on-screen
            transition={{ type: 'spring', duration: 1 }}>
            <h1 className="text-white font-semibold">College</h1>
            <div className="px-6 flex items-center py-4 gap-2 bg-Main rounded-md my-2">
              <img src={logommsu} alt="" className="w-12 h-12" />
              <p className="text-white text-md font-semibold flex flex-col">
                Bachelor of Science in Computer Science
                <span className="font-thin text-sm">2021-Present</span>
              </p>
            </div>
          </motion.div>
          {/* HighSchool */}
          <motion.div className="" initial={{ x: -50 }} // Initial position off-screen
            animate={{ x: 0 }} // Final position on-screen
            transition={{ type: 'spring', duration: 1 }}>
            <h1 className="text-white font-semibold">Secondary</h1>
            <div className="px-6 flex items-center py-4 gap-2 bg-Main rounded-md my-2">
              <img src={innhslogo} alt="" className="w-12 h-12" />
              <p className="text-white text-md font-semibold flex flex-col">
                Ilocos Norte National Highschool - Accountancy and Business Management (ABM) Track
                <span className="font-thin text-sm">2019-2021</span>
              </p>
            </div>
          </motion.div>
          <motion.div className="" initial={{ x: -50 }} // Initial position off-screen
            animate={{ x: 0 }} // Final position on-screen
            transition={{ type: 'spring', duration: 1 }}>

            <div className="px-6 flex items-center py-4 gap-2 bg-Main rounded-md my-2">
              <img src={innhslogo} alt="" className="w-12 h-12" />
              <p className="text-white text-md font-semibold flex flex-col">

                Ilocos Norte National Highschool - Science, Technology and Engineering (STE) Program
                <span className="font-thin text-sm">2015-2019</span>
              </p>
            </div>
          </motion.div>

          <h1 className={gradienttext}>Licenses & Certifications</h1>
          <motion.div className="" initial={{ x: -50 }} // Initial position off-screen
            animate={{ x: 0 }} // Final position on-screen
            transition={{ type: 'spring', duration: 1 }}>
            <div className="px-6 flex items-center py-4 gap-2 bg-Main rounded-md my-2">
              <img src={glogo} alt="" className="w-12 h-12" />
              <p className="text-white text-md font-semibold flex flex-col">
                Google UX Design Specializaion
                <span className="font-thin text-sm">2022-Present</span>
              </p>
            </div>
            <p className="">View</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
