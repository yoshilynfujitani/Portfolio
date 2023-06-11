import React from 'react'
import { motion } from 'framer-motion'
import Header from '../Components/Header'
import Featured from '../Components/Featured'
import Habiya from "/Habiya.png"
import Weather from "/Weather.png"
import Pokedex from "/Pokedex.png"
import { AiFillGithub } from "react-icons/ai";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { DiJavascript } from "react-icons/di";
import { DiPhp } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import BadgeText from '../Components/BadgeText'
import { Link } from 'react-router-dom'
import TechStack from '../Components/TechStack'
import { DiReact } from "react-icons/di";
import ContactMe from '../Components/ContactMe'



const Home = () => {
  

  const works = [
    {
      id: 1,
      title: "Habiya",
      desc: "An Ilocano E-Commerce Project",
      img: Habiya,
      stack: [AiFillGithub, AiFillHtml5, DiCss3, SiTailwindcss, DiJavascript, DiPhp, SiMysql],
      purpose: "CmpSc 117 Project"
    },
    {
      id: 2,
      title: "Weather App",
      desc: "API integrated project",
      img: Weather,
      stack: [AiFillGithub, AiFillHtml5, DiCss3, SiTailwindcss, DiJavascript,DiReact],
      purpose: "Learning"
    },
    {
      id: 3,
      title: "Pokedex",
      desc: "API integrated project",
      img: Pokedex,
      stack: [AiFillGithub, AiFillHtml5, DiCss3, SiTailwindcss, DiJavascript,DiReact],
      purpose: "Learning"
    }
  ]


  return (
    <div className="bg-Background min-h-screen w-screen overflow-clip ">


      <Header />
      <div className="container lg:pl-[320px] lg:pr-48 lg:pt-20">
        <h1 className=' inline-flex animate-text-gradient bg-gradient-to-r from-[#b2a8fd] via-[#8678f9] to-[#c7d2fe] bg-[200%_auto] bg-clip-text text-lg font-semibold text-transparent px-6 pt-10 lg:px-0 lg:pt-0'>Featured Works</h1>
      </div>
      <motion.div className="container grid grid-cols-1 lg:grid-cols-2 lg:pl-[320px] gap-6" initial={{ y: 100 }} // Initial position off-screen
        animate={{ y: 0 }} // Final position on-screen
        transition={{ type: 'spring', duration: 1.5 }}>
        {works.map((item) => (
          <Featured {...item} key={item.id} />
        ))}
      </motion.div>
      <Link to="/projects"><div className="flex justify-center items-center py-10 lg:pl-[320px] lg:py-20">
      <BadgeText props="View Projects"/>
      </div>
      </Link>
      <div className="container lg:pl-[320px]">
        <TechStack/>
        <ContactMe/>
      </div>
      


    </div>
  )
}

export default Home