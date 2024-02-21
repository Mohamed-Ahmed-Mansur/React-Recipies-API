import { configureStore } from "@reduxjs/toolkit";
import cuisineReducer from "./slices/cuisine";

const store = configureStore({
    reducer: {
        cuisine: cuisineReducer
    }
});
export default store;