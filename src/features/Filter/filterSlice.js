import { createSlice } from "@reduxjs/toolkit";
import SetCategory from "../../components/createpost/SetCategory";



const filterSlice=createSlice({
    name:"filterCategory",
    initialState:{},
    reducers:{
       Filterpost:(state,action)=>{
    
        if(!action.payload.search) return
       console.log(action.payload) 
  const posts=action.payload.data?.data.posts
const category=action.payload.category?.data  
console.log(category)
    const post= posts.filter((i)=>i.options)
 
    state.posts=post.filter((i)=>i.options.title.includes(action.payload.search));
    if(!state.posts.length)return
    console.log(state.posts[0].category)
    state.category=category.filter((i)=>i._id.includes(state.posts[0].category))
       },

    filterbyCategory:(state,action)=>{
        console.log(action)
    }  
    }
    })

export default filterSlice.reducer
export const {Filterpost,filterbyCategory} =filterSlice.actions