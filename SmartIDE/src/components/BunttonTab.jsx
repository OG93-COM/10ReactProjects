import React from 'react'
import { useDispatch } from 'react-redux'
import { hidePreview } from '../features/preview';

const BunttonTab = ({id, toggleTab, buttonContent, imageUrl}) => {

    const dispatch = useDispatch();

  return (
    <button id={id} onClick={()=> {
        toggleTab(id)
        dispatch(hidePreview());
    }}
    className='flex items-center hover:bg-slate-600 focus:bg-slate-700 outline-none p-2'>
        <img src={imageUrl} alt={buttonContent} className='w-[16px] mr-2'/>
        <span>{buttonContent}</span>
    </button>


  )
}

export default BunttonTab

{/* <button className='flex items-center hover:bg-slate-500 p-2'> <img src={tabsState[0].imageUrl} className='w-[16px] mr-2'/> {tabsState[0].buttonContent} </button>
<button className='flex items-center hover:bg-slate-500 p-2'><img src={tabsState[1].imageUrl} className='w-[16px] mr-2'/>{tabsState[1].buttonContent}</button>
<button className='flex items-center hover:bg-slate-500 p-2'><img src={tabsState[2].imageUrl} className='w-[16px] mr-2'/>{tabsState[2].buttonContent}</button> */}