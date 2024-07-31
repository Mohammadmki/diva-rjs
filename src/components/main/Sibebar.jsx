import React from 'react'

function Sibebar({category}) {
    
  return (
    <div className=''>
         <ul className='xl:w-[280px] lg:w-[200px] md:w-[140px] w-[100px] shrink flex flex-col gap-y-1  mt-14 h-full overflow-auto'>
         {category?.map((category)=>(
            <li  key={category._id} className='flex xl:text-2xl  justify-start px-[5px] md:text-base py-3 lg:text-[18px] text-xs flex-row  text-neutral-400 rounded-md  hover:text-black  cursor-pointer items-center transition-all duration-300 ease-in-out '>
                 <img src={`${category.icon}.svg`} alt="" />
                {category.name}
               
            </li>
        ))} 
        </ul>
  </div>
  )
}

export default Sibebar