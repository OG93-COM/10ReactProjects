import React from 'react'
import getGradientCSSValue from '../utils/getGradientCSSValue'
import { useSelector } from 'react-redux'

const ModalGetCode = ({closeModal}) => {

    const gradientValues = useSelector(state => state.gradient)
  return (
    <div onClick={closeModal} className='fixed z-10 top-0 left-0 bg-slate-800/90 w-full h-full flex justify-center items-center'>
        <div 
        onClick={e => e.stopPropagation()} 
        className='bg-slate-50 min-w-[500px] relative p-7 rounded'>
            
            <div className='flex '>
                <h1 className='text-gray-500 text-xl'>The code is here 👇</h1>
                <div className='flex'>
                    <button 
                    onClick={closeModal}
                    className=' bg-blue-500 text-slate-50 text-xs rounded absolute right-[90px] px-3 py-1  hover:bg-blue-600'>
                    Copy
                    </button>
                    <button 
                    onClick={closeModal}
                    className=' bg-red-500 text-slate-50 text-xs rounded absolute right-[30px] px-3 py-1 hover:bg-red-600'>
                    Close
                    </button>
                </div>
                
            </div>
            
            <div className='bg-slate-900 text-slate-200 font-semibold mt-2 p-5 h-20 flex justify-center items-center'>
                <span className='font-semibold'>background-image: {getGradientCSSValue(gradientValues)} </span>  
            </div>
            
            
        </div>
    </div>
  )
}

export default ModalGetCode