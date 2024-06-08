import React from 'react'
import getGradientCSSValue from "../utils/getGradientCSSValue.js"
import { useSelector } from 'react-redux'



export const Gradient = () => {
    const gradientValues = useSelector(state => state.gradient)
    
  return (
    <div 
    style={{backgroundImage: getGradientCSSValue(gradientValues).slice(0,-1)}}
    className='w-1/2 border border-slate-200'>
        
    </div>
  )
}
