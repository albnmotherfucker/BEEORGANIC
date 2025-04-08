import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartRedux";  // Import the cart reducer properly
import userReducer from "./userRedux"; // Import the user reducer properly

const store = configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer,
  },
});

export default store;