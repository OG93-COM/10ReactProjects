import {createSlice} from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    items: undefined
}

export const productSlice = createSlice({
    name:'products',
    initialState,
    reducers:{
        addProduct: (state,action) => {
            state.items = action.payload;
        }
    },
    extraReducers: {
        ["cart/createCartItems"]: (state, action) => {
            const product = state.items.find(el => el.id === action.payload.id);
            if (product) {
                product.picked = true;
            }
        },
        ["cart/removeItemFromCart"]: (state,action) => {
            state.items.find(el => el.id === action.payload).picked = false
        }
    }
})

// Middelware Function
export const getProductsList = (action) => {
    return function(dispatch, getState) {
        const url = '/data/inventory.json'
        axios.get(url)
        .then(res => {
            console.log(res)
            if (res.status = 200) {
                throw new Error("Network response was not ok " + res.status + ' Not Found');
              }
              return res.data;
        })
        .then(data => dispatch(addProduct(data.products)))
        .catch(err => console.log("❌ " + err.message))
    }
}

export const { addProduct } = productSlice.actions;
export default productSlice.reducer;