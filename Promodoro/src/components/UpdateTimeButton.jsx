import React from 'react'
import { useDispatch } from 'react-redux'
import { updateChronoValues } from '../features/chrono'


export const UpdateTimeButton = ({signe, type}) => {
  const dispatch = useDispatch()

  function handleUpdate(){
    dispatch(updateChronoValues({type, value: signe === "+" ? 60 : - 60}))
  }

  return (
    <button
        onClick={handleUpdate} 
        className="bg-slate-200 text-slate-700 w-8 h-8 flex items-center justify-center  rounded ml-2 mr-2 hover:bg-slate-300">
        {signe}
    </button>
  )
}
