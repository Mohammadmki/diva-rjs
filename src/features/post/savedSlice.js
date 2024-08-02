import { createSlice } from "@reduxjs/toolkit";

const initialState={
    posts:[]
}
const savedSlice=createSlice({
    name:"save",
    initialState,
    reducers:{
     savedpost:(state,action)=>{
        state.posts=[...state.posts,(action.payload)]
        console.log(state.posts)
     },
     deletemarks:(state,action)=>{
        console.log(action.payload)
        const newmarks=state.posts.filter((i)=>i._id!==action.payload)
        state.posts=newmarks
     }
    }
})

export default savedSlice.reducer
export const {savedpost,deletemarks}=savedSlice.actions