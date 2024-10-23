import { createSlice } from "@reduxjs/toolkit";
import { filterbyCategory, FilterbySearch } from "../Filter/filterSlice";


const initialState={
    posts:[],
    allpost:[]
}

const allpostSlice=createSlice({
    name:"allpost",
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(filterbyCategory,(state,action)=>{
            
            const category=action.payload.category._id
            
         const newpost=state.allpost.filter((p)=>p.category==category)
          state.posts=newpost
          
        
        }),
        builder.addCase(FilterbySearch,(state,action)=>{
           console.log(state.allpost)
           const x=state.posts.filter((i)=>i.options.title.includes(action.payload))  
     
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