import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CgMenuGridR } from "react-icons/cg";
import { BiArrowBack } from "react-icons/bi";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const Menulist = `transition text-subtext hover:bg-Background px-2 py-2 rounded-md hover:text-white`
  const [open, setmenu] = useState(true)
  const [isRendered, setIsRendered] = useState(false);

  useEffect(() => {
    setIsRendered(true);
  }, []);
  return (
    <>
    <AnimatePresence>
      {open ? (<div className='bg-Main py-6 px-6 shadow-xl fixed top-0 w-full z-10 lg:hidden'
       initial={{ x: -300 }} // Initial position off-screen
        animate={{ x: 0 }} // Move back to off-screen when open is false
        transition={{ type: 'spring', duration: 0.5}}>
        <div className="container flex justify-between items-center text-white lg:hidden">
          {/* Logo and Name */}
          <div className="flex items-center space-x-2">
            <h1 className='w-9 h-9 bg-white rounded-full'></h1>
            <div className="leading-tight">
              <h1 className='inline-flex animate-text-gradient bg-gradient-to-r from-[#b2a8fd] via-[#8678f9] to-[#c7d2fe] bg-[200%_auto] bg-clip-text text-md text-transparent'>Yoshilyn Fujitani</h1>
              <p className='text-subtext  text-sm  ' >Web Developer</p>
            </div>
          </div>
          {/* Menu */}
          <div className="">
            <button onClick={() => setmenu(!open)} className='text-[28px] '>{<CgMenuGridR/>}</button>
          </div>
        </div>
      </div>) : (
        <motion.div className=' z-10 lg:hidden'
        key="sidebar"
        initial={{ x: 300 }} // Initial position off-screen
        animate={{ x: 0 }} // Move back to off-screen when open is false
        transition={{ type: 'spring', duration: 0.25}}
        exit={{ x: 300 }}  >
        <div className="bg-Main w-64 h-screen fixed top-0 right-0 flex flex-col  items-center shadow-2xl">
        <button onClick={() => setmenu(!open)}className='text-[28px] self-end'><BiArrowBack/></button>
          {/* Logo and Name */}
        <div className="flex items-center w-full justify-center gap-4">
              <h1 className='w-10 h-10 bg-white rounded-full'></h1>
              <div className="leading-none">
                <h1 className=' animate-text-gradient bg-gradient-to-r from-[#b2a8fd] via-[#8678f9] to-[#c7d2fe] bg-[200%_auto] bg-clip-text text-lg text-transparent'>Yoshilyn Fujitani</h1>
                <p className='text-subtext  text-sm  ' >Web Developer</p>
              </div>
              </div>
              {/* Menu Options */}
              <div className="py-5 w-full">
                <ul className='flex flex-col float-left px-9 text-white space-y-2 w-full'>
                  <Link to="/Portfolio" onClick={() => setmenu(!open)}><li className={Menulist}>Home</li></Link>
                  <Link to="/about" onClick={() => setmenu(!open)}><li className={Menulist}>About Me</li></Link>
                  <Link to="/blogs" onClick={() => setmenu(!open)}><li className={Menulist}>Blogs</li></Link>
                  <Link to="/contact" onClick={() => setmenu(!open)}><li className={Menulist}>Contact</li></Link>
                  <Link to="/projects" onClick={() => setmenu(!open)}><li className={Menulist}>Projects</li></Link>
                </ul>
              </div>
        </div>
  
       </motion.div>
     
      )}
      </AnimatePresence>
      {/* Desktop */}
     <div className="hidden lg:block">
      <div className="bg-Main w-64 h-screen fixed top-0 flex flex-col  items-center">
        {/* Logo and Name */}
      <div className="flex items-center space-x-2 py-6 justify-between">
            <h1 className='w-9 h-9 bg-white rounded-full'></h1>
            <div className="leading-none">
              <h1 className=' animate-text-gradient bg-gradient-to-r from-[#b2a8fd] via-[#8678f9] to-[#c7d2fe] bg-[200%_auto] bg-clip-text text-lg text-transparent'>Yoshilyn Fujitani</h1>
              <p className='text-subtext  text-sm  ' >Web Developer</p>
            </div>
            </div>
            {/* Menu Options */}
            <div className="py-5">
                <ul className='flex flex-col space-y-2'>
                  <Link to="/Portfolio" onClick={() => setmenu(!open)}>Home</Link>
                  <Link to="/about" onClick={() => setmenu(!open)}>About</Link>
                  <Link to="/blogs" onClick={() => setmenu(!open)}>Blogs</Link>
                  <Link to="/contact" onClick={() => setmenu(!open)}>Contact</Link>
                  <Link to="/projects" onClick={() => setmenu(!open)}>Projects</Link>
                </ul>
              </div>
      </div>

     </div>
      
      

    </>
  )
}

export default Navbar;