import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {updateAngle } from '../../features/gradient'

const RangeAngle = ({valueRange}) => {
    const dispatch = useDispatch()
    const gradientAngle = useSelector(state => state.gradient.angle)
    console.log(gradientAngle)
    return (
      <input 
      type='range' 
      className='w-full h-1' 
      value={gradientAngle}
      onChange={e => dispatch(updateAngle(e.target.value))}
      min={0} 
      max={360}>

      </input>
    )
  }

export default RangeAngle