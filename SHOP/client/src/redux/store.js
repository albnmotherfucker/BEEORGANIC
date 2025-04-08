import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartRedux";  // Import the cart reducer properly

const store = configureStore({
  reducer: {
    cart: cartReducer,  // Use the correct cartReducer here
  },
});

export default store;