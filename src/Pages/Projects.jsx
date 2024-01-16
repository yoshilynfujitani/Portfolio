import { motion } from "framer-motion";

import Featured from "../Components/Featured";

import AllWorks from "./AllWorks";

const Projects = () => {
  return (
    <div className="bg-secondary py-10 px-5 md:px-[200px] md:py-[80px] 2xl:px-[350px]">
      <h1 className="text-main font-semibold">Projects</h1>
      <motion.div
        className="container gap-4 grid grid-cols-1 lg:grid-cols-2 lg:gap-6 "
        animate={{ y: 0 }} // Final position on-screen
        transition={{ type: "spring", duration: 1.5 }}
      >
        {AllWorks.map((item) => (
          <Featured {...item} key={item.id} />
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;
