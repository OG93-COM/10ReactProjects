import React from 'react'
import htmlIcon from '../assets/html.svg'
import cssIcon from '../assets/css.svg'
import jsIcon from '../assets/js.svg'
import CodeTab from './CodeTab'

const Tabs = () => {
  return (
    <div className='flex grow'>
        <div className='flex grow flex-col w-[175px] shrink-0 text-slate-300 border-r border-slate-200 '>
            <button className='flex items-center hover:bg-slate-500 p-2'> <img src={htmlIcon} className='w-[16px] mr-2'/> HTML </button>
            <button className='flex items-center hover:bg-slate-500 p-2'><img src={cssIcon} className='w-[16px] mr-2'/>CSS</button>
            <button className='flex items-center hover:bg-slate-500 p-2'><img src={jsIcon} className='w-[16px] mr-2'/>JavaScript</button>
        </div>
        <div className='flex grow  w-full relative p-2'>
            <CodeTab/>
        </div>
        
    </div>
  )
}

export default Tabs