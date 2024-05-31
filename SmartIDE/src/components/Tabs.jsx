import React, { useState } from 'react'
import {htmlIcon, cssIcon, jsIcon} from '../assets/index.js'
import CodeTab from './CodeTab'
import { useSelector } from 'react-redux'
import BunttonTab from './BunttonTab.jsx'
import Preview from './Preview.jsx'

const Tabs = () => {
    const tabsState = useSelector(state => state.tabs);
    const [tabIndex, setTabIndex] = useState(tabsState[0].id);

  return (
    <div className='flex grow'>
        <div className='flex grow flex-col w-[175px] shrink-0 text-slate-300 border-r border-slate-200 '>
            {tabsState.map(tab => (
                <BunttonTab key={tab.id} id={tab.id} toggleTab={id => setTabIndex(id)} buttonContent={tab.buttonContent} imageUrl={tab.imageUrl} />
            ))}
        </div>
        <div className='flex w-full grow relative p-2'>
            <CodeTab codeId={tabIndex} code={tabsState.find(obj => obj.id === tabIndex).code}/>
            <Preview/>
        </div>
        
    </div>
  )
}

export default Tabs