import React from "react";
import logommsu from "/logommsu.png";
import glogo from "/glogo.webp";
import csclogo from "/csclogo.png";
import innhslogo from "/innhslogo.png";
import vitlogo from "/vitlogo.png";
import { motion } from "framer-motion";
import AboutMeItems from "../Components/Experience/AboutMeItems";
import TechStack from "../Components/Experience/TechStack";
import WorkExperience from "../Components/Experience/WorkExperience";
import Container from "../Layout/Container";

const About = () => {
  const gradienttext = `inline-flex animate-text-gradient text-main font-semibold py-2  `;
  const date = new Date();
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return (
    <Container>
      <div className="bg-lightModeMain dark:bg-secondary space-y-5  py-10 px-5 md:px-[200px]  2xl:px-[350px]">
        <h1 className="text-3xl font-semibold text-main">About Me</h1>
        <p className="text-subtext ">
          I'm Yoshilyn Fujitani, a computer science student at Mariano Marcos
          State University. I specialize in web design using React and Tailwind
          CSS to create modern user interfaces. My goal is to create impactful
          digital experiences that leave a positive impact on users.
        </p>
        <WorkExperience />
        <div className="border border-borderColorLight dark:border-borderColorDark p-5 rounded-md ">
          <h1 className={gradienttext}>Licenses & Certifications</h1>
          <p className="text-subtext">
            These are certifications I've taken as of{" "}
            {monthNames[date.getMonth()] + " " + date.getFullYear()}
          </p>
          <div className="grid gap-2 lg:gap-4   grid-cols-1 md:grid-cols-2">
            <div className="">
              <AboutMeItems
                image={glogo}
                Course={" Google UX Design Specialization"}
                Year={"2022-Present"}
              />
            </div>
            <div className="">
              <AboutMeItems
                image={csclogo}
                Course={"Civil Service Commision - Professional"}
                Year={"2023-Present"}
              />
            </div>
            <div className="">
              <AboutMeItems
                image={vitlogo}
                Course={
                  "Vellore Institute of Technology - Short Term Course Program"
                }
                Year={"2024-Present"}
              />
            </div>
          </div>
        </div>
        <div className="border border-borderColorLight dark:border-borderColorDark p-5 rounded-md">
          <h1 className={gradienttext}>Education</h1>
          <p className="text-subtext">
            This is my educational background as of{" "}
            {monthNames[date.getMonth()] + " " + date.getFullYear()}
          </p>

          <div className=" grid gap-2 lg:gap-4  grid-cols-1 md:grid-cols-2">
            {/* College */}
            <div className="">
              <AboutMeItems
                image={logommsu}
                Course={"Bachelor of Science in Computer Science"}
                Year={"2021-Present"}
              />
            </div>
            {/* HighSchool */}
            <div className="">
              <AboutMeItems
                image={innhslogo}
                Course={
                  " Ilocos Norte National Highschool - Accountancy and Business Management (ABM) Track"
                }
                Year={"2019-2021"}
              />
              <AboutMeItems
                image={innhslogo}
                Course={
                  "Ilocos Norte National Highschool - Science, Technology and Engineering (STE) Program"
                }
                Year={"2015-2019"}
              />
            </div>
          </div>
        </div>

        <TechStack />
      </div>
    </Container>
  );
};

export default About;
