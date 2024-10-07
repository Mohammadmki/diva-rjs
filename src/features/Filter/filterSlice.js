
import { createSlice } from "@reduxjs/toolkit";





const filterSlice=createSlice({
    name:"filterCategory",
    initialState:{category:[],search:""},
    reducers:{
       FilterbySearch:(state,action)=>{
        
           state.search=action.payload
           
       },

    filterbyCategory:(state,action)=>{
    
    
      state.category=[action.payload.category]
      
    },
      
  }
    })

export default filterSlice.reducer
export const {FilterbySearch,filterbyCategory} =filterSlice.actions