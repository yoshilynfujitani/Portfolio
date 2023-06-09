import React from 'react'
import { useState, useEffect } from 'react';
import { MdContentCopy } from "react-icons/md";

const CopyEmailBtn = () => {
  const [copySuccessMessage, setCopySuccessMessage] = useState('')

  const email = 'fujitaniyoshilynp@gmail.com'

  useEffect(() => {
    const timer = setTimeout(() => {
      setCopySuccessMessage('')
    }, 5000)
    return () => clearTimeout(timer)
  }, [copySuccessMessage])

  function copyEmail() {
    navigator.clipboard.writeText(email)
    setCopySuccessMessage("Copied!")
  
  }

 
 
 

  return (
    <button  onClick={copyEmail} className={`px-6 py-2 bg-transparent border border-subtext font-medium border-1 rounded-md  `}>{copySuccessMessage ? <h1 className='transition flex items-center gap-2 transform scale-x-100'><MdContentCopy/>Copied!</h1> : <h1 className='flex items-center gap-2'><MdContentCopy/>E-Mail</h1>}</button>
   
  )
}

export default CopyEmailBtn