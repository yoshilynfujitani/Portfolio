import React from 'react'
import BadgeText from './BadgeText'
import CopyEmailBtn from './CopyEmailBtn'
import { Link } from 'react-router-dom'

const ContactMe = () => {
    const gradienttext = `inline-flex animate-text-gradient bg-gradient-to-r from-[#b2a8fd] via-[#8678f9] to-[#c7d2fe] bg-[200%_auto] bg-clip-text text-4xl text-transparent font-semibold lg:text-6xl lg:font-bold`
  return (
    <div className="container px-6 py-10 bg-Main rounded-md mx-6 my-10 shadow-xl">
        <div className="">
            <h1 className={gradienttext}>Interested?</h1>
            <p className="text-slate-50 font-thin py-2">Ready to work together? Let's make amazing things happen!</p>
            <div className="text-white flex gap-2 py-2">
                <Link to="/contact"><BadgeText props="Contact Me"/></Link>
                <CopyEmailBtn/>
            </div>
        </div>
    </div>
  )
}

export default ContactMe