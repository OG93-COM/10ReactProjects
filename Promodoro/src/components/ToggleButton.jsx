import React from 'react'
import reset from "../assets/reset.svg"
import play from "../assets/play-button.svg"
import { useSelector, useDispatch } from 'react-redux'
import { startChrono, resetChrono } from '../features/chrono'

const ToggleButton = () => {
  const dispatch = useDispatch();
  const chronoValues = useSelector(state => state.chrono)

  function toggleChrono(){
    if(!chronoValues.isPlaying){
      dispatch(startChrono())
    } else {
      dispatch(resetChrono())
    }
  }
  return (
    
    <button
    onClick={toggleChrono}
    className='bg-slate-300 text-slate-800 mx-auto text-center flex items-center rounded px-5 py-1 mt-5'>
        <span>{chronoValues.isPlaying ? "Reset" : "Start"}</span>
        <img src={chronoValues.isPlaying ? reset : play} className='w-4 ml-2'/>
    </button>
    
  )
}

export default ToggleButton