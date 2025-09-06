import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from './categoriesSlice.js'

const store = configureStore({
    reducer: categoryReducer,
})

export default store;