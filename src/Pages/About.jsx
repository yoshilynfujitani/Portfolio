import React from 'react'

const About = () => {
  const gradienttext = `inline-flex animate-text-gradient bg-gradient-to-r from-[#b2a8fd] via-[#8678f9] to-[#c7d2fe] bg-[200%_auto] bg-clip-text text-2xl text-transparent font-semibold lg:text-5xl lg:font-bold`
  return (
    <div className="min-h-screen bg-Background px-6 py-10">
      <div className="lg:pl-[320px] lg:pr-[200px] lg:pt-20">
      <h1 className={gradienttext}>About Yoshi</h1>
      <p className='text-white py-5'>I'm Yoshilyn Fujitani, a third-year computer science student at Mariano Marcos State University (MMSU) in Ilocos Norte, Philippines. My passion lies in web design and development. I specialize in using React and Tailwind CSS to create interactive and modern user interfaces. With a strong foundation in HTML, CSS, and JavaScript, I enjoy combining my technical skills with creativity to craft visually appealing and user-friendly websites. When I'm not coding, I find solace in nature and indulge in various genres of literature. My ultimate goal is to create impactful digital experiences that leave a positive impact on users.</p>
      <h1 className={gradienttext}>Education</h1>
      </div>
      
            
    </div>
  )
}

export default About