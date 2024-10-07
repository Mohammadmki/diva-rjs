import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { RiFilePaper2Line } from "react-icons/ri";
import { FaRegBookmark } from "react-icons/fa6";
import { IoMdExit } from "react-icons/io";
import { useQuery } from '@tanstack/react-query';
import { profile } from '../../servises/user';

function Sidebar() {

  const navigate=useNavigate()

  const DeleteHandler=()=>{
    document.cookie='refreshToken=;expires=Thu,01 Jan 1970 00:00:00 UTC; path=/;'
    document.cookie='accessToken=; expires=Thu,01 Jan 1970 00:00:00 UTC; path=/;'
    refetch()
    navigate("/")
   
    const{refetch}=useQuery({queryKey:["getprofile"],queryFn:profile})

   }
  return (
    <ul className='hidden  col-span-1 pt-4 md:flex flex-col w-full min-h-[100vh] items-start gap-y-3  px-2'>
        <li>
        <NavLink to={"/my-divar/my-posts"} className="transition-all items-center duration-300 flex flex-row gap-x-1 ease-in-out text-xs md:text-sm lg:text-base text-neutral-400 hover:text-neutral-700" >< RiFilePaper2Line className='md:text-base lg:text-lg'/> آگهی های من</NavLink>
          </li>
          <li>
            <NavLink to={"/my-divar/book-Marks"} className="transition-all duration-300 ease-in-out flex flex-row-reverse gap-x-1 items-center text-xs md:text-sm lg:text-base text-neutral-400 hover:text-neutral-700">نشان ها<FaRegBookmark/> </NavLink>
          </li>
          <li> <p onClick={DeleteHandler} className='transition-all items-center duration-300 cursor-pointer flex flex-row gap-x-1 ease-in-out text-xs md:text-sm lg:text-base text-neutral-400 hover:text-neutral-700'><IoMdExit/> خروج</p> </li>
    </ul>
  )
}

export default Sidebar