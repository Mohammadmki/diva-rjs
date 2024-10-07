




function Sibebar({category,setcategory}) {
  







  return (
    <div className='md:inline-block hidden col-span-1'>
         <ul className='xl:w-[280px] overflow-y-scroll fixed lg:w-[200px] md:w-[140px]  w-[100px] shrink flex flex-col gap-y-1  h-full '>
         {category?.map((category)=>(
            <li onClick={()=>setcategory(category)} key={category._id} className='flex xl:text-2xl text-nowrap  justify-start px-[5px] md:text-base py-3 lg:text-[18px] text-xs flex-row  text-neutral-400 rounded-md  hover:text-black  cursor-pointer items-center transition-all duration-300 ease-in-out '>
                 <img src={`${category.icon}.svg`}  />
                {category.name}
               
            </li>
        ))} 
        </ul>
  </div>
  )
}

export default Sibebar