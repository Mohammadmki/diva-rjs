import { createSlice } from "@reduxjs/toolkit";
import SetCategory from "../../components/createpost/SetCategory";


const initialState={
    posts:[],
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
 
    state.posts=post.filter((i)=>i.options.title.includes(action.payload.search));
    if(!state.posts.length)return
    console.log(state.posts[0].category)
    state.category=category.filter((i)=>i._id.includes(state.posts[0].category))
       },

    filterposts:(state,action)=>{
        
      
       const category=action.payload.category._id
       const post=action.payload.post
       const filtercategory=post.filter((i)=>i.category==category)
       state.posts=filtercategory
        
    }    
    }
    })

export default filterSlice.reducer
export const {Filterpost,filterposts} =filterSlice.actions