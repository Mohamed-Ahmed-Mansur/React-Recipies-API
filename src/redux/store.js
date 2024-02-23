import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./slice/users";
import logedInUserReducer from "./slice/logedInUser";
import getrecpieReducer from "./slice/Getdetails";

const store = configureStore({
  reducer: {
    users: usersReducer,
    logedInUser: logedInUserReducer,
    getrecpie: getrecpieReducer
  },
});
export default store;


