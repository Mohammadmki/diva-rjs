import React, { useState } from 'react'
import Sidebar from '../components/dashboard/Sidebar'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { profile } from '../servises/user'
import { IoIosArrowBack } from "react-icons/io";
import { FaRegCreditCard } from "react-icons/fa6";
import { FaBookmark } from "react-icons/fa";
import { MdOutlineAccessTime } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";


function DashbordPage() {
  const{data,isLoading,error}=useQuery({queryKey:["getprofile"],queryFn:profile})
const [show,setshow]=useState(false)

const location=useLocation()


return (
 
     <div className='z-   relative grid mt-7 md:mt-0 grid-cols-3 md:grid-cols-5 lg:grid-cols-7 xl:grid-cols-9  w-full h-full pt-5'>
    <Sidebar/>
    <div className='col-span-full hidden md:inline-block   md:col-span-4 lg:col-span-6 xl:col-span-8 w-full h-full'>
      <Outlet/>
    </div>
    <div aria-disabled={location.pathname=="/my-divar"?false:true} className='z-50 md:hidden aria-disabled:hidden  pb-16 bg-neutral-200 col-span-full h-fit inline-block'>
      <header className='fixed top-0 w-full py-3 bg-neutral-200'>دیوار من</header>
   
          <div aria-disabled={show} className=' aria-disabled:pointer-events-none  flex bg-white pt-3  flex-col px-3 w-full h-fit'>

            <p> شما با شماره {data?.data.mobile}وارد شده ایدو آگهی های ثبت شده با این شماره را مشاهده میکنید</p>  
        <button onClick={()=>setshow(true)} className='rounded-full mt-5 border-solid text-sm text-neutral-500 py-1 justify-self-start self-end px-2 border-neutral-200 border-2'> خروج از حساب</button>
        <div  className='flex  z-10 flex-row justify-between h-fit w-full py-1 px-2 border-t-2 border-neutral-300 border-solid mt-2'>
       <p >تایید هویت شده</p>
       <IoIosArrowBack/>
       </div>
        </div> 
        <div className=' mt-4 py-1 gap-y-1 bg-white flex flex-col w-full px-3'>
          <div className='py-2 border-b-2 border-neutral-200 w-full flex flex-row justify-between'>
            <Link to={'/my-divar/my-posts'} className=' flex flex-row-reverse gap-x-1 text-neutral-700 items-center'>اگهی های من<FaUser/></Link>
            <IoIosArrowBack/>
          </div>
          <div className='py-1 mt-2 border-b-2 border-neutral-200 w-full flex flex-row justify-between'>
            <Link className='flex flex-row-reverse gap-x-1 text-neutral-700 items-center'>پرداخت های من<FaRegCreditCard/></Link>
            <IoIosArrowBack/>
          </div>
          <div className='py-1 mt-2 border-b-2 border-neutral-200 w-full flex flex-row justify-between'>
            <Link to={'/my-divar/book-Marks'} className='flex flex-row-reverse gap-x-1 text-neutral-700 items-center'>نشان ها و یادداشت ها<FaBookmark/></Link>
            <IoIosArrowBack/>
          </div>
          <div className='py-1 mt-2 border-b-2 border-neutral-200 w-full flex flex-row justify-between'>
            <Link className='flex flex-row-reverse gap-x-1 text-neutral-700 items-center'>باز دید های اخیر<MdOutlineAccessTime/></Link>
            <IoIosArrowBack/>
            
          </div>
          <div className='py-1 mt-2  w-full flex flex-row justify-between'>
            <Link className='flex flex-row-reverse gap-x-1 text-neutral-700 items-center'>تنظیمات<IoMdSettings/></Link>
            <IoIosArrowBack/>
          </div>
        </div>
        <div aria-disabled={show} className='transition-all z-50 duration-300 ease-in-out aria-disabled:h-20 overflow-hidden h-0 fixed bottom-0 mb-12 w-full grid   px-3  grid-cols-2 bg-white'>
          <p className='col-span-full text-center mb-3'>ایا مایل به خروج حساب خود هستید</p>
          <div className='col-span-full gap-x-5 flex flex-row mb-3'>
          <button className='w-full py-1 text-divar border-divar border-2'>بله</button>
          <button onClick={(e)=>setshow(false)} className='w-full text-divar border-divar border-2'>نه</button>
          </div>
        </div>
    </div>
    <div className='col-span-full row-span-full'>
    <Outlet/>
    </div>
   </div>

  )
}

export default DashbordPage