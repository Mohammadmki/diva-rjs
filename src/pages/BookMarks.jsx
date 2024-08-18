import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { sp } from '../utils/number'
import { IoShareSocialOutline } from "react-icons/io5";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { deletemarks } from '../features/post/savedSlice';

function BookMarks() {

  const posts=useSelector((store)=>store.saved)
  const dispatch=useDispatch()
console.log(posts.posts)
  return (
    <div className='px-5 gap-y-2 md:gap-x-2 md:pt-5 flex flex-row flex-wrap'>
     {posts.posts.map((post)=>(
      <div className='border-neutral-200 rounded-md lg:w-[450px]  px-2 py-3 border-2 w-60 md:w-[350px] grid gap-y-4 gap-x-2 grid-cols-2 grid-rows-5' >
          <div className='row-span-4 flex flex-col justify-between'>
          <h3 className='text-base lg:text-xl xl:text-2xl'>
         {post.options.title}
         </h3>
         <div>
          <p className='text-neutral-400 lg:text-lg xl:text-xl md:text-base text-xs font-extralight'>{sp(post.amount)}  تومان</p>
          <p className='text-neutral-400 text-xs md:text-base '>درتاریخ{new Date(post.createdAt).toLocaleTimeString("fa-IR")}</p>
         </div>
         </div>
           {post.images.length?
           <img className='w-full h-full row-span-4 rounded-md border-black' src={`${import.meta.env.VITE_BASE_URL}${post.images[0]}`} alt="" />:
            <div className='bg-neutral-300 w-full h-full row-span-4 text-neutral-500 flex items-center justify-center'>
              <h3>این اگهی عکس ندارد</h3>
            </div>
           }
           <div className='w-full  h-fit gap-x-1 md:gap-x-2 col-span-full grid grid-cols-2'>
            <button className='transition-all flex flex-row justify-center py-[1px] md:py-[2px] lg:text-lg xl:text-xl md:text-base text-xs w-full duration-300 ease-in-out text-neutral-400 hover:text-neutral-800 rounded-md  border-neutral-800 border-[1px] hover:bg-neutral-50'>اشتراک گذاری<IoShareSocialOutline className='md:text-xl lg:text-2xl xl:text-3xl text-lg' /></button>
            <button onClick={()=>dispatch(deletemarks(post._id))} className='transition-all flex flex-row justify-center lg:text-lg xl:text-xl md:text-base text-sm py-[1px] md:py-[2px] w-full duration-300 ease-in-out text-neutral-400 hover:text-neutral-800 rounded-md  border-neutral-800 border-[1px] hover:bg-neutral-50'>حذف نشان <MdOutlineDeleteOutline className='md:text-xl lg:text-2xl xl:text-3xl text-lg' /></button>
           </div>
      </div>
     ))}
    </div>
  )
}

export default BookMarks