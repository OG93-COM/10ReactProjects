import React from 'react'
import reset from "../assets/reset.svg"
import play from "../assets/play-button.svg"

const ToggleButton = () => {
  return (
    
    <button className='bg-slate-300 text-slate-800 mx-auto text-center flex items-center rounded px-5 py-1 mt-5'>
        <span>Start</span>
        <img src={play} className='w-4 ml-2'/>
    </button>
    
  )
}

export default ToggleButton