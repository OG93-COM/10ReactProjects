import React from 'react'
import { useSelector } from 'react-redux'


const CodeTab = ({codeId, code}) => {

  const tabsState = useSelector(state => state.tabs)
  
  console.log(tabsState)
  return (
    <textarea 
    className='w-full h-full text-xl p-8 block bg-zinc-900 text-slate-200 resize-none outline-none' 
    spellCheck='flase'
    value={code}
    >
    </textarea>
  )
}

export default CodeTab