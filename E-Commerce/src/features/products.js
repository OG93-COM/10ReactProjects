import {createSlice} from '@reduxjs/toolkit'

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
        fetch('/data/inventory.json')
        .then(res => {
            if (!res.ok) {
                throw new Error("Network response was not ok : " + res.status);
              }
              return res.json();
        })
        .then(data => dispatch(addProduct(data.products)))
    }
}

export const { addProduct } = productSlice.actions;
export default productSlice.reducer;