import React from 'react'

export const UpdateTimeButton = ({signe, type}) => {
  return (
    <button 
        className="bg-slate-200 text-slate-700 w-8 h-8 flex items-center justify-center pointer-events-none rounded ml-2 mr-2 hover:bg-slate-300">
        {signe}
    </button>
  )
}
