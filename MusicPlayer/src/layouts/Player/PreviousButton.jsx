import React from 'react'
import prevIcon from '../../assets/prev-icon.svg'

const PreviousButton = () => {
  return (
    <button className='w-9 h-9 bg-slate-400/90 rounded-full flex justify-center items-center'>
      <img src={prevIcon} alt="prevIcon" className='w-5 h-5' />
    </button>
  )
}

export default PreviousButton