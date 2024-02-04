import React, { useState } from "react";
import { motion } from "framer-motion";
import Header from "../Components/Header";
import Featured from "../Components/Featured";
import works from "./Works";
import TechStack from "../Components/TechStack";
import BadgeText from "../Components/BadgeText";
import { Link } from "react-router-dom";
import WorkExperience from "../Components/WorkExperience";

const Home = () => {
  
  return (
    <div className="w-full overflow-clip  bg-secondary py-10 px-5 md:px-[200px] md:py-[80px] 2xl:px-[350px]">
      <Header />

      <div className=" lg:pt-20">
        <h1 className="inline-flex py-5 animate-text-gradient text-main text-2xl font-semibold  px-6 pt-10 lg:px-0 lg:pt-0">
          Featured Works
        </h1>
      </div>
      <motion.div
        className=" grid grid-cols-1 lg:grid-cols-2  mb-5 gap-6 "
        initial={{ y: 100 }} // Initial position off-screen
        animate={{ y: 0 }} // Final position on-screen
        transition={{ type: "spring", duration: 1.5 }}
      >
        {works.map((item) => (
          <Featured {...item} key={item.id} />
        ))}
      </motion.div>
      <WorkExperience />
      {/* <div className="flex justify-center items-center py-10 lg:pl-[320px] lg:py-20 lg:pr-[200px]">
        <Link to="/Portfolio/projects">
          <BadgeText props="View Projects" />
        </Link>
      </div> */}

      <div className="   gap-6 ">
        <TechStack />
      </div>
    </div>
  );
};

export default Home;
