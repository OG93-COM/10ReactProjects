import React from 'react'
import { Gradient } from './components/Gradient'
import {useSelector} from "react-redux"
import ColorInput from './components/inputs/ColorInput';
import RangeInput from './components/inputs/RangeInput';
import AddRemoveColor from './components/inputs/AddRemoveColor';

const App = () => {
  
  const gradientValues = useSelector(state => state.gradient);
  console.log(gradientValues);

  return (
    <div className="relative text-slate-100 max-w-4xl mx-auto mt-10 p-4 border border-slate-400 flex">
      <div className='w-1/2 p-4 pr-8'>
        <h1  className='text-center text-2xl'>Gradient Generator</h1>
        <p className='text-center text-sm text-slate-400 mb-6'>Bring Style to your apps</p>
        <p className='mb-2'>Colors, min 2, max 5</p>
        <div className='flex mb-2'>
          {gradientValues.colors.map( color => { 
           return (<ColorInput key={color.id} color={color.value} id={color.id}/> )
          })}
        </div>
        <div className='mb-5 flex'>
          <AddRemoveColor signe={"-"} action={"remove"}/>
          <AddRemoveColor signe={"+"} action={"add"}/>
        </div>
        <div>
          <p className='text-sm mb-2'>Pick and change color's position: </p>
          {/* Select Color */}

          <p className='text-xs text-slate-300 mt-2'>Colors Position</p>
          {/* Range Position */}
          <RangeInput/>
          {/* <input type='range' className='w-full' value={gradientValues.colors[2].position} min={1} max={100}></input> */}
          <hr className='opacity-50 my-3' />
          <p className='text-xs text-slate-300 mt-2'>Gardient global angle : {gradientValues.angle}%</p>
          {/* Range Position */}
          <RangeInput/>
          {/* <input type='range' className='w-full' value={gradientValues.angle} min={1} max={100}></input> */}

          <button className='mt-3 text-xs bg-blue-600 text-slate-200 py-2 px-4 rounded'>Get The Code</button>
          
        </div>
      </div>

      <Gradient/>
    </div>
  )
}

export default App

