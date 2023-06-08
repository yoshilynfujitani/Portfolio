import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {

  const [open, setmenu] = useState(true)
  const [isRendered, setIsRendered] = useState(false);

  useEffect(() => {
    setIsRendered(true);
  }, []);
  return (
    <>
    <AnimatePresence>
      {open ? (<div className='bg-Main py-6 px-6 shadow-xl fixed top-0 w-full lg:hidden'
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
            <button onClick={() => setmenu(!open)}>Menu</button>
          </div>
        </div>
      </div>) : (
        <motion.div className='block z-10'
        key="sidebar"
        initial={{ x: -300 }} // Initial position off-screen
        animate={{ x: 0 }} // Move back to off-screen when open is false
        transition={{ type: 'spring', duration: 0.25}}
        exit={{ x: -300 }}  >
        <div className="bg-Main w-64 h-screen fixed top-0 flex flex-col  items-center">
        <button onClick={() => setmenu(!open)}>Close</button>
          {/* Logo and Name */}
        <div className="flex items-center space-x-2 py-6">
              <h1 className='w-9 h-9 bg-white rounded-full'></h1>
              <div className="leading-none">
                <h1 className=' animate-text-gradient bg-gradient-to-r from-[#b2a8fd] via-[#8678f9] to-[#c7d2fe] bg-[200%_auto] bg-clip-text text-lg text-transparent'>Yoshilyn Fujitani</h1>
                <p className='text-subtext  text-sm  ' >Web Developer</p>
              </div>
              </div>
        </div>
  
       </motion.div>
     
      )}
      </AnimatePresence>
      {/* Desktop */}
     <div className="hidden lg:block">
      <div className="bg-Main w-64 h-screen fixed top-0 flex flex-col  items-center">
        {/* Logo and Name */}
      <div className="flex items-center space-x-2 py-6">
            <h1 className='w-9 h-9 bg-white rounded-full'></h1>
            <div className="leading-none">
              <h1 className=' animate-text-gradient bg-gradient-to-r from-[#b2a8fd] via-[#8678f9] to-[#c7d2fe] bg-[200%_auto] bg-clip-text text-lg text-transparent'>Yoshilyn Fujitani</h1>
              <p className='text-subtext  text-sm  ' >Web Developer</p>
            </div>
            </div>
      </div>

     </div>
      
      

    </>
  )
}

export default Navbar;