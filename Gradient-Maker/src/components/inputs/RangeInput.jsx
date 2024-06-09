import React from 'react'

const RangeInput = ({valueRange}) => {
  return (
    <input 
    type='range' 
    className='w-full h-1' 
    value={valueRange} 
    min={0} 
    max={100}></input>
  )
}

export default RangeInput