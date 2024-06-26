import shoppingCart from '../assets/shopping-cart.svg'
import { useState } from 'react';
import { createPortal } from 'react-dom';
import ModalContent from './ModalContent';
import {useSelector, useDispatch} from 'react-redux'

const Cart = () => {
    const [showModal, setShowModal] = useState(false);
    const cart = useSelector(state => state.cart)

    console.log(cart.cartItems.length)

  return (
    <>
    <div
    onClick={() => setShowModal(!showModal)}
    className='bg-gray-300 px-4 py-2 flex justify-center items-center rounded gap-3 hover:bg-gray-100 cursor-pointer'>
        <img src={shoppingCart} alt='shopping cart' className='w-5'/>
        <p>View your cart {cart.cartItems.length !==0 && ` : ${cart.cartItems.length}`}</p>
    </div>
    { showModal && createPortal(<ModalContent closeModal={()=> setShowModal(!showModal) }/>, document.body)}
    </>
  )
}

export default Cart