import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Header from './Components/Header'
import About from './Pages/About'
import Home from './Pages/Home'
import Blogs from './Pages/Blogs'
import Contact from './Pages/Contact'
import Projects from './Pages/Projects'


function App() {


  return (
    <>
    
  
   <BrowserRouter>
   <Navbar />
      <Routes>
          <Route path="/Portfolio" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          
          
        </Routes>
   
    </BrowserRouter>
    </>
  )
}

export default App
