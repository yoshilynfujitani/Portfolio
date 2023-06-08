import React from 'react'
import { motion } from 'framer-motion'

const Header = () => {
    const gradienttext = `inline-flex animate-text-gradient bg-gradient-to-r from-[#b2a8fd] via-[#8678f9] to-[#c7d2fe] bg-[200%_auto] bg-clip-text text-4xl text-transparent font-semibold`
  return (
    <motion.div className='pt-40 px-6 text-white overflow-clip'  initial={{ y: -100 }} // Initial position off-screen
    animate={{ y: 0 }} // Final position on-screen
    transition={{ type: 'spring', duration: 1 }}>
     
        <h1 className='text-4xl font-thin text-slate-50    leading-10  '>Hello! I'm Yoshi. <br/>I <span className={gradienttext}>create</span> and <span className={gradienttext}>develop</span> websites.</h1>


        <p className='py-5 text-md'>I'm a blazingly fast web & app designer passionate about all kinds of interface design. I pride myself in working very fast, without any sacrifice on quality. I'm available for freelance work!</p>
        <div className="">
            <button>Contact Me</button>
        </div>
    </motion.div>
  )
}

export default Header