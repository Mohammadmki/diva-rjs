
import { useQuery } from "@tanstack/react-query"
import Loader from "../components/Loader/Loader"
import Sibebar from "../components/main/sibebar"
import { getCategory } from "../servises/Category"
import { getPosts } from "../servises/getposts"
import { useEffect, useState } from "react"
import PostsSide from "../components/main/PostsSide"




function Mainpage() {
  
  const [display,setDisplay]=useState([])

  const {data:category,isLoading}=useQuery({queryKey:["category"],queryFn:getCategory})
  const {data:posts,isLoading:Loading,}=useQuery({queryKey:["getposts"],queryFn:getPosts})


  useEffect(()=>{
    setDisplay(()=>[posts?.data])
  },[posts])
  
  return (
    <div className="w-full h-full flex flex-row">
      {isLoading||Loading ?<Loader/>:
      <>
      <Sibebar category={category?.data}/>
      <PostsSide display={display}  />
      </>
      }
      
    </div>
  )
}

export default Mainpage