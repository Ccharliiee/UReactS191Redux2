import { configureStore } from "@reduxjs/toolkit";

import uiReducer from "./uiSlice";
import cartReducer from "./cartSlice";

const store = configureStore({
  reducer: { uiReducer, cartReducer },
});

export default store;
