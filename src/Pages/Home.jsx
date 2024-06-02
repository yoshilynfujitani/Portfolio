import React, { useState } from "react";
import { motion } from "framer-motion";
import Header from "../Components/Header";
import Featured from "../Components/Featured";

import TechStack from "../Components/Experience/TechStack";
import BadgeText from "../Components/BadgeText";
import { Link } from "react-router-dom";
import WorkExperience from "../Components/Experience/WorkExperience";
import Container from "../Layout/Container";
import WorkCarousel from "../Components/WorkCarousel";

const Home = () => {
  return (
    <Container>
      <div className="w-full overflow-clip  bg-lightModeMain dark:bg-secondary py-10 px-5 md:px-[150px] md:py-[80px] 2xl:px-[350px] ease-in duration-300">
        <Header />
        <div className=" ">
          <h1 className="inline-flex pb-5 animate-text-gradient text-main text-xl lg:text-2xl font-semibold    lg:px-0 lg:pt-0">
            Featured Works
          </h1>
        </div>
        <WorkCarousel />

        <div className="my-5 md:my-10">
          {" "}
          <WorkExperience />
          <div className="   gap-6 ">
            <TechStack />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Home;
