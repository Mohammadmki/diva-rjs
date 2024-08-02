import { configureStore } from "@reduxjs/toolkit";
import filterreducer from "../features/Filter/filterSlice";
import detalepostReducer from '../features/post/detalesSlice'
import savedpostReducer from '../features/post/savedSlice'

const store=configureStore({
    reducer:{filter:filterreducer,detale:detalepostReducer,saved:savedpostReducer}
})
export default store