import React from 'react'
import { useState } from 'react'
import { useRef } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { updateItemFromSelect } from '../features/cart'
import { removeItemFromCart } from '../features/cart'

const ModalContent = ({closeModal}) => {
    const cart = useSelector(state => state.cart)
    const dispatch  = useDispatch()


    console.log(cart)
  return (
    <div onClick={closeModal} className='fixed z-10 top-0 left-0 bg-slate-800/90 w-full h-full flex justify-center items-center'>
        <div
        onClick={e => e.stopPropagation()}
        className='bg-slate-50 md:min-w-[750px] min-w-[530px] relative p-7 rounded'>
            <button 
            onClick={closeModal}
            className=' bg-red-500 text-slate-50 text-sm rounded absolute top-0 right-0 z-20 px-3 py-1 m-1 hover:bg-red-600'>
            X
            </button>
            {cart.cartItems.length <= 0 ? 'No Items' : cart.cartItems.map(obj => (
            <>
            <div className='flex justify-between items-center'>
                <img src={`/images/${obj.img}.png`} className='w-16 rounded shadow-md'/>
                <p>{obj.title}</p>
                <p>${obj.price} </p>
                <select
                onChange={e => dispatch(updateItemFromSelect({value:e.target.value, id: obj.id}))}
                name='quantity'
                value={obj.quantity}
                className='px-3 py-1 rounded border-slate-200 border shadow-md'>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                    <option value='5'>5</option>
                    <option value='6'>6</option>
                </select>
                <button
                onClick={() => dispatch(removeItemFromCart(obj.id))}
                className='bg-slate-700 rounded py-2 px-3 text-slate-100  hover:bg-slate-600'>
                Remove From Cart
                </button>
            </div>
            
            </>
            ) ) }
            {cart.cartItems.length > 0 && (
                <>
            <p className='my-6'>Your Total :
                <span>
                    {cart.cartItems.reduce((acc,curr) => acc + curr.price * curr.quantity,0).toFixed(2)}$
                </span>
            </p>
            <button className='bg-slate-700 block mx-auto rounded py-2 px-3 text-sm text-slate-100 hover:bg-slate-600'>Proceed To Checkout</button>
            </>
            )}
            </div>
    </div>
  )
}

export default ModalContent