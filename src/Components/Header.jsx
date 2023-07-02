import React from 'react'
import { motion } from 'framer-motion'
import BadgeText from './BadgeText'
import CopyEmailBtn from './CopyEmailBtn'
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';

const Header = () => {
  const gradienttext = `inline-flex animate-text-gradient bg-gradient-to-r from-[#b2a8fd] via-[#8678f9] to-[#c7d2fe] bg-[200%_auto] bg-clip-text text-4xl text-transparent font-semibold lg:text-6xl lg:font-bold`
  return (
    <motion.div className='container pt-16 px-6 py-5 text-white overflow-clip lg:pl-[320px] lg:pr-48 lg:pt-48' initial={{ y: -100 }} // Initial position off-screen
      animate={{ y: 0 }} // Final position on-screen
      transition={{ type: 'spring', duration: 1 }}>

      <h1 className='text-4xl font-medium text-slate-50  max-h-20  leading-10 lg:text-6xl lg:font-bold'>Hello! I'm Yoshi. <br /> <Typewriter
        options={{
          strings: [`I <span class="${gradienttext}"> create </span> and  <span class="${gradienttext}"> develop </span> websites`, `I am a <span class="${gradienttext}"> Computer Science </span> Student`],
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
          delay: 50
        }}
      /></h1>


      <p className='pt-16 pb-6 text-md font-thin pr-5 '>Hello! I'm a passionate third-year Computer Science student specializing in web design and development. With my expertise, I'm actively seeking freelance opportunities. Let's collaborate and bring your ideas to life, making your online presence stand out!</p>
      <div className="flex space-x-2">
        <Link to="/contact"> <BadgeText props="Contact" /></Link>
        <CopyEmailBtn />
      </div>

    </motion.div>
  )
}

export default Header