import { motion } from "framer-motion";

import Featured from "../Components/Featured";

import AllWorks from "./AllWorks";
import Container from "../Layout/Container";

const Projects = () => {
  return (
    <Container>
      <div className="bg-lightModeMain dark:bg-secondary py-10 px-5 md:px-[200px] md:py-[80px] 2xl:px-[350px]">
        <h1 className="text-main font-semibold text-2xl">Projects</h1>
        <div className="container gap-4 grid grid-cols-1 lg:grid-cols-3 lg:gap-6 ">
          {AllWorks.map((item) => (
            <Featured {...item} key={item.id} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Projects;
