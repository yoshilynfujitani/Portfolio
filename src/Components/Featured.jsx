import React from 'react'


const Featured = (props) => {
  function getHoverColor(componentName) {
    switch (componentName) {
      case "AiFillGithub":
        return "hover:text-slate-50"; // Replace with your desired hover color class
      case "AiFillHtml5":
        return "hover:text-orange-500"; // Replace with your desired hover color class
      case "DiCss3":
        return "hover:text-blue-700"; // Replace with your desired hover color class
      case "SiTailwindcss":
        return "hover:text-sky-400"; // Replace with your desired hover color class
      case "DiJavascript":
        return "hover:text-yellow-300"; // Replace with your desired hover color class
      case "DiPhp":
        return "hover:text-slate-400"; // Replace with your desired hover color class
      case "SiMysql":
        return "hover:text-sky-800"; // Replace with your desired hover color class
      // Add more cases for other component names if needed
      default:
        return "hover:text-slate-50"; // Replace with a default hover color class
    }
  }
  
  return (
    <div className="container px-6  lg:px-0">
      {/* card */}
      <div className="py-4 cursor-pointer">
        <img src={props.img} alt="" className='rounded-md transition hover:scale-105 ' />
        <p className='text-white text-xl font-bold py-2'>{props.title}<span className='font-thin pl-2'>{props.desc}</span></p>
        <p className='text-subtext'>{props.client}</p>
        <div className="flex space-x-2">
          {props.stack.map((item, index) => {
            const IconComponent = item;
            const hoverColor = getHoverColor(IconComponent.name); // Assuming you have a function to determine the hover color based on the item's id
            const iconClass = `transition text-3xl lg:text-4xl text-subtext hover:scale-105 ${hoverColor}`;
            console.log(iconClass)
         
            return <span key={index} className={iconClass}><IconComponent /></span>;
          })}
        </div>
        <p className='text-md font-thin text-subtext'>{props.purpose}</p>
      </div>
    </div>
  )
}

export default Featured