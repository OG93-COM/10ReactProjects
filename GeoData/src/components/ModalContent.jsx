import React from 'react'

const ModalContent = (props) => {
    return (
        <div onClick={props.closeModal} className='fixed z-10 top-0 left-0 bg-slate-800/90 w-full h-full flex justify-center items-center'>
            <div
                onClick={e => e.stopPropagation()}
                className='bg-slate-50 min-w-[500px] relative p-7 rounded'>
                <button
                    onClick={props.closeModal}
                    className=' bg-red-500 text-slate-50 text-sm rounded absolute top-0 right-0 z-20 px-3 py-1 m-1 hover:bg-red-600'>
                    X
                </button>
                <h1 className='text-gray-500 text-xl'>Here is {props.country.name.common} - {Object.values(props.country.translations.ara.common)}</h1>
                <h2 className='text-gray-800 text-sm mt-2'>
                    <span className='font-semibold'>Language: </span> {Object.entries(props.country.languages).map(lan => lan[1].toUpperCase() + " ")}
                </h2>
                <p className='text-gray-800 text-sm mt-2'>
                    <span className='font-semibold'>Capitale: </span> {props.country.capital[0]}
                </p>
                <p className='text-gray-800 text-sm mt-2 '>
                    <span className='font-semibold'>Population: </span> {props.country.population} <span className='text-xs text-gray-500'>p</span>
                </p>

            </div>
        </div>
    )
}

export default ModalContent