import React from 'react'


const Featured = (props) => {
  return (
    <div className="container px-6  lg:px-0">
      {/* card */}
      <div className="py-4 cursor-pointer">
      <img src={props.img} alt="" className='rounded-md transition hover:scale-105 '/>
      <p className='text-white text-xl font-bold py-2'>{props.title}<span className='font-thin'>{props.desc}</span></p>
      <p className='text-subtext'>{props.client}</p>
     <div className="flex space-x-2">
      {props.stack.map((item) => {
          const IconComponent = item;
          return <span key={item.id} className='text-3xl lg:text-4xl text-subtext hover:scale-105'><IconComponent /></span>;
        })}
     </div>
      </div>
    </div>
  )
}

export default Featured