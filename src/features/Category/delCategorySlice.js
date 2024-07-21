import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../configs/api";

const initialState={
    Loading:false,
    delstatus:[],
    error:""
}

const deletecategory=createAsyncThunk("delcategory/deletecategory",(id)=>{
 
    api.delete(`category/${id}`)
})

const delCategorySlice=createSlice({
    name:"delcategory",
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(deletecategory.pending,(state)=>{
            state.Loading=true
        }),
        builder.addCase(deletecategory.fulfilled,(state,action)=>{
            state.Loading=false,
            state.delstatus=action.payload,
            state.error=""
        }),
        builder.addCase(deletecategory.rejected,(state,action)=>{
            state.Loading=false,
            state.delstatus={},
            state.error=action.error.message
        });
    }
})

export default delCategorySlice.reducer
export {deletecategory}