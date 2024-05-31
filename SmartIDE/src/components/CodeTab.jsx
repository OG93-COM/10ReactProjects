import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateCode } from '../features/tabs'


const CodeTab = ({codeId, code}) => {

  const dispatch = useDispatch();
  const tabsState = useSelector(state => state.tabs)
  
  
  return (
    <textarea 
    value={code}
    onChange={e => dispatch(updateCode({ codeId, value: e.target.value }) )}
    className='w-full h-full text-xl p-8 block bg-zinc-900 text-slate-200 resize-none outline-none'
     
    spellCheck='true'

    > </textarea>
  )
}

export default CodeTab