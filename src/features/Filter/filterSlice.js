import { createSlice } from "@reduxjs/toolkit";




const filterSlice=createSlice({
    name:"filterCategory",
    initialState:{},
    reducers:{
       FilterbySearch:(state,action)=>{
       

       },

    filterbyCategory:(state,action)=>{
        console.log(action)
    }  
    }
    })

export default filterSlice.reducer
export const {FilterbySearch,filterbyCategory} =filterSlice.actions