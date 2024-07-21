import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../configs/api";

const initialState={
    Loading:false,
    categorydata:[],
    error:""
}

const createcategory=createAsyncThunk("createcategory/createcategory",(form)=>{
   return api.post("category",form)
})

const createCategorySlice=createSlice({
    name:"createcategory",
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(createcategory.pending,(state)=>{
            state.Loading=true
        }),
        builder.addCase(createcategory.fulfilled,(state,action)=>{
            state.Loading=false,
            state.categorydata=action.payload,
            state.error=""
         }),
         builder.addCase(createcategory.rejected,(state,action)=>{
            state.Loading=false,
            state.categorydata="",
            state.error=action.payload.error.message
         });
    }
})

export default createCategorySlice.reducer
export {createcategory};