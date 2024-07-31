import { createSlice } from "@reduxjs/toolkit";
import SetCategory from "../../components/createpost/SetCategory";

const initialState={
    post:[],
    category:[]
}

const filterSlice=createSlice({
    name:"filterCategory",
    initialState,
    reducers:{
       Filterpost:(state,action)=>{
    
        if(!action.payload.search) return
       console.log(action.payload) 
  const posts=action.payload.data?.data.posts
const category=action.payload.category?.data  
console.log(category)
    const post= posts.filter((i)=>i.options)
    
    state.post=post.filter((i)=>i.options.title.includes(action.payload.search));
    if(!state.post.length)return
    console.log(state.post[0].category)
    state.category=category.filter((i)=>i._id.includes(state.post[0].category))
       },
    
    }
    })

export default filterSlice.reducer
export const {Filterpost} =filterSlice.actions