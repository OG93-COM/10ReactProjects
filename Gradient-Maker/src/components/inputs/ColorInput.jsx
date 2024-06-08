import React from 'react'
import { useDispatch } from 'react-redux'
import { updateColorValue } from '../../features/gradient';

const ColorInput = ({color, id}) => {

    const dispatch = useDispatch();

  return (
    <input 
    onChange={e => dispatch(updateColorValue({id, value: e.target.value}))}
    id={id} 
    type='color' 
    className='mr-1 w-[40px] h-[40px] cursor-pointer bg-transparent rounded d-block' 
    value={color}>

    </input>
  )
}

export default ColorInput