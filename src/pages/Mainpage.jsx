
import { useQuery } from "@tanstack/react-query"
import Loader from "../components/Loader/Loader"
import Sibebar from "../components/main/sibebar"
import { getCategory } from "../servises/Category"
import { getPosts } from "../servises/getposts"
import { useEffect, useState } from "react"
import PostsSide from "../components/main/PostsSide"
import { useDispatch, useSelector } from "react-redux"
import { filterposts } from "../features/Filter/filterSlice"




function Mainpage() {
  
  const [display,setDisplay]=useState([])
  const [categoryFilter,setcategoryFilter]=useState()

  const {data:category,isLoading}=useQuery({queryKey:["category"],queryFn:getCategory})
  const {data:posts,isLoading:Loading,}=useQuery({queryKey:["getposts"],queryFn:getPosts})
 
  const dispatch=useDispatch()

  const post=useSelector((store)=>store.filter)


  useEffect(()=>{
    setDisplay(posts?.data.posts)
   
  },[posts])
  useEffect(()=>{
    if(!categoryFilter) return
    dispatch(filterposts({categoryFilter,posts}))
       setDisplay(post.posts)
       console.log(display)
  },[categoryFilter])
  return (
    <div className="w-full px-5 h-full grid grid-cols-2 lg:grid-cols-6 md:grid-cols-4">
      {isLoading||Loading ?<Loader/>:
      <>
      <Sibebar setcategoryFilter={setcategoryFilter}  category={category?.data}/>
      <PostsSide  display={display}  />
      </>
      }
      
    </div>
  )
}

export default Mainpage