import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState={
    posts:[]
}
const savedSlice=createSlice({
    name:"save",
    initialState,
    reducers:{
     savedpost:(state,action)=>{
       
        state.posts=[...state.posts,action.payload]
        toast.success("اگهی نشان شد")
       console.log(state.posts)
     },
     deletemarks:(state,action)=>{
     
        
        const newmarks=state.posts.filter((i)=>i._id!==action.payload)
        state.posts=newmarks
      
     }
    }
})

export default savedSlice.reducer
export const {savedpost,deletemarks}=savedSlice.actions