import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { getProductsList } from "../features/products";

const ProductsList = () => {
    const productsItems = useSelector(state => state.products)
    const dispatch = useDispatch()

    if(!productsItems.items){
        dispatch(getProductsList())
    } else {console.log(productsItems)
            console.log("✅✅✅✅✅") }

  return (
    <>
    <div className='px-6'>
        <h1 className='text-slate-200 text-xl mb-6'>Here Are Our Products</h1>
        <ul className='grid min-[500px]:grid-cols-2 md:grid-cols-4 gap-4'>
            {productsItems.items && productsItems.items.map(product =>
            (<li
                className='bg-slate-200 p-4 rounded min-h-[250px] '
                key={product.id}>
                <img src={`/images/${product.img}.png`} className='mb-4 rounded' alt={product.title}/>
                <div className='flex justify-between items-center mb-5'>
                    <p className='text-slate-700 text-xl'>{product.title}</p>
                    <p className='text-slate-900 font-bold'>{product.price}</p>
                </div>
                <button
                className={`${product.picked ? 'bg-green-700 p-2 hover:bg-green-800' : 'bg-slate-600 hover:bg-slate-800'} w-full p-2 rounded text-slate-200` }>
                {product.picked ? 'Item Picked ✅' : 'Add To Cart 🛒'}
                </button>
            </li>)
                )}
        </ul>
        
    </div>
    </>
  )
}

export default ProductsList