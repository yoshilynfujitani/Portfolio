import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Header from '../Components/Header'
import Featured from '../Components/Featured'
import works from './Works'
import TechStack from '../Components/TechStack'
import BadgeText from '../Components/BadgeText'
import { Link } from 'react-router-dom'



const Home = () => {


  const [mode, setMode] = useState("Dark")

  const toggleMode = () => {
    setDarkMode((mode) => !mode);
  };
  return (
    <div className=" min-h-screen w-screen overflow-clip dark:bg-Background">


      <Header />
      <div className="container lg:pl-[320px] lg:pr-[200px] lg:pt-20">
        <h1 className='inline-flex animate-text-gradient bg-gradient-to-r from-[#b2a8fd] via-[#8678f9] to-[#c7d2fe] bg-[200%_auto] bg-clip-text text-2xl font-semibold text-transparent px-6 pt-10 lg:px-0 lg:pt-0'>Featured Works</h1>
      </div>
      <motion.div className="container px-6 grid grid-cols-1 lg:grid-cols-2 lg:pl-[320px] gap-6 lg:pr-[200px]" initial={{ y: 100 }} // Initial position off-screen
        animate={{ y: 0 }} // Final position on-screen
        transition={{ type: 'spring', duration: 1.5 }}>
        {works.map((item) => (
          <Featured {...item} key={item.id} />
        ))}
      </motion.div>
      <div className="flex justify-center items-center py-10 lg:pl-[320px] lg:py-20 lg:pr-[200px]">
        <Link to="/Portfolio/projects"><BadgeText props="View Projects" /></Link>
      </div>

      <div className="container  lg:pl-[320px] lg:pr-[200px]">
        <TechStack />
        <div className="px-6 lg:px-0">

        </div>
      </div>



    </div>
  )
}

export default Home