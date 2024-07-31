import React from 'react'
import { sp } from '../../utils/number'
import { Link } from 'react-router-dom'

function PostsSide({display}) {
  return (
        <div className='flex flex-row flex-wrap gap-x-3 justify-center   h-168 overflow-hidden mt-16'>
      {display[0]?.posts.map((post)=>(
        <Link key={post._id} className='flex rounded-md  flex-row-reverse justify-between p-2  my-2 w-[210px] md:w-[320px] lg:w-[390px] border-solid border-2 border-neutral-300'>
        <img className='w-[80px] h-24 md:w-[146px] lg:w-[160px] rounded-md md:h-[136px] mr-3' src={`${import.meta.env.VITE_BASE_URL}${post.images}`} alt="" />
        <div className='flex  flex-col overflow-hidden justify-between '>
          <h4 className='text-lg md:text-xl lg:text-2xl '>{post.options.title}</h4>
         <div>
          <span className='text-sm lg:text-base font-normal mb-2  text-neutral-400 '>{sp(post.amount)}تومان</span>
          <p className='text-sm lg:text-base font-normal text-neutral-400 truncate '>درتاریخ{new Date(post.createdAt).toLocaleDateString("fa-IR")}در{post.options.city}</p>
          </div>
        </div>
      
        </Link>
      ))}
    </div>
  )
}

export default PostsSide