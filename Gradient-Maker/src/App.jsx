import React from 'react'
import { Gradient } from './components/Gradient'

const App = () => {
  return (
    <div className="relative text-slate-100 max-w-xl mx-auto mt-10 p-4 border border-slate-400 flex">
      <div className='w-1/2 p-4 pr-8'>
        <h1  className='text-center text-2xl'>Gradient Generator</h1>
        <p className='text-center text-sm text-slate-400 mb-6'>Bring Style to your apps</p>
        <p className='mb-2'>Colors, min 2, max 5</p>
        <div className='flex mb-2'>
          <input type='color' className='mr-2'></input>
          <input type='color'></input>
        </div>
        <div className='mb-5 flex'>
          <button className='w-8 h-6 text-sm border border-slate-200 flex items-center justify-center rounded mr-1'>-</button>
          <button className='w-8 h-6 text-sm border border-slate-200 flex items-center justify-center rounded'>+</button>
        </div>
        <div>
          <p className='text-sm mb-2'>Pick and change color's position: </p>
          {/* Select Color */}

          <p className='text-xs text-slate-300 mt-2'>Colors Position</p>
          {/* Range Position */}
          <input type='range' className='w-full'></input>
          <hr className='opacity-50 my-3' />
          <p className='text-xs text-slate-300 mt-2'>Gardient global angle</p>
          {/* Range Position */}
          <input type='range' className='w-full'></input>

          <button className='mt-3 text-xs bg-blue-600 text-slate-200 py-2 px-4 rounded'>Get The Code</button>
          
        </div>
      </div>

      <Gradient/>
    </div>
  )
}

export default App

