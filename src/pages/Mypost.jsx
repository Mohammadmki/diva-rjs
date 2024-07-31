import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { myPosts } from '../servises/user'
import { CleanHands } from '@mui/icons-material'
import { sp } from '../utils/number'


function Mypost() {

  const {data,isLoading,error}=useQuery({queryKey:["myposts"],queryFn:myPosts})
  console.log(data)

  return (
    <div>
      {data?.data.posts.map(post=>(
          <div>
          <div>
             <img src={`${import.meta.env.VITE_BASE_URL}${post.images[0]}`}  />
             <p>{post.options.content}</p>
             <p></p>
             </div>
             <div>
              <p>{new Date(post.createdAt).toLocaleDateString("fa-IR")}</p>
              <span>{sp(post.amount)}</span>
             </div>
             </div>
      ))}
     
    </div>
  )
}

export default Mypost