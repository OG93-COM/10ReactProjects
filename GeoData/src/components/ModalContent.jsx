import React from 'react'

const ModalContent = (props) => {
  return (
    <div className='fixed z-10 top-0 left-0 bg-slate-800/90 w-full h-full flex justify-center items-center'>
        <div className='bg-slate-50 min-w-[500px] relative p-7 rounded'>
        <button onClick={props.closeModal} className=' bg-red-500 text-slate-50 text-sm rounded absolute top-0 right-0 z-20 px-3 py-1 m-1'>
                X {props.closeModal}
        </button>

            <p className='text-gray-500 text-xl  '>Here is {props.country.name.common} informations</p>
            <p className='text-gray-800 text-sm mt-2'>Language : {props.country.languages.lav} </p>
            <p className='text-gray-800 text-sm mt-2'>Capitale : {props.country.capital} </p>
            <p className='text-gray-800 text-sm mt-2 '>Population : {props.country.population} </p>
            
        </div>
    </div>
  )
}

export default ModalContent