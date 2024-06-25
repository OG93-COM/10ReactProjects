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
    <div>ProductsList</div>
    <ul>
        {productsItems.items && productsItems.items.map(product => (<li key={product.id}>{product.title}</li>)
        )}
    </ul>
    </>
  )
}

export default ProductsList