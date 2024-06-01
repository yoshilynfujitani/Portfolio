import React, { useState } from "react";
import { motion } from "framer-motion";
import Header from "../Components/Header";
import Featured from "../Components/Featured";
import works from "./Works";
import TechStack from "../Components/Experience/TechStack";
import BadgeText from "../Components/BadgeText";
import { Link } from "react-router-dom";
import WorkExperience from "../Components/Experience/WorkExperience";
import Container from "../Layout/Container";

const Home = () => {
  return (
    <Container>
      <div className="w-full overflow-clip  bg-lightModeMain dark:bg-secondary py-10 px-5 md:px-[150px] md:py-[80px] 2xl:px-[350px] ease-in duration-300">
        <Header />
        {/* <section className="pt-16">
          <h1 className="text-xl font-semibold">/about me</h1>
          <p>
            I'm a Fullstack Developer, based in the Philippines, specializing in
            building exceptionally digital experiences. Currently I'm focused on
            building responsive frontend web applications.
          </p>
        </section> */}
        <div className="my-5 md:my-16">
          {" "}
          <WorkExperience />
          <div className="   gap-6 ">
            <TechStack />
          </div>
        </div>

        <div className=" ">
          <h1 className="inline-flex pb-5 animate-text-gradient text-main text-2xl font-semibold    lg:px-0 lg:pt-0">
            Featured Works
          </h1>
        </div>
        <div
          className=" grid grid-cols-1 lg:grid-cols-2  mb-5 gap-6 "
          // initial={{ y: 100 }} // Initial position off-screen
          // animate={{ y: 0 }} // Final position on-screen
          // transition={{ type: "spring", duration: 1.5 }}
        >
          {works.map((item) => (
            <Featured {...item} key={item.id} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Home;
