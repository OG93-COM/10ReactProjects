import React from 'react'
import { useDispatch } from 'react-redux'
import {addColor, removeColor } from '../../features/gradient'

const AddRemoveColor = ({signe, action}) => {
    const dispatch = useDispatch()

    function handleClick(){
        if (action ==="add") {
            dispatch(addColor())
            
        } else if (action ==="remove") {
            dispatch(removeColor())
        }
    }
  return (
    <button 
    onClick={handleClick}
    className='w-8 h-6 text-sm border border-slate-200 flex items-center justify-center rounded mr-1'>
        {signe}
    </button>
  )
}

export default AddRemoveColor