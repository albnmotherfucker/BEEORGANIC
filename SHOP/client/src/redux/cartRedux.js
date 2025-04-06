import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
    initialState: {
        products: [],
        quantity: 0,
        total: 0,
    },
    reducers: {
        addProduct: (state, action) => {
            state.quantity += 1;
            state.products.push(action.payload.product);
            state.total += action.payload.price;
        },
        // // removeProduct: (state, action) => {
        // //     const productIndex = state.products.findIndex(product => product.id === action.payload.id);
        // //     if (productIndex !== -1) {
        // //         const product = state.products[productIndex];
        // //         state.quantity -= 1;
        // //         state.total -= product.price * product.quantity;
        // //         state.products.splice(productIndex, 1);
        // //     }
        // },
    },
})

export const { addProduct } = cartSlice.actions;
export default cartSlice.reducer;