import React from 'react'
import nextIcon from '../../assets/next-icon.svg'

const NextButton = () => {
  return (
    <button className='w-9 h-9 bg-slate-400/90 rounded-full flex justify-center items-center ml-3'>
      <img src={nextIcon} alt="prevIcon" className='w-5 h-5' />
    </button>
  )
}

export default NextButton