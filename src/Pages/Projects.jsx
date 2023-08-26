import { motion } from "framer-motion";

import Featured from "../Components/Featured";

import AllWorks from "./AllWorks";

const Projects = () => {
  const gradienttext = `py-5 md:py-10 inline-flex animate-text-gradient bg-gradient-to-r from-[#b2a8fd] via-[#8678f9] to-[#c7d2fe] bg-[200%_auto] bg-clip-text text-xl text-transparent font-semibold lg:text-2xl `;

  return (
    <div className="px-6 bg-slate-50 dark:bg-gradient-to-b from-[#110e11] to-[#030009] py-10 lg:pl-[340px]">
      <h1 className={gradienttext}>Projects</h1>
      <motion.div
        className="container gap-4 grid grid-cols-1 lg:grid-cols-2 lg:gap-6 lg:pr-[200px]"
        initial={{ y: 100 }} // Initial position off-screen
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
