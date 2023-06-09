import React from 'react'
import { motion } from 'framer-motion'
import BadgeText from './BadgeText'
import CopyEmailBtn from './CopyEmailBtn'
import { Link } from 'react-router-dom';

const Header = () => {
    const gradienttext = `inline-flex animate-text-gradient bg-gradient-to-r from-[#b2a8fd] via-[#8678f9] to-[#c7d2fe] bg-[200%_auto] bg-clip-text text-4xl text-transparent font-semibold`
  return (
    <motion.div className='container pt-16 px-6 py-5 text-white overflow-clip lg:pl-[400px] lg:pr-48 lg:pt-48'  initial={{ y: -100 }} // Initial position off-screen
    animate={{ y: 0 }} // Final position on-screen
    transition={{ type: 'spring', duration: 1 }}>
     
        <h1 className='text-4xl font-medium text-slate-50    leading-10  '>Hello! I'm Yoshi. <br/>I <span className={gradienttext}>create</span> and <span className={gradienttext}>develop</span> websites.</h1>


        <p className='py-5 text-md font-thin pr-5'>Hello! I'm a passionate third-year computer science student specializing in web design and development. With my expertise, I'm actively seeking freelance opportunities to create visually appealing and functional websites. Let's collaborate and bring your ideas to life, making your online presence stand out!</p>
        <div className="flex space-x-2">
           <Link to="/contact"> <BadgeText props="Contact" /></Link>
            <CopyEmailBtn/>
        </div>
        
    </motion.div>
  )
}

export default Header