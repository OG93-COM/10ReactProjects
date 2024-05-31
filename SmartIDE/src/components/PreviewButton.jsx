import React from 'react'
import hide from '../assets/hide.svg'
import show from '../assets/view.svg'
import { useSelector, useDispatch } from 'react-redux'
import { togglePreview } from '../features/preview.js'

const PreviewButton = () => {
    const previewData = useSelector(state => state.preview[0])
    const dispatch = useDispatch()
  return (
    <button 
    onClick={() => dispatch(togglePreview())}
    className="bg-blue-600 py-2 px-3 rounded flex items-center hover:bg-blue-700">
    <img src={previewData.preview ? hide : show} className='w-[20px] mr-3 ' />
    {previewData.preview ? "Hide" : "Show"} Preview</button>
  )
}

export default PreviewButton