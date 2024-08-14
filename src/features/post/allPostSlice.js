import { createSlice } from "@reduxjs/toolkit";
import { filterbyCategory } from "../Filter/filterSlice";

const initialState={
    posts:[],
    allpost:[]
}

const allpostSlice=createSlice({
    name:"allpost",
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(filterbyCategory,(state,action)=>{
            console.log(action.payload)
            const category=action.payload.category._id
          
         const newpost=state.allpost.filter((p)=>p.category==category)
           console.log(newpost)
          state.posts=newpost
        })
    },
      
    
    reducers:{
        getpost:(state,action)=>{
           state.allpost=action.payload.filter((i)=>i.options)
           state.posts=state.allpost
        }
    }
})

export default allpostSlice.reducer
export const {getpost}=allpostSlice.actions