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

  const posts=action.payload.data?.data.posts

    const post= posts.filter((i)=>i.options)
    
    state.post=post.filter((i)=>i.options.title.includes(action.payload.search));
    
       },
       FilterCategory:(state,action)=>{
        if(!state.post.length){
            return
        }else{
            const category= action.payload.data;
           
               if(!state.post) return
         for(let i=0;i<category.length;i++){
           if(category[i]._id==state.post[0].category){
               state.category=[category[i]]
             }
      }
        }
       
}
    }
    
})

export default filterSlice.reducer
export const {Filterpost,FilterCategory} =filterSlice.actions