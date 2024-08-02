import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { myPosts } from '../servises/user'
import { sp } from '../utils/number'



function Mypost() {

  const {data,isLoading,error}=useQuery({queryKey:["myposts"],queryFn:myPosts})
  console.log(data)

  return (
    <div className='mt-16 w-full h-full container mx-auto'> 
  
      {data?.data.posts.map(post=>(
     <div className='flex flex-row  w-[800px] border-b-[1px] pb-4 border-solid border-neutral-300'>

      <div className='flex flex-row w-full gap-x-5'  >
        <img className='w-32 h-28 rounded-md' src={`${import.meta.env.VITE_BASE_URL}${post.images}`} alt="" />
        <div  className='flex flex-col justify-between '>
      <h2>{post.options.title}</h2>
      <div>
        <p className='text-sm text-neutral-400'> {sp(post.amount)}تومان </p>
        <span className='text-sm text-neutral-400 '>درتاریخ {new Date(post.createdAt).toLocaleDateString("fa-IR")}</span>
        </div>
      </div>
      </div>
      <div className='self-center ml-3 flex flex-col'>
        <h2 className='text-lg mb-3 text-nowrap'>وضعیت اگهی:<span className='text-green-600'>انتشارشده</span></h2>
        <button className='transition-all self-end duration-500 w-fit ease-in-out border-divar border-solid border-[1px] rounded-md py-2 px-4 text-sm text-divar hover:bg-red-50'>مدیریت اگهی</button>
      </div>
      </div>
  
      ))}
     
    </div>
  )
}

export default Mypost