
import { useQuery } from "@tanstack/react-query"
import Loader from "../components/Loader/Loader"
import Sibebar from "../components/main/sibebar"
import { getCategory } from "../servises/Category"
import { getPosts } from "../servises/getposts"
import { useEffect, useState } from "react"
import PostsSide from "../components/main/PostsSide"
import { useDispatch, useSelector } from "react-redux"
import { filterbyCategory } from "../features/Filter/filterSlice"
import { getpost } from "../features/post/allPostSlice"




function Mainpage() {
  
  
  const [category,setcategory]=useState()

  const {data:categorys,isLoading}=useQuery({queryKey:["category"],queryFn:getCategory})
  const {data:posts,isLoading:Loading,}=useQuery({queryKey:["getposts"],queryFn:getPosts})
 
  const dispatch=useDispatch()

  const post=useSelector((store)=>store.filter)
 

  useEffect(()=>{
    if(!Loading){

    dispatch(getpost(posts?.data.posts))
  }
     
  },[posts])
  useEffect(()=>{
    if(!category) return
    dispatch(filterbyCategory({category}))
      
    
       
  },[category])
  return (
    <div className="w-full px-5 h-full grid grid-cols-2 lg:grid-cols-6 md:grid-cols-4">
      {isLoading||Loading ?<Loader/>:
      <>
      <Sibebar setcategory={setcategory}  category={categorys?.data}/>
      <PostsSide   />
      </>
      }
      
    </div>
  )
}

export default Mainpage