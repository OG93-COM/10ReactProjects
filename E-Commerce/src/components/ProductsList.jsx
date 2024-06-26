import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getProductsList } from "../features/products";
import { addOneToCart } from '../features/cart';
import Cart from './Cart';

const ProductsList = () => {
    const productsItems = useSelector(state => state.products)
    const dispatch = useDispatch()

    useEffect(() => {
        if (!productsItems.items) {
            dispatch(getProductsList())
        }
    }, [dispatch, productsItems.items])

    return (
        <div className='px-6'>
            <div className='flex justify-between items-center mx-auto mb-6'>
            <h1 className='text-slate-200 text-xl '>Here Are Our Products</h1>
            <Cart/>
            </div>
            

            <ul className='grid min-[600px]:grid-cols-2 min-[300px]:grid-cols-1 md:grid-cols-3 gap-4'>
                {productsItems.items && productsItems.items.map(product =>
                    (<li
                        className='bg-slate-200 p-4 rounded'
                        key={product.id}>
                        <img src={`/images/${product.img}.png`} className='mb-4 rounded' alt={product.title} />
                        <div className='flex justify-between items-center mb-5'>
                            <p className='text-slate-700 text-xl'>{product.title}</p>
                            <p className='text-slate-900 font-bold'>{product.price}</p>
                        </div>
                        <button
                            onClick={() => dispatch(addOneToCart(product.id))}
                            className={`${product.picked ? 'bg-green-700 p-2 hover:bg-green-800' : 'bg-slate-600 hover:bg-slate-800'} w-full p-2 rounded text-slate-200`}>
                            {product.picked ? 'Item Picked ✅' : 'Add To Cart 🛒'}
                        </button>
                    </li>)
                )}
            </ul>
        </div>
    )
}

export default ProductsList
