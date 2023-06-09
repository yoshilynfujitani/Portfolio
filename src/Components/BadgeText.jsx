import React from 'react'

const BadgeText = ({props}) => {
  return (
    <button className='relative inline-flex  overflow-hidden rounded-md p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50'>
    <span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]' />
    <span className='inline-flex  cursor-pointer items-center justify-center rounded-md bg-slate-950 px-6 py-2 text-md font-medium text-white backdrop-blur-3xl'>
      {props}
    </span>
  </button>
  )
}

export default BadgeText