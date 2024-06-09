import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {pickColor} from '../../features/gradient'

const SelectColor = () => {
    const dispatch = useDispatch()
    const gradientValues = useSelector(state => state.gradient)

  return (

        <select
        onChange={e => { dispatch(pickColor(e.target.value)) } }
        name="selectColors"
        className="bg-slate-900 text-slate-200 text-xs w-24 h-7 rounded px-2 border border-slate-500 focus:border-slate-500">
        {gradientValues.colors.map(element => (
            <option 
            key={element.id} 
            value={element.id}>
            Color {element.id}
            </option>
        ))}
        </select>
  )
}

export default SelectColor