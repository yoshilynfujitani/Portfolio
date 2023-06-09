import React from 'react'
import Navbar from '../Components/Navbar'
import Header from '../Components/Header'
import Featured from '../Components/Featured'

const Home = () => {
  return (
    <div className="bg-Background min-h-screen w-screen overflow-clip">
 
      
      <Header  />
      <h1 className='inline-flex animate-text-gradient bg-gradient-to-r from-[#b2a8fd] via-[#8678f9] to-[#c7d2fe] bg-[200%_auto] bg-clip-text text-lg font-semibold text-transparent px-6 pt-10'>Featured Works</h1>
      <Featured/>
      
  
      </div>
  )
}

export default Home