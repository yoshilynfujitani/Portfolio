import React from 'react'
import Navbar from '../Components/Navbar'
import Header from '../Components/Header'
import Featured from '../Components/Featured'

const Home = () => {
  return (
    <div className="bg-Background min-h-screen w-screen overflow-clip">
 
      
      <Header  />
      <div className="container lg:pl-[400px] lg:pr-48 lg:pt-20">
      <h1 className=' inline-flex animate-text-gradient bg-gradient-to-r from-[#b2a8fd] via-[#8678f9] to-[#c7d2fe] bg-[200%_auto] bg-clip-text text-lg font-semibold text-transparent px-6 pt-10 lg:px-0 lg:pt-0'>Featured Works</h1>
      </div>
      <div className="container grid grid-cols-1 lg:grid-cols-2 lg:pl-[400px]">
      <Featured/>
      <Featured/>
      </div>
      
  
      </div>
  )
}

export default Home