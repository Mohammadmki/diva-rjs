import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../configs/api";

const initialState={
    Loading:false,
    categories:[],
    error:""
}

const getCtegory=createAsyncThunk("category/getCtegory",()=>{
  return api.get("category")
})

const categorySlice=createSlice({
    name:"category",
    initialState,
    extraReducers:(builder)=>{
     builder.addCase(getCtegory.pending,(state)=>{
        state.Loading=true
     }),
     builder.addCase(getCtegory.fulfilled,(state,action)=>{
        state.Loading=false,
        state.categories=action.payload.data,
        state.error=""
     }),
     builder.addCase(getCtegory.rejected,(state,action)=>{
        state.Loading=false,
        state.categories=[],
        state.error=action.error.message
     });
    }
})
export default categorySlice.reducer
export {getCtegory};
