import { createSlice } from "@reduxjs/toolkit";

const initialState={
    post:[]
}

const detalesSlice=createSlice({
    name:"detale",
    initialState,
    reducers:{
      getpost:(state,action)=>{
    state.post=(action.payload)
      }


    }
})

export default detalesSlice.reducer
export const{getpost}=detalesSlice.actions