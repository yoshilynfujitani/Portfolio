import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-Main py-6 px-6 shadow-xl fixed top-0 w-full'>
         <div className="container flex justify-between items-center text-white lg:hidden">
          {/* Logo and Name */}
          <div className="flex items-center space-x-2">
                <h1 className='w-9 h-9 bg-white rounded-full'></h1>
                <div className="leading-tight">
                    <h1 className='inline-flex animate-text-gradient bg-gradient-to-r from-[#b2a8fd] via-[#8678f9] to-[#c7d2fe] bg-[200%_auto] bg-clip-text text-xl text-transparent'>Yoshilyn Fujitani</h1>
                    <p className='text-subtext  text-sm  ' >Web Developer</p>
                </div>
          </div>
          {/* Menu */}
          <div className="">
              Menu
          </div>
        </div>
    </div>
  )
}

export default Navbar;