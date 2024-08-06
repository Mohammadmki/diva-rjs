
import { useDispatch, useSelector } from 'react-redux'
import { filterposts } from '../../features/Filter/filterSlice'
import { useState } from 'react'

function Sibebar({category,post,setDisplay}) {
  


  const filterdpost=useSelector((store)=>store.filter)


 const disptch=useDispatch()

  return (
    <div className=''>
         <ul className='xl:w-[280px] overflow-y-scroll fixed lg:w-[200px] md:w-[140px]  w-[100px] shrink flex flex-col gap-y-1  h-full '>
         {category?.map((category)=>(
            <li onClick={()=>{disptch(filterposts({category,post})),setDisplay(filterdpost.posts)}} key={category._id} className='flex xl:text-2xl  justify-start px-[5px] md:text-base py-3 lg:text-[18px] text-xs flex-row  text-neutral-400 rounded-md  hover:text-black  cursor-pointer items-center transition-all duration-300 ease-in-out '>
                 <img src={`${category.icon}.svg`}  />
                {category.name}
               
            </li>
        ))} 
        </ul>
  </div>
  )
}

export default Sibebar