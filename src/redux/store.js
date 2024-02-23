import { configureStore } from "@reduxjs/toolkit";
import getrecpieReducer from "./slice/Getdetails";

const store = configureStore({
    reducer:{
        getrecpie:getrecpieReducer
    }
})
export default store;

