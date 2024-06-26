import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cartItems: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        createCartItems: (state, action) => {
            state.cartItems.push(action.payload);
        }
    }
})

export function addOneToCart(productId) {
    return function (dispatch, getState) {
        console.log("hellooo");
        const storeState = getState();
        const isAlreadyPresent = storeState.cart.cartItems.find(item => item.id === productId);

        if (!isAlreadyPresent) {
            const itemToAdd = storeState.products.items.find(item => item.id === productId);
            if (itemToAdd) {
                const newCartItem = {
                    ...itemToAdd,
                    quantity: 1
                };
                dispatch(cartSlice.actions.createCartItems(newCartItem));
            } else {
                console.error(`Product with id ${productId} not found`);
            }
        }
    }
}

export const { createCartItems } = cartSlice.actions;
export default cartSlice.reducer;
