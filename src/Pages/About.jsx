import React from "react";
import logommsu from "/logommsu.png";
import glogo from "/glogo.webp"
import innhslogo from "/innhslogo.png"
import { motion } from "framer-motion";
import AboutMeItems from "../Components/AboutMeItems";


const About = () => {
  const gradienttext = `inline-flex animate-text-gradient bg-gradient-to-r from-[#b2a8fd] via-[#8678f9] to-[#c7d2fe] bg-[200%_auto] bg-clip-text text-2xl text-transparent font-semibold py-2 lg:text-4xl `;
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-Background px-6 py-10">
      <div className="container">
        <div className="lg:pl-[320px] lg:pr-[200px] lg:pt-20">
          <h1 className={gradienttext}>About Me</h1>
          <p className="text-gray-700 dark:text-white py-5">
            I'm Yoshilyn Fujitani, a third-year computer science student at Mariano Marcos State University. I specialize in web design using React and Tailwind CSS to create modern user interfaces. My goal is to create impactful digital experiences that leave a positive impact on users.
          </p>
          <h1 className={gradienttext}>Education</h1>


          {/* College */}
          <motion.div className="" initial={{ x: -50 }} // Initial position off-screen
            animate={{ x: 0 }} // Final position on-screen
            transition={{ type: 'spring', duration: 1 }}>
            <h1 className="text-white font-semibold">College</h1>
            <AboutMeItems image={logommsu} Course={"Bachelor of Science in Computer Science"} Year={"2021-Present"} />
          </motion.div>
          {/* HighSchool */}
          <motion.div className="" initial={{ x: -50 }} // Initial position off-screen
            animate={{ x: 0 }} // Final position on-screen
            transition={{ type: 'spring', duration: 1 }}>
            <h1 className="text-white font-semibold">Secondary</h1>
            <AboutMeItems image={innhslogo} Course={" Ilocos Norte National Highschool - Accountancy and Business Management (ABM) Track"} Year={"2019-2021"} />
            <AboutMeItems image={innhslogo} Course={"Ilocos Norte National Highschool - Science, Technology and Engineering (STE) Program"} Year={"2015-2019"} />
          </motion.div>

          <h1 className={gradienttext}>Licenses & Certifications</h1>
          <motion.div className="" initial={{ x: -50 }} // Initial position off-screen
            animate={{ x: 0 }} // Final position on-screen
            transition={{ type: 'spring', duration: 1 }}>
            <AboutMeItems image={glogo} Course={" Google UX Design Specialization"} Year={"2022-Present"} />
            <p className="">View</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
