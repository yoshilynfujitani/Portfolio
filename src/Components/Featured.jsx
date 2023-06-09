import React from 'react'


const Featured = (props) => {


  return (
    <div className="bg-gray-100 dark:bg-Main container rounded-md transition shadow-md hover:scale-105  lg:px-0">
      {/* card */}
      <div className="py-4 cursor-pointer px-4">
        <img src={props.img} alt="" className='rounded-md  ' />
        <p className='text-gray-700 dark:text-white text-xl font-bold py-2'>{props.title}<span className='font-thin pl-2'>{props.desc}</span></p>
        <p className='text-gray-500 dark:text-subtext'>{props.client}</p>
        <div className="flex space-x-2">
          {props.stack.map((item, index) => {
            const IconComponent = item;

            const iconClass = `transition text-3xl lg:text-4xl  text-gray-700 dark:text-subtext hover:scale-105 hover:text-slate-50`;


            return <span key={index} className={iconClass}><IconComponent /></span>;
          })}
        </div>
        <p className='text-md font-thin dark:text-subtext'>{props.purpose}</p>
      </div>
    </div>
  )
}

export default Featured