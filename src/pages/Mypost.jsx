import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { myPosts } from '../servises/user'
import { sp } from '../utils/number'



function Mypost() {

  const {data,isLoading,error}=useQuery({queryKey:["myposts"],queryFn:myPosts})


  return (
    <>
    <header className='fixed bg-neutral-100 md:hidden w-full py-3 top-0 z-50'>آگهی های من</header>
    <div className='z-10 md:mb-0 mb-16 md:pt-4 md:flex md:justify-center md:flex-wrap p-x-0 w-full h-full container mx-auto'> 
      {data?.data.posts.map(post=>(
     <div key={post._id } className='flex flex-row py-4 w-full  md:w-[800px] border-b-[1px]  border-solid border-neutral-300'>

      <div className='flex flex-row-reverse md:flex-row justify-between md:justify-normal w-full px-2 gap-x-2 md:gap-x-5'  >
        <div className='relative'>
        <img className='md:w-32 w-24 md:h-20 h-20 rounded-md' src={`${import.meta.env.VITE_BASE_URL}${post.images}`} alt="" />
        <div className='text-xs md:hidden bg-green-700 w-full text-center absolute text-white'>انتشارشده</div>
        </div>
        <div  className='flex flex-col justify-between '>
      <h2 className='md:text-base text-sm'>{post.options.title}</h2>
      <div>
        <p className='md:text-sm text-xs text-neutral-400'> {sp(post.amount)}تومان </p>
        <span className='md:text-sm text-xs text-neutral-400 '>درتاریخ {new Date(post.createdAt).toLocaleDateString("fa-IR")}</span>
        </div>
      </div>
      </div>
      <div className='self-center ml-3 flex flex-col'>
        <h2 className='md:text-lg text-xs mb-3 md:inline-block hidden text-nowrap'>وضعیت اگهی:<span className='text-green-600'>انتشارشده</span></h2>
        <button className=' md:inline-block hidden transition-all self-end duration-500 w-fit ease-in-out border-divar border-solid border-[1px] rounded-sm md:rounded-md md:py-2 md:px-4  md:text-sm text-divar hover:bg-red-50'>مدیریت اگهی</button>
      </div>
      </div>
  
      ))}
     
    </div>
    </>
  )
}

export default Mypost