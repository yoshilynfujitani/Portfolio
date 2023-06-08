import { useState } from 'react'
import { BrowserRouter, Route, Router } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Header from './Components/Header'


function App() {


  return (
    <>
   
      <div className="bg-Background min-h-screen w-screen overflow-clip">
      <Navbar />
      <Header  />
      </div>
    </>
  )
}

export default App
