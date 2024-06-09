import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {updatePosition} from '../../features/gradient'

const RangePosition = () => {
  const dispatch = useDispatch()
  const gradientValues = useSelector(state => state.gradient.colors[state.gradient.pickedColorId - 1].position)

  return (
    <input 
    type='range'
    onChange={e => dispatch(updatePosition(e.target.value))} 
    className='w-full h-1' 
    value={gradientValues} 
    min={0} 
    max={100}></input>
  )
}

export default RangePosition