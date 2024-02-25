import { configureStore } from '@reduxjs/toolkit';
import getrecpieReducer from './slice/Getdetails';
import Language from './slice/Language';

const store = configureStore({
  reducer: {
    getrecpie: getrecpieReducer,
    language: Language,
  },
});
export default store;
