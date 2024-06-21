import React from 'react'
import {useSelector} from  'react-redux'
import getFormattedValues from '../../utils/getFormattedValues'

const Progress = () => {
  const progressData = useSelector(state => state.progress)

  const handleProgressClick = (e) => {
    const player = document.getElementById('audio-player')
    const rect = e.target.getBoundingClientRect()
    const widht = rect.widht
    const x = e.clientX - rect.left
    player.currentTime = (x / widht) * progressData.totalDuration
  }
  return (
    <div className='max-w-[800px] mx-auto'>
      <div
      onClick={handleProgressClick}
      className='bg-slate-900 h-2 rounded cursor-pointer'>
        <div 
        style={{transform:`scaleX(${progressData.current / progressData.totalDuration})`}}
        className='bg-indigo-400 origin-left h-full pointer-events-none'></div>
      </div>
      <div className='flex justify-between items-center text-gray-800 font-light text-sm mt-1 mx-1'>
        <span>{progressData.current ? getFormattedValues(progressData.current) : "00:00"}</span>
        <span>{getFormattedValues(progressData.totalDuration)}</span>

      </div>
    </div>

  )
}

export default Progress