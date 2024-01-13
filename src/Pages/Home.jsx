import React, { useState } from "react";
import { motion } from "framer-motion";
import Header from "../Components/Header";
import Featured from "../Components/Featured";
import works from "./Works";
import TechStack from "../Components/TechStack";
import BadgeText from "../Components/BadgeText";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className=" min-h-screen w-screen overflow-clip  bg-secondary py-10 px-5 lg:py-[100px]">
      <Header />

      <div className="container px-[450px] lg:pt-20">
        <h1 className="inline-flex py-5 animate-text-gradient text-main text-2xl font-semibold  px-6 pt-10 lg:px-0 lg:pt-0">
          Featured Works
        </h1>
      </div>
      <motion.div
        className="container grid grid-cols-1 lg:grid-cols-2 lg:px-[450px] gap-6 lg:pr-[225px]"
        initial={{ y: 100 }} // Initial position off-screen
        animate={{ y: 0 }} // Final position on-screen
        transition={{ type: "spring", duration: 1.5 }}
      >
        {works.map((item) => (
          <Featured {...item} key={item.id} />
        ))}
      </motion.div>
      {/* <div className="flex justify-center items-center py-10 lg:pl-[320px] lg:py-20 lg:pr-[200px]">
        <Link to="/Portfolio/projects">
          <BadgeText props="View Projects" />
        </Link>
      </div> */}

      <div className="container  lg:px-[450px] gap-6 lg:pr-[225px]">
        <TechStack />
      </div>
    </div>
  );
};

export default Home;
