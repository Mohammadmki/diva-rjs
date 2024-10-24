import React from 'react'
import { sp } from '../../utils/number'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getpost } from '../../features/post/detalesSlice'



function PostsSide() {


  const post=useSelector((store)=>store.posts)


  const disptch=useDispatch()
  return (
        <div className='md:col-span-5 md:px-0 md:mb-0 mb-12  px-8 col-span-3 lg:col-span-9 xl:col-span-10 w-full flex flex-row flex-wrap gap-x-2 justify-center '>
  {!post.posts&&!post.posts.length?(
  <h3 className='text-red-600' >هیچ اگهیی وجود ندارد</h3>
)
  :
  <>
      {post?.posts.map((post)=>(
        <Link to={`/${post._id}`} onClick={()=>disptch(getpost(post))} key={post._id} className='flex rounded-md  flex-row-reverse justify-between p-2  my-2 w-full md:w-[290px] lg:w-[390px] h-36 md:h-44 lg:h-56 border-solid md:border-2 border-[1px] border-neutral-300'>
        <img className='w-[130px] h-full md:w-[146px] lg:w-[200px] rounded-md  mr-3' src={`${import.meta.env.VITE_BASE_URL}/${post.images[0]}`} alt="" />
        <div className='flex  flex-col overflow-hidden justify-between '>
          { <h4 className='text-lg md:text-xl lg:text-2xl '>{post.options.title}</h4> }
         <div>
          <span className='text-sm lg:text-base font-normal mb-2  text-neutral-400 '>{sp(post.amount)}تومان</span>
          <p className='text-sm lg:text-base font-normal text-neutral-400 truncate '>درتاریخ{new Date(post.createdAt).toLocaleDateString("fa-IR")}در{post.options.city}</p>
          </div>
        </div>
        </Link>
      ))}
  </>}
    </div>
  )
}

export default PostsSide