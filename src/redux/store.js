import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../reducers/authReducer";
import cartReducer from "../reducers/cartReducer";
import productDetailsReducer from "../reducers/productDetailsReducer";

const rootReducer = {
  auth: authReducer,
  cart: cartReducer,
  productDetails: productDetailsReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
