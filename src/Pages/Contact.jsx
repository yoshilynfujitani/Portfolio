import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const sendEmail = (e) => {

    e.preventDefault();
    if (!name || !email || !message) return;



    emailjs.sendForm('service_6g0co29', 'template_jdtpct8', form.current, 'plfFyTU62h2GHKKo9')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

    setName("")
    setEmail("")
    setMessage("")
  };
  return (


    <div className="min-h-screen bg-Background px-10 pt-40 lg:pl-[500px] lg:pr-96">
      <h1 className='text-slate-50 text-4xl font-bold lg:text-6xl pt-4'>Contact Me</h1>
      <p className='text-slate-50 text-md py-4'>Let's connect and make your ideas your reality</p>
      <form ref={form} onSubmit={sendEmail} className='flex flex-col space-y-5 bg-Main py-10 px-10 shadow-md rounded-md'>
        <div className="w-full flex flex-col"><label className='text-white'>Name</label>
          <input type="text" name="user_name" value={name} onChange={(e) => setName(e.target.value)} className='border border-b-2  rounded-md  py-2 px-4 ' /></div>
        <div className="w-full flex flex-col"> <label className='text-white'>Email</label>
          <input type="email" name="user_email" value={email} onChange={(e) => setEmail(e.target.value)} className='border border-b-2 rounded-md  py-2 px-4' /></div>
        <div className="w-full flex flex-col"><label className='text-white'>Message</label>
          <textarea name="message" value={message} onChange={(e) => setMessage(e.target.value)} className='border border-b-2 rounded-md py-2 px-4 ' /></div>
        <button type='submit' className='text-slate-50 border-white'>Send Message</button>
      </form>
    </div>

  )
}

export default Contact