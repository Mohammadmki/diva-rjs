import { configureStore } from "@reduxjs/toolkit";
import filterreducer from "../features/Filter/filterSlice";



const store=configureStore({
    reducer:{filter:filterreducer}
})
export default store