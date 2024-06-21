import React from 'react'
import playIcon from '../../assets/play-icon.svg'
import pauseIcon from '../../assets/pause-icon.svg'

const TogglePlayButton = () => {
  return (
    <button className='w-14 h-14 bg-slate-100/90 rounded-full flex justify-center items-center ml-3'>
      <img src={pauseIcon} alt="prevIcon" className='w-full' />
    </button>
  )
}

export default TogglePlayButton