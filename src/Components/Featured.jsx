import React from 'react'
import { AiFillGithub } from "react-icons/ai";
import Habiya from "/Habiya.png"

const Featured = () => {
  return (
    <div className="container px-6  lg:px-0">
      {/* card */}
      <div className="pr-5 py-4 cursor-pointer">
      <img src={Habiya} alt="" className='rounded-md transition hover:scale-105 '/>
      <p className='text-white text-xl font-bold py-2'>Habiya: <span className='font-thin'> An Ilocano E-Commerce Project</span></p>
      <p className='text-subtext'>for CMPSC 117</p>
      <p><AiFillGithub className='text-4xl text-subtext hover:scale-105'/></p>
      </div>
    </div>
  )
}

export default Featured