import React from 'react'
import { useState } from 'react'

const ModalContent = ({cartData, closeModal}) => {
    const [price,setPrice] = useState(0)

    console.log(cartData)
  return (
    <div onClick={closeModal} className='fixed z-10 top-0 left-0 bg-slate-800/90 w-full h-full flex justify-center items-center'>
        <div
        onClick={e => e.stopPropagation()}
        className='bg-slate-50 md:min-w-[750px] min-w-[500px] relative p-7 rounded'>
            <button 
            onClick={closeModal}
            className=' bg-red-500 text-slate-50 text-sm rounded absolute top-0 right-0 z-20 px-3 py-1 m-1 hover:bg-red-600'>
            X
            </button>
            <h1 className='text-gray-500 text-xl'>Here is informations </h1>
            {cartData.cartItems.length == 0 ? 'No Items' : cartData.cartItems.map(obj => (
            <>
            <div className='flex justify-between items-center'>
                <img src={`/images/${obj.img}.png`} className='w-20'/>
                <p>{obj.title}</p>
                <p>{obj.price}</p>
            </div>
            </>
            ) ) }

        </div>
    </div>
  )
}

export default ModalContent