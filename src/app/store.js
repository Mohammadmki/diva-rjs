import { configureStore } from "@reduxjs/toolkit";
import filterreducer from "../features/Filter/filterSlice";
import detalepostReducer from '../features/post/detalesSlice'
import savedpostReducer from '../features/post/savedSlice'
import postsReducer from "../features/post/allPostSlice"

const store=configureStore({
    reducer:{posts:postsReducer, filter:filterreducer,detale:detalepostReducer,saved:savedpostReducer}
})
export default store