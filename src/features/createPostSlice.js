import { createSlice } from "@reduxjs/toolkit";

initialState={
   post:{category:"",city:"",amount:null,images:null,content:"",title:""}
}

const createPostSlice=createSlice({
    name:"createpost",
    initialState,
    reducers:{
     setCategory:(state,action)=>{
       state.post.Category=action.payload
     }
    }
})