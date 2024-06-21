import React from 'react'
import {useSelector} from  'react-redux'
import getFormattedValues from '../../utils/getFormattedValues'

const Progress = () => {
  const progressData = useSelector(state => state.progress)

  return (
    <div className='max-w-[800px] mx-auto'>
      <div className='bg-slate-900 h-2 rounded cursor-pointer'>
        <div className='bg-indigo-400 scale-x-50 origin-left h-full pointer-events-none'></div>
      </div>
      <div className='flex justify-between items-center text-gray-800 font-light text-sm mt-1 mx-1'>
        <span>{getFormattedValues(progressData.current)}</span>
        <span>{getFormattedValues(progressData.totalDuration)}</span>

      </div>
    </div>

  )
}

export default Progress