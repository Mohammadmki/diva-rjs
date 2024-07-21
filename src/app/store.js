import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from"../features/Category/ctegorySlice"
import createcategoryReducer from "../features/Category/createCategorySlice"
import delcategoryReducer from "../features/Category/delCategorySlice"

const store=configureStore({
    reducer:{ category:categoryReducer,createcategory:createcategoryReducer,delcategory:delcategoryReducer }
})
export default store