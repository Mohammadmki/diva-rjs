
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

import { useMutation, useQuery } from "@tanstack/react-query";
import { delCategory, getCategory } from "../../servises/Category";
import toast from 'react-hot-toast';
import { useEffect, useState } from 'react';
import Loader from '../Loader/Loader';


function Categorys() {

  

const {data,isLoading}=useQuery({queryKey:["category"],queryFn:getCategory})
const {mutate,data:deldata,isLoading:delLoading}=useMutation({mutationFn:delCategory})


  return (
    <div className='min-h-[400px]'>
      {isLoading?<Loader/>:<>
        {data?.data.map((category)=>(
        <div key={category._id} className="flex flex-row justify-between w-full py-3 px-1 border-solid border-neutral-300 border-2 my-6 rounded-md">
          <p className="flex flex-row-reverse ">{category.name} <img src={`${category.icon}.svg`} alt="" /> </p>
        <p className='text-divar'>slug:{category.slug} <button disabled={delLoading} onClick={()=>{mutate(category._id), toast.success("دسته بندی با موفقیت حذف شد")}} className="transition-all  duration-300 ease-in-out disabled:opacity-50 hover:text-divar mr-2 text-neutral-400 cursor-pointer"><DeleteOutlinedIcon /></button> </p>
        </div>
      ))}
      </>}
    </div>
  )
}

export default Categorys